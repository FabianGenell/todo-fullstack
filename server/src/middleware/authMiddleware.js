const jwt = require('jsonwebtoken')


module.exports = function validateJWT(req, res, next) {

    // console.log({ auth: req.headers.authorization });
    if (req.headers.authorization == undefined) return next();
    const token = req.headers.authorization.split(' ')[1];
    console.log({ token })
    if (!token) return next();

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.local = { ...user };
    } catch (err) {
        res.resetAuthToken = true;

    }

    next();

}


