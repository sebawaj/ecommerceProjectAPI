const { Order, Product } = require("../models");
const { findByPk, findAll } = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const orders = await Order.findAll({ raw: true, nest: true });
    if (!orders) {
      throw new Error();
    }
    return res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const order = await Order.findByPk(req.params.id, { raw: true, nest: true });
    if (order) {
      return res.status(200).json(order);
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
    const products = [];
    let totalPrice = 0;
    const { items, address, userId, adminId } = req.body;

    for (const item of items) {
      let product = await Product.findByPk(item.id);
      products.push(product);
      totalPrice = Number(totalPrice) + Number(product.price * item.quantity);
      product.stock = product.stock - Number(item.quantity);
      if (product.stock < 0) {
        return res.json({ msg: "Fuera de Stock" });
      } else {
        await product.save();
      }
    }
    userId
      ? await Order.create({
          status: "Procesando",
          address: { ...address },
          products: { products: [...products] },
          totalPrice,
          userId,
        })
      : await Order.create({
          status: "Procesando",
          address: { ...address },
          products: { products: [...products] },
          totalPrice,
          adminId,
        });
    return res.status(201).json({ message: "Order Created" });
  } catch (error) {
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
async function destroy(req, res) {}

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
