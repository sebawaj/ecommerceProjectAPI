require("dotenv").config();

async function runAllSeeders() {
  await require("./categorySeeder")();
  await require("./userSeeder")();
  await require("./productSeeder")();
  await require("./adminSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

runAllSeeders();
