function notFound(res) {
    return res.status(404).json({
        ok: false,
        message: 'El elemento solicitado no existe'
    })
}

function internalServerError(res, err) {
    return res.status(500).json({
        ok: false,
        message: 'Algo salio mal',
        err: err
    })
}

function success(res, obj) {
    res.status(200).json({
        ok: true,
        message: 'Solicitud procesada con exito',
        resp: obj
    })
}

module.exports = {
    notFound,
    internalServerError,
    success
}