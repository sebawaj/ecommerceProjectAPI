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

const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      title: "Remera Manga corta",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 10,
      img: { img1: "Ceramica_Maceta.jpg", img2: "Ceramica_Maceta2.jpg" },
      stock: 52,
      rating: 5,
      categoryId: 2,
    },
    {
      title: "Remera Manga larga",
      description:
        "Esta pintura de orca es una obra de arte única y vibrante que seguramente llamará la atención de tus invitados. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la majestuosidad de las ballenas orcas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 30,
      img: { img1: "Pintura_Orca.avif", img2: "Pintura_Orca2.avif", img3: "Pintura_Orca3.webp" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pantalones cargo",
      description:
        "Si eres un amante de la vida marina, esta pintura de ballena es perfecta para ti. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la belleza de las ballenas. Con su tamaño de 60x80 cm, esta pintura es el complemento ideal para cualquier habitación en tu hogar.",
      price: 60,
      img: {
        img1: "Pintura_Ballena.webp",
        img2: "Pintura_Ballena2.webp",
        img3: "Pintura_Ballena3.webp",
      },
      stock: 4,
      rating: 4,
      categoryId: 1,
    },
    {
      title: "Pantalones de vestir",
      description:
        "Esta pintura abstracta en tonos beige es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 250,
      img: { img1: "Pintura_beige.avif", img2: "Pintura_beige2.avif" },
      stock: 1,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Camisas manga larga",
      description:
        "Si prefieres una decoración más minimalista, esta pintura en blanco y negro es perfecta para ti. Con su estilo clásico y elegante, esta pintura es una representación impresionante de la belleza de la simplicidad. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 300,
      img: {
        img1: "Pintura_BlancoyNegro.webp",
        img2: "Pintura_BlancoyNegro2.webp",
      },
      stock: 6,
      rating: 4.5,
      categoryId: 1,
    },
    {
      title: "Camisas manga corta",
      description:
        "Si eres un fanático de la saga de El Señor de los Anillos, esta pintura de la casa de un hobbit es un artículo imprescindible para tu colección. Con su estilo detallado y su atención al detalle, esta pintura es una representación impresionante de la casa de Bilbo Bolsón en Hobbiton. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar.",
      price: 1000,
      img: { img1: "Pintura_Cabania.webp", img2: "Pintura_Cabania2.webp" },
      stock: 1,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Buzos de polar",
      description:
        "Esta pintura de un hipopótamo es una obra de arte única y vibrante que seguramente llamará la atención de tus invitados. Con su uso magistral del color y su estilo realista, esta pintura es una representación impresionante de la fuerza y la belleza de los hipopótamos. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 46,
      img: {
        img1: "Pintura_Hipopotamo.webp",
        img2: "Pintura_Hipopotamo2.webp",
      },
      stock: 14,
      rating: 3,
      categoryId: 1,
    },
    {
      title: "Camperas de neopreno",
      description:
        "Esta pintura de montaña nevada es una obra de arte impresionante que captura la belleza y la majestuosidad de los paisajes montañosos. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 230,
      img: { img1: "Pintura_Montania.webp", img2: "Pintura_Montania2.webp" },
      stock: 4,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Camperas de guata",
      description:
        "Esta pintura de olas es una obra de arte única y vibrante que captura la energía y la emoción del océano. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la belleza de las olas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 25,
      img: { img1: "Pintura_Olas.webp", img2: "Pintura_Olas2.webp" },
      stock: 2,
      rating: 3.5,
      categoryId: 1,
    },
    {
      title: "Bermudas",
      description:
        "Esta pintura de perros es una obra de arte tierna y emotiva que captura la belleza y la lealtad de los mejores amigos del hombre. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza y la personalidad de los perros. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 30,
      img: { img1: "Pintura_Perro.webp", img2: "Pintura_Perro2.webp", img3: "Pintura_Perro3.webp" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Cofias",
      description:
        "Esta pintura abstracta en tonos cálidos es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina y agregar un toque de calidez y color a tu espacio.",
      price: 340,
      img: { img1: "Pintura_Warm.avif", img2: "Pintura_warm2.avif" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Delantales",
      description:
        "Este conejo de cerámica es una pieza de decoración adorable y llena de personalidad. Hecho de cerámica de alta calidad, este conejo tiene detalles intrincados y un acabado suave y brillante. Con su tamaño de 15 cm de altura, este conejo es perfecto para colocar en una estantería, en una mesa o en cualquier otro lugar que desees agregar un toque de encanto a tu hogar.",
      price: 16,
      img: { img1: "Ceramica_Conejo.webp", img2: "Ceramica_Conejo2.webp" },
      stock: 13,
      rating: 5,
      categoryId: 2,
    },
    {
      title: "Gorros",
      description:
        "Este set para matcha de cerámica y bambú es la manera perfecta de disfrutar de la ceremonia del té japonés en la comodidad de tu hogar. El set incluye una taza de cerámica hecha a mano con una capacidad de 300 ml, un batidor de bambú para mezclar el té matcha y una cuchara de bambú para medir la cantidad correcta de té. Todo el set está cuidadosamente hecho a mano y diseñado para ofrecer una experiencia de té auténtica y relajante.",
      price: 55,
      img: { img1: "Ceramica_Match.webp", img2: "Ceramica_Match2.webp" },
      stock: 3,
      rating: 4.6,
      categoryId: 2,
    },
    {
      title: "Zapatos",
      description:
        "Esta taza de cerámica floreada es una pieza de arte hermosa y única. Hecha a mano por artistas locales, cada taza es única y tiene detalles florales pintados a mano. Con su tamaño de 350 ml, esta taza es perfecta para disfrutar de tu bebida favorita y agregar un toque de belleza y elegancia a tu hora del té.",
      price: 12,
      img: { img1: "Ceramica_Taza.webp", img2: "Ceramica_Taza2.webp" },
      stock: 13,
      rating: 4.8,
      categoryId: 2,
    },
  ];
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
