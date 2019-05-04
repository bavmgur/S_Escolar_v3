const { Assistance, Student, Sequelize, sequelize } = require('../models/index')
const Op = Sequelize.Op


async function setAssistances(req, res) {

    let date = new Date()

    students = await Student.findAll({
            raw: true
        })
        .catch(err => {
            if (err) throw err
        })

    students.map(async item => {

        await Assistance.create({
            hour: date.getHours() + ':' + date.getMinutes(),
            state: 0,
            StudentId: item.id
        }).catch(err => {
            console.log(err)
            if (err) throw err
        })

    })

    res.json(students)
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
            res.send(assistance['dataValues'])
        })


}

async function getAllAssistancesByStudent(req, res) {

    const defaultHour = [11, 33]

    const query = req.query
    let assistances = []
    let queryConfig = {}

    if (!query.cod_alumno) {
        return res.status(404).json({
            ok: false,
            message: 'No existe un alumno con este id'
        })
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
            if (err) throw err
        })
    assistances.rows.map(item => {

        let hourArray = item.hour.toString().split(':')
        item.state = (item.state == 0 ? "Falto" : "Asistio")
        item['arrived'] = (defaultHour[0] < hourArray[0] || defaultHour[1] < hourArray[1] ? "Tarde" : "Temprano")
    })

    if (assistances.count == 0) {
        return res.status(404).json({
            ok: false,
            message: 'No existen datos para esta busqueda'
        })
    }

    res.status(200).json({
        ok: true,
        assistances
    })
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