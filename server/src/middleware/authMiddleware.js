const jwt = require('jsonwebtoken')


module.exports = function validateJWT(req, res, next) {

    const token = req.cookies.auth;
    if (!token) return next();

    const user = jwt.verify(token, process.env.JWT_SECRET)

    req.local = { ...user };

    next();

}


