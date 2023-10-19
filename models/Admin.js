const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "firstname is required" },
            notEmpty: true,
          },
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "lastname is required" },
            notEmpty: true,
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "email is required" },
            notEmpty: true,
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: { msg: "password is required" },
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: "admin",
        hooks: {
          beforeCreate: async (admin) => {
            const hashedPassword = await bcrypt.hash(admin.password, 12);
            admin.password = hashedPassword;
          },
          beforeUpdate: async (admin) => {
            const hashedPassword = await bcrypt.hash(admin.password, 12);
            admin.password = hashedPassword;
          },
          beforeBulkCreate: async (admins) => {
            admins.map(async (admin) => {
              const hashedPassword = await bcrypt.hash(admin.password, 12);
              admin.password = hashedPassword;
            });
          },
        },
      },
    );
    return Admin;
  }
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
  toJSON() {
    const values = { ...this.get() };
    delete values.password;
    return values;
  }
}

module.exports = Admin;
