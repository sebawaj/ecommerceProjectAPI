const { Product, Review, User } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

//supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categoryId = req.query.categoryId;
    let products = [];
    if (categoryId) {
      products = await Product.findAll({
        where: {
          categoryId,
        },
      });
    } else {
      products = await Product.findAll();
    }
    return res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({
      where: { slug: req.params.slug },
      include: [
        {
          model: Review,
          order: ["createdAt", "asc"],
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });
    if (product) {
      return res.status(200).json(product);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      let img = {};
      for (let index = 0; index < Math.min(files.imgs.length, 2); index++) {
        img[`img${index + 1}`] = files.imgs[index].newFilename;
        await supabase.storage
          .from("images")
          .upload(files.imgs[index].newFilename, fs.createReadStream(files.imgs[index].filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.imgs[index].mimetype,
            duplex: "half",
          });
      }
      await Product.create({
        title: fields.title,
        description: fields.description,
        price: fields.price,
        img,
        stock: fields.stock,
        featured: fields.featured,
        slug: fields.slug,
        rating: fields.rating,
        categoryId: fields.categoryId,
      });
      return res.status(201).json({ message: "Product Created" });
    });
  } catch (err) {
    return res.status(501).json({
      message: "Internal Server Error",
    });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      let img = {};
      for (let index = 0; index < Math.min(files.imgs.length, 2); index++) {
        img[`img${index + 1}`] = files.imgs[index].newFilename;
        await supabase.storage
          .from("images")
          .upload(files.imgs[index].newFilename, fs.createReadStream(files.imgs[index].filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.imgs[index].mimetype,
            duplex: "half",
          });
      }
      await Product.update(
        {
          title: fields.title,
          description: fields.description,
          price: fields.price,
          img,
          stock: fields.stock,
          featured: fields.featured,
          slug: fields.slug,
          rating: fields.rating,
          categoryId: fields.categoryId,
        },
        {
          where: {
            id: req.params.id,
          },
        },
      );
      return res.status(201).json({ message: "Product Updated" });
    });
  } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Product Deleted" });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
