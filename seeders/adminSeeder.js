const { Admin } = require("../models");

module.exports = async () => {
  const admin = {
    firstname: "Juan",
    lastname: "Pérez",
    email: "admin@1234.com",
    password: "1234",
  };

  await Admin.create(admin);
  console.log("[Database] Se corrió el seeder de Admins.");
};
