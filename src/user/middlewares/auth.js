const passport = require("passport");



const checkRole = roles => (req, res, next) => !roles.includes(req.user.role) ? res.status(401).json("Your Are Not Permited") : next();

module.exports = {
    checkRole
}



const userAuth = passport.authenticate("jwt", { session: false });
