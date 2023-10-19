const { Sequelize } = require("sequelize");

const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};
if (process.env.DB_CONNECTION === "postgres") {
  sequelizeOptions.dialectModule = require("pg");
}
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const User = require("./User");
const Category = require("./Category");
const Admin = require("./Admin");
const Product = require("./Product");
const Order = require("./Order");
const Review = require("./Review");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
Review.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Admin.hasMany(Order);
Order.belongsTo(Admin);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  sequelize,
  User,
  Admin,
  Product,
  Category,
  Order,
  Review,
};
