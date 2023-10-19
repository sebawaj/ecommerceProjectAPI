const { Admin } = require("../models");

module.exports = async () => {
  const admin = {
    firstname: "Sebastian",
    lastname: "Wajshan",
    email: "sebawajshan@gmail.com",
    password: "1234",
  };

  await Admin.create(admin);
  console.log("[Database] Se corrió el seeder de Admins.");
};
