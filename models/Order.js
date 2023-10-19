const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "status is required" },
            notEmpty: true,
          },
        },
        address: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: { msg: "address is required" },
            notEmpty: true,
          },
        },
        products: {
          type: DataTypes.JSON,
          allowNull: false,
          validate: {
            notNull: { msg: "products is required" },
            notEmpty: true,
          },
        },
        totalPrice: {
          type: DataTypes.DECIMAL,
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );
    return Order;
  }
}

module.exports = Order;
