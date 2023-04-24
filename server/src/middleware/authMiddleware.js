const jwt = require('jsonwebtoken')


module.exports = function validateJWT(req, res, next) {

    console.log('cookies: ', req.cookies)
    const token = req.cookies.auth;
    if (!token) return next();

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)

        req.local = { ...user };
    } catch (err) {
        res.clearCookie('auth');
    }

    next();

}


