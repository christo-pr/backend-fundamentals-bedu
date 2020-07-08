module.exports = (sequelize, DataTypes) => {
  var Tenant = sequelize.define("Tenant", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  })

  Tenant.associate = function (models) {
    // 1-1 with Image
    models.Tenant.hasOne(models.Image)
  }

  return Tenant
}
