// Importamos las rutas
const StudentRoutes = require('./student.routes')
const SchoolYearRoutes = require('./schoolyear.routes')
const ClassroomRoutes = require('./classroom.routes')
const LoginRoutes = require('./login.routes')
const SecretaryRoutes = require('./secretary.routes')
const AssistanceRoutes = require('./assistance.routes')

module.exports = app => {
    // Aqui van las rutas para exportar
    app.use('api/student', StudentRoutes)
    app.use('api/classroom', ClassroomRoutes)
    app.use('api/schoolyear', SchoolYearRoutes)
    app.use('api/secretary', SecretaryRoutes)
    app.use('api/assistance', AssistanceRoutes)

    app.use('api/login', LoginRoutes)
}