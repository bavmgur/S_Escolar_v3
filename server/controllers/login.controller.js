const bCrypt = require('bcrypt');

function login(req, res) {
    console.log("sadasd")
    if (req.body.username === 'demo' && req.body.password === 'demo') {
        req.session.authUser = { username: 'demo' }
        return res.json({ username: 'demo' })
    }
    res.status(401).json({ error: 'Bad credentials' })
}

module.exports = {
    login
}