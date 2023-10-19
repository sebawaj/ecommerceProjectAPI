const { Admin } = require("../models");

async function isAdmin(req, res, next) {
  const admin = Admin.findOne({ where: { email: req.auth.email } });
  if (admin) {
    // req.auth.email debería ser un email existente entre admins
    next();
  } else {
    res.status(401).json({ msg: "Non authorized" });
  }
}

module.exports = isAdmin;
