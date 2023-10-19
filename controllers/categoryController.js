const { Category, Product } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

//supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categories = await Category.findAll({ raw: true, nest: true });
    if (!categories) {
      throw new Error();
    }
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const category = await Category.findByPk(
      req.params.id,
      { include: Product },
      { raw: true, nest: true },
    );
    if (category) {
      return res.status(200).json(category);
    } else {
      throw new Error();
    }
  } catch (error) {
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
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      const ext = path.extname(files.img.filepath);
      const newFileName = `category_${uuidv4()}${ext}`;
      await Category.create({
        name: fields.name,
        img: newFileName,
      });
      await supabase.storage
        .from("images")
        .upload(newFileName, fs.createReadStream(files.img.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.img.mimetype,
          duplex: "half",
        });
      return res.status(200).json({ message: "Category Created" });
    });
  } catch (error) {
    //Analizar error imagen o user
    console.log(error);
    return res.status(501).json(error);
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const form = formidable({
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      console.log(files.img);
      if (files.img && files.img.originalFilename !== "") {
        const ext = path.extname(files.img.filepath);
        const newFileName = `category_${uuidv4()}${ext}`;
        await Category.update(
          {
            name: fields.name,
            img: newFileName,
          },
          {
            where: {
              id: req.params.id,
            },
          },
        );
        await supabase.storage
          .from("images")
          .upload(newFileName, fs.createReadStream(files.img.filepath), {
            cacheControl: "3600",
            upsert: false,
            contentType: files.img.mimetype,
            duplex: "half",
          });
      } else {
        await Category.update(
          {
            name: fields.name,
          },
          {
            where: {
              id: req.params.id,
            },
          },
        );
      }
      return res.status(200).json({ message: "Category Updated" });
    });
  } catch (error) {
    //Analizar error imagen o user
    console.log(error);
    return res.status(501).json(error);
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Category Deleted" });
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
