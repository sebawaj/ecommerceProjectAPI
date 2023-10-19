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
      title: "Maceta de Cerámica",
      description:
        "La maceta de cerámica es el complemento perfecto para cualquier espacio, ya sea en el interior de tu hogar o en el exterior de tu jardín. Esta maceta está hecha a mano con cerámica de alta calidad, lo que le confiere una gran resistencia y durabilidad. Además, su elegante diseño en tonos suaves de blanco y gris le da un toque de estilo y sofisticación que hará que resalte entre tus plantas.",
      price: 10,
      img: { img1: "Ceramica_Maceta.jpg", img2: "Ceramica_Maceta2.jpg" },
      stock: 52,
      rating: 5,
      categoryId: 2,
    },
    {
      title: "Pintura de Orca",
      description:
        "Esta pintura de orca es una obra de arte única y vibrante que seguramente llamará la atención de tus invitados. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la majestuosidad de las ballenas orcas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 30,
      img: { img1: "Pintura_Orca.avif", img2: "Pintura_Orca2.avif", img3: "Pintura_Orca3.webp" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pintura de una ballena",
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
      title: "Pintura Beige Abstracta",
      description:
        "Esta pintura abstracta en tonos beige es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 250,
      img: { img1: "Pintura_beige.avif", img2: "Pintura_beige2.avif" },
      stock: 1,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pintura en Blanco y Negro",
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
      title: "Pintura de la casa de un Hobbit",
      description:
        "Si eres un fanático de la saga de El Señor de los Anillos, esta pintura de la casa de un hobbit es un artículo imprescindible para tu colección. Con su estilo detallado y su atención al detalle, esta pintura es una representación impresionante de la casa de Bilbo Bolsón en Hobbiton. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar.",
      price: 1000,
      img: { img1: "Pintura_Cabania.webp", img2: "Pintura_Cabania2.webp" },
      stock: 1,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pintura de un hipopótamo",
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
      title: "Pintura de Montaña Nevada",
      description:
        "Esta pintura de montaña nevada es una obra de arte impresionante que captura la belleza y la majestuosidad de los paisajes montañosos. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza. Con su tamaño de 60x80 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 230,
      img: { img1: "Pintura_Montania.webp", img2: "Pintura_Montania2.webp" },
      stock: 4,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pintura de Olas",
      description:
        "Esta pintura de olas es una obra de arte única y vibrante que captura la energía y la emoción del océano. Con su uso magistral del color y su estilo impresionista, esta pintura es una representación impresionante de la belleza de las olas. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 25,
      img: { img1: "Pintura_Olas.webp", img2: "Pintura_Olas2.webp" },
      stock: 2,
      rating: 3.5,
      categoryId: 1,
    },
    {
      title: "Pintura de Perros",
      description:
        "Esta pintura de perros es una obra de arte tierna y emotiva que captura la belleza y la lealtad de los mejores amigos del hombre. Con su estilo realista y su atención al detalle, esta pintura es una representación impresionante de la naturaleza y la personalidad de los perros. Con su tamaño de 40x60 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina.",
      price: 30,
      img: { img1: "Pintura_Perro.webp", img2: "Pintura_Perro2.webp", img3: "Pintura_Perro3.webp" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Pintura abstrácta cálida",
      description:
        "Esta pintura abstracta en tonos cálidos es una obra de arte moderna y sofisticada. Con su uso audaz del color y su estilo abstracto, esta pintura es una representación impresionante de la creatividad y la originalidad. Con su tamaño de 50x70 cm, esta pintura es perfecta para adornar una pared en tu hogar o en tu oficina y agregar un toque de calidez y color a tu espacio.",
      price: 340,
      img: { img1: "Pintura_Warm.avif", img2: "Pintura_warm2.avif" },
      stock: 2,
      rating: 5,
      categoryId: 1,
    },
    {
      title: "Cerámica de Conejo",
      description:
        "Este conejo de cerámica es una pieza de decoración adorable y llena de personalidad. Hecho de cerámica de alta calidad, este conejo tiene detalles intrincados y un acabado suave y brillante. Con su tamaño de 15 cm de altura, este conejo es perfecto para colocar en una estantería, en una mesa o en cualquier otro lugar que desees agregar un toque de encanto a tu hogar.",
      price: 16,
      img: { img1: "Ceramica_Conejo.webp", img2: "Ceramica_Conejo2.webp" },
      stock: 13,
      rating: 5,
      categoryId: 2,
    },
    {
      title: "Set para Matcha de Cerámica y Bambú",
      description:
        "Este set para matcha de cerámica y bambú es la manera perfecta de disfrutar de la ceremonia del té japonés en la comodidad de tu hogar. El set incluye una taza de cerámica hecha a mano con una capacidad de 300 ml, un batidor de bambú para mezclar el té matcha y una cuchara de bambú para medir la cantidad correcta de té. Todo el set está cuidadosamente hecho a mano y diseñado para ofrecer una experiencia de té auténtica y relajante.",
      price: 55,
      img: { img1: "Ceramica_Match.webp", img2: "Ceramica_Match2.webp" },
      stock: 3,
      rating: 4.6,
      categoryId: 2,
    },
    {
      title: "Taza de cerámica floreada pintada a mano",
      description:
        "Esta taza de cerámica floreada es una pieza de arte hermosa y única. Hecha a mano por artistas locales, cada taza es única y tiene detalles florales pintados a mano. Con su tamaño de 350 ml, esta taza es perfecta para disfrutar de tu bebida favorita y agregar un toque de belleza y elegancia a tu hora del té.",
      price: 12,
      img: { img1: "Ceramica_Taza.webp", img2: "Ceramica_Taza2.webp" },
      stock: 13,
      rating: 4.8,
      categoryId: 2,
    },
    {
      title: "Taza Cono de Cerámica",
      description:
        "Esta taza con forma de cono es una pieza de cerámica elegante y moderna. Hecha de cerámica de alta calidad, esta taza tiene un acabado suave y brillante y una forma única que la hace ideal para agregar un toque de originalidad a tu hogar. Con su tamaño de 250 ml, esta taza es perfecta para disfrutar de una taza de café o té.",
      price: 33,
      img: { img1: "Ceramica_TazaCono.webp", img2: "Ceramica_TazaCono2.webp" },
      stock: 6,
      rating: 4.3,
      categoryId: 2,
    },
    {
      title: "Bowl de Madera",
      description:
        "Este bowl de madera es una pieza de decoración natural y rústica. Hecho de madera maciza, este bowl tiene un acabado suave y un diseño simple que lo hace perfecto para complementar cualquier estilo de decoración. Con su tamaño de 25 cm de diámetro, este bowl es perfecto para servir ensaladas, frutas o cualquier otro alimento que desees presentar con estilo.",
      price: 8,
      img: { img1: "Madera_Bowl.webp", img2: "Madera_Bowl2.webp" },
      stock: 22,
      rating: 4.1,
      categoryId: 3,
    },
    {
      title: "Canasto para huevos",
      description:
        "Este canasto para huevos de madera es una pieza de cocina práctica y elegante. Hecho de madera maciza con una red, este canasto es perfecto para almacenar huevos frescos y agregar un toque de estilo rústico a tu cocina. Con su tamaño de 20x15 cm, este canasto es lo suficientemente grande para almacenar una docena de huevos.",
      price: 21,
      img: { img1: "Madera_Canastohuevos.webp", img2: "Madera_Canastohuevos2.webp" },
      stock: 8,
      rating: 4.9,
      categoryId: 3,
    },
    {
      title: "Chanchito miniatura de madera",
      description:
        "Este chanchito miniatura de madera es una pieza de decoración encantadora y llena de personalidad. Hecho a mano con madera maciza de alta calidad, este chanchito tiene detalles intrincados y un acabado suave y natural. Con su tamaño de 10 cm de largo, este chanchito es perfecto para colocar en una estantería, en una mesa o en cualquier otro lugar que desees agregar un toque de encanto a tu hogar.",
      price: 18,
      img: { img1: "Madera_Chanchito.webp", img2: "Madera_Chanchito2.webp" },
      stock: 7,
      rating: 5,
      categoryId: 3,
    },
    {
      title: "Estantería modular de madera",
      description:
        "Esta estantería modular de madera es una pieza de mobiliario práctica y versátil. Hecha de madera maciza de alta calidad, esta estantería cuenta con estantes y varillas que puedes personalizar para adaptarla a tus necesidades de almacenamiento. Con su diseño minimalista y elegante, esta estantería es perfecta para cualquier espacio de tu hogar.",
      price: 16,
      img: { img1: "Madera_Estanteria.webp", img2: "Madera_Estanteria2.webp" },
      stock: 3,
      rating: 4.9,
      categoryId: 3,
    },
    {
      title: "Portallaves de madera",
      description:
        "Este portallaves de madera es una pieza de organización práctica y elegante. Hecho a mano con madera maciza de alta calidad, este portallaves cuenta con ganchos de metal para colgar tus llaves de manera segura y organizada. Con su diseño minimalista y elegante, este portallaves es perfecto para cualquier espacio de tu hogar donde desees mantener tus llaves organizadas y accesibles.",
      price: 16,
      img: { img1: "Madera_Portallaves.webp", img2: "Madera_Portallaves2.webp" },
      stock: 23,
      rating: 4.7,
      categoryId: 3,
    },
    {
      title: "Carrito de Madera",
      description:
        "Este carrito de madera es el juguete perfecto para estimular la creatividad y el aprendizaje de los niños. Incluye bloques con letras para que los pequeños puedan construir palabras y frases, mientras que el carrito les permite moverse y explorar el espacio a su alrededor. Fabricado con materiales de alta calidad y un diseño resistente, este carrito de madera es un regalo ideal para cualquier niño en edad preescolar.",
      price: 37,
      img: { img1: "Madera_Carrito.webp", img2: "Madera_Carrito2.jpg" },
      stock: 23,
      rating: 5.0,
      categoryId: 3,
    },
    {
      title: "Cajas de Madera Hexagonales",
      description:
        "Estas cajitas hexagonales de madera son el accesorio ideal para cualquier hogar moderno. Su diseño minimalista y elegante las hace perfectas para almacenar pequeños objetos de valor, como joyas o llaves, sin ocupar mucho espacio. Además, estas cajitas son lo suficientemente grandes como para guardar varios artículos, pero lo suficientemente pequeñas como para ser transportadas fácilmente. Fabricadas con madera de alta calidad, estas cajitas son una inversión duradera y práctica.",
      price: 25,
      img: { img1: "Madera_Moderna.webp", img2: "Madera_Moderna2.jpg" },
      stock: 23,
      rating: 4.9,
      categoryId: 3,
    },
    {
      title: "Peluche Beagle",
      description:
        "El peluche Beagle es una excelente opción para agregar un toque lindo y tierno a cualquier espacio. En general, los peluches son una gran manera de suavizar los bordes de una habitación y crear un ambiente acogedor y amigable.",
      price: 16,
      img: { img1: "Tejido_Beagle.webp", img2: "Tejido_Beagle2.webp" },
      stock: 3,
      rating: 4.8,
      categoryId: 4,
    },
    {
      title: "Botitas para bebé",
      description:
        "Estas botitas suelen tener un diseño adorable y encantador, con colores suaves y patrones delicados, como flores o animales. También pueden tener detalles como cordones o cierres de velcro para que sea fácil ponerlas y quitarlas.",
      price: 18,
      img: { img1: "Tejido_Botitas.avif", img2: "Tejido_Botitas2.avif" },
      stock: 3,
      rating: 4.9,
      categoryId: 4,
    },
    {
      title: "Conejo de peluche",
      description:
        "El conejo de peluche típicamente tiene una apariencia dulce y tierna, con grandes orejas y ojos grandes y brillantes. Puede venir en diferentes tamaños y colores, desde un pequeño conejito de peluche hasta un conejo gigante de peluche que puede ser utilizado como almohada.",
      price: 33,
      img: { img1: "Tejido_Conejo.avif", img2: "Tejido_Conejo2.avif" },
      stock: 23,
      rating: 5,
      categoryId: 4,
    },
    {
      title: "Peluche Elefante",
      description:
        "El peluche elefante típicamente tiene una apariencia amigable y adorable, con grandes orejas y una trompa larga. Puede venir en diferentes tamaños y colores, desde un pequeño elefantito de peluche hasta un elefante gigante de peluche que puede ser utilizado como almohada.",
      price: 18,
      img: { img1: "Tejido_Elefante.webp", img2: "Tejido_Elefante2.avif" },
      stock: 15,
      rating: 4.9,
      categoryId: 4,
    },
    {
      title: "Peluche Gallina",
      description:
        "El peluche gallina típicamente tiene una apariencia amigable y encantadora, con una cresta roja, alas y una cola. Puede venir en diferentes tamaños y colores, desde una pequeña pollita de peluche hasta una gallina gigante de peluche que puede ser utilizada como almohada.",
      price: 18,
      img: { img1: "Tejido_Gallina.avif", img2: "Tejido_Gallina2.avif" },
      stock: 1,
      rating: 4.9,
      categoryId: 4,
    },
    {
      title: "Peluche Gato",
      description:
        "El peluche de gato típicamente tiene una apariencia encantadora y tierna, con orejas puntiagudas y ojos grandes y brillantes. Puede venir en diferentes tamaños y colores, desde un pequeño gatito de peluche hasta un gato gigante de peluche que puede ser utilizado como almohada.",
      price: 29,
      img: { img1: "Tejido_Gato.webp", img2: "Tejido_Gato2.webp" },
      stock: 3,
      rating: 4.8,
      categoryId: 4,
    },
    {
      title: "Peluche Pato",
      description:
        "El peluche de pato típicamente tiene una apariencia divertida y alegre, con una cabeza redonda y una cresta amarilla. Puede venir en diferentes tamaños y colores, desde un pequeño patito de peluche hasta un pato gigante de peluche que puede ser utilizado como almohada.",
      price: 13,
      img: { img1: "Tejido_Pato.avif", img2: "Tejido_Pato2.avif" },
      stock: 31,
      rating: 4.7,
      categoryId: 4,
    },
    {
      title: "Peluche Pingüino",
      description:
        "El peluche de pingüino típicamente tiene una apariencia adorable y simpática, con un cuerpo redondeado, alas pequeñas y una cabeza negra y blanca. Puede venir en diferentes tamaños y colores, desde un pequeño pingüino de peluche hasta un pingüino gigante de peluche que puede ser utilizado como almohada.",
      price: 19,
      img: { img1: "Tejido_Pinguino.avif", img2: "Tejido_Pinguino2.avif" },
      stock: 9,
      rating: 5,
      categoryId: 4,
    },
    {
      title: "Peluche Rana",
      description:
        "El peluche de rana típicamente tiene una apariencia divertida y simpática, con una cabeza grande, ojos saltones y patas largas y delgadas. Puede venir en diferentes tamaños y colores, desde una pequeña rana de peluche hasta una rana gigante de peluche que puede ser utilizada como almohada.",
      price: 18,
      img: { img1: "Tejido_Rana.webp", img2: "Tejido_Rana2.webp" },
      stock: 18,
      rating: 4.9,
      categoryId: 4,
    },
    {
      title: "Redpanda de madera",
      description:
        "La figura de red panda de madera es popular como objeto decorativo en hogares y oficinas, ya que el red panda es una criatura adorable y única.",
      price: 10,
      img: { img1: "Redpanda_Madera2.webp", img2: "Redpanda de madera.webp" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
    {
      title: "Gorila de madera",
      description:
        "La figura de gorila de madera es una adición impresionante a cualquier decoración temática de la selva o la naturaleza.",
      price: 10,
      img: { img1: "Gorila_Madera2.webp", img2: "Gorila_Madera.avif" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
    {
      title: "Calabaza de madera",
      description:
        "Una figura de calabaza de madera es una opción decorativa encantadora y única para cualquier persona que busque agregar una pieza de decoración temática de la temporada de otoño a su hogar u oficina.",
      price: 10,
      img: { img1: "Calabaza_Madera.avif", img2: "Calabaza_Madera2.webp" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
    {
      title: "Maceta de hombrecitos leyendo",
      description:
        "La maceta de hombrecitos leyendo es una opción encantadora para cualquier amante de la lectura o amante de las plantas que busque agregar una pieza decorativa única y llamativa a su hogar u oficina.",
      price: 10,
      img: { img1: "Maceta_Hombrecito_Negro_Blanco.webp", img2: "Maceta_Hombrecito_Negro2.webp" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
    {
      title: "Maceta de hombrecitos tomando vino",
      description:
        "Una maceta de hombrecitos tomando vino es una pieza decorativa divertida y única para cualquier persona que busque agregar un toque de humor a su decoración.",
      price: 10,
      img: { img1: "Maceta_Hombrecitos_Blancos.avif", img2: "Maceta_Hombrecito_Blanco.webp" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
    {
      title: "Set de Madera Nórdica",
      description:
        "Esta decoración nórdica de madera con forma de arbolito es una adición encantadora a cualquier hogar. Hecho con madera natural y un diseño elegante y minimalista, este adorno agrega un toque de calidez y confort a cualquier espacio. Ya sea colgado en una pared o colocado en una repisa, este arbolito de madera es una manera sencilla y efectiva de añadir un toque de estilo escandinavo a cualquier habitación.",
      price: 89,
      img: { img1: "Decoracion_Nordico.png", img2: "Decoracion_Nordico2.jpg" },
      stock: 12,
      rating: 4.8,
      categoryId: 5,
    },
    {
      title: "Terra Punto Cotta",
      description:
        "Estos hermosos tumblers son la combinación perfecta de estilo y funcionalidad. Hechos a mano en cerámica terra cotta, cada tumbler tiene un diseño punteado único que le da un toque de originalidad a cualquier mesa. Además de ser visualmente atractivos, estos tumblers son ideales para servir bebidas frías o calientes gracias a su capacidad de retener la temperatura. Perfectos para cualquier ocasión, desde una cena formal hasta una reunión casual con amigos.",
      price: 15,
      img: { img1: "Decoracion_TerraPuntoCotta.png", img2: "Decoracion_TerraPuntoCotta2.webp" },
      stock: 52,
      rating: 5,
      categoryId: 5,
    },
  ];
  await Product.bulkCreate(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
