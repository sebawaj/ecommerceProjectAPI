/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 3000 artículos con textos ficticios.
 *
 * A priori, esta función debería ser ejecutada una única vez, al correr el
 * proyecto. Esto está hecho el archivo dbInitialSetup.js. Para evitar que se
 * corran los seeders se podría borrar o comentar dicha línea. Como alternativa
 * se podría escribir un código que permita ejectuar los seeders desde la
 * terminal.
 *
 */

const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Remeras",
      img: "Pintura_beige.avif",
    },
    {
      name: "Pantalones",
      img: "Ceramica_Conejo.webp",
    },
    {
      name: "Camisas",
      img: "Madera_Bowl.webp",
    },
    {
      name: "Buzos",
      img: "Tejido_Beagle.webp",
    },
    {
      name: "Camperas",
      img: "Ceramica_Taza.webp",
    },
    {
      name: "Bermudas",
      img: "Ceramica_Taza.webp",
    },
    {
      name: "Otros",
      img: "Ceramica_Taza.webp",
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categories.");
};
