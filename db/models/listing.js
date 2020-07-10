"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Listing.hasMany(models.Tenant, {
        foreignKey: "listingId",
        as: "tenants",
        onDelete: "CASCADE",
      })
    }
  }
  Listing.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      price: DataTypes.INTEGER,
      maxAllow: DataTypes.INTEGER,
      payDate: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Listing",
      tableName: "listings",
    }
  )
  return Listing
}
