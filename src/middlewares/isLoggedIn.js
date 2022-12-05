const isLoggedIn = (req, res, next) => {
    if (req.session.user) res.locals.user = req.session.user
    return next();
}

module.exports = isLoggedIn;