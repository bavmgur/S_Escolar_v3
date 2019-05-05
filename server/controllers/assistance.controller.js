const { Assistance, Student, Sequelize, sequelize } = require('../models/index')

const respHandler = require('../utils/resp-handler')

const Op = Sequelize.Op


async function setAssistances(req, res) {

    let date = new Date()

    students = await Student.findAll({
            raw: true
        })
        .catch(err => {
            respHandler.internalServerError(err)
        })

    students.map(async item => {

        await Assistance.create({
            hour: date.getHours() + ':' + date.getMinutes(),
            state: 0,
            StudentId: item.id
        }).catch(err => {
            respHandler.internalServerError(err)
        })

    })

    respHandler.success(res, students)
}


function createAssistance(req, res) {

    let date = new Date()

    const body = req.body

    Assistance.create({
            hour: date.getHours() + ':' + date.getMinutes(),
            state: body.state,
            StudentId: body.StudentId
        })
        .then(assistance => {
            respHandler.success(res, assistance['dataValues'])
        })
        .catch(err => {
            respHandler.internalServerError(err)
        })


}

async function getAllAssistancesByStudent(req, res) {

    const defaultHour = [11, 33]

    const query = req.query
    let assistances = []
    let queryConfig = {}

    if (!query.cod_alumno) {
        respHandler.notFound(res)
    }

    queryConfig = {
        StudentId: query.cod_alumno
    }

    if (query['state']) {
        queryConfig['state'] = query.state
    }

    if (query['fecha_inicio'] && query['fecha_final']) {
        queryConfig['createdAt'] = {
            [Op.between]: [query.fecha_inicio, query.fecha_final]
        }
    }

    assistances = await Assistance.findAndCountAll({
            attributes: ['id', 'hour', 'state', ['createdAt', 'date']],
            where: queryConfig,
            limit: 10,
            offset: (query.page || 1) * 10 - 10,
            raw: true
        })
        .catch(err => {
            respHandler.internalServerError(res, err)
        })
    assistances.rows.map(item => {

        let hourArray = item.hour.toString().split(':')
        item.state = (item.state == 0 ? "Falto" : "Asistio")
        item['arrived'] = (defaultHour[0] < hourArray[0] || defaultHour[1] < hourArray[1] ? "Tarde" : "Temprano")
    })

    if (assistances.count == 0) {
        respHandler.notFound(res)
    }

    respHandler.success(res, assistances)
}

// function deleteStudent(req, res) {
//     const params = req.params

//     Student
//         .findOne({
//             where: { id: params.id }
//         })
//         .then(student => {
//             SchoolYear.destroy({
//                     where: { id: params.id }
//                 })
//                 .then(student => {
//                     console.log("Estudiante eliminado", student)
//                 })
//         })
// }

module.exports = {
    createAssistance,
    getAllAssistancesByStudent,
    setAssistances
}