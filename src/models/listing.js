module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define("Listing", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    maxAllow: DataTypes.INTEGER,
    payDate: DataTypes.DATE,
  })

  Listing.associate = function (models) {
    // 1-n with Image
    models.Listing.hasMany(models.Image)

    // 1-n with Tenant
    models.Listing.hasMany(models.Tenant)
  }

  return Listing
}
