const { User, Review, Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const reviews = await Review.findAll({ raw: true, nest: true });
    if (!reviews) {
      throw new Error();
    }
    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const review = await Review.findByPk(req.params.id, { raw: true, nest: true });
    if (review) {
      return res.status(200).json(review);
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
  const { content, productId, rating } = req.body;
  try {
    const review = await Review.create({
      content,
      userId: req.auth.id,
      productId,
      rating,
    });
    return res.status(201).json(review);
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Review.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Review Deleted" });
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
