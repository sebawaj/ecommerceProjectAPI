const { Admin } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = await Admin.findAll({ raw: true, nest: true });
    if (!admins) {
      throw new Error();
    }
    return res.json(admins);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id, { raw: true, nest: true });
    if (admin) {
      return res.status(200).json(admin);
    } else {
      throw new Error();
    }
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    await Admin.create({
      firstname,
      lastname,
      email,
      password,
    });
    return res.status(201).json({ message: "Admin created" });
  } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const { firstname, lastname, email } = req.body;
  try {
    await Admin.update(
      {
        firstname,
        lastname,
        email,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return res.status(201).json({ message: "Admin Updated" });
  } catch (error) {
    return res.status(501).json({
      message: "Not Found",
    });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Admin.destroy({ where: { id: req.params.id } });
    return res.status(201).json({ message: "Admin Deleted" });
  } catch (error) {
    return res.status(404).json({
      message: "Not Found",
    });
  }
}

// Otros handlers...
// ...

async function token(req, res) {
  try {
    let admin = await Admin.findOne({ where: { email: req.body.email } });
    if (!admin) {
      throw new Error();
    } else if (await admin.isValidPassword(req.body.password)) {
      const token = jwt.sign({ email: admin.email, id: admin.id }, process.env.API_SECRET);
      return res.status(200).json({
        token,
        admin,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Credenciales incorrectas" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  token,
};
