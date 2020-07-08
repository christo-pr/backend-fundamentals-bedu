module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  })

  User.associate = function (models) {
    // 1-1 with Image
    models.User.hasOne(models.Image)

    // 1-n with Listing
    models.User.hasMany(models.Listing)
  }

  return User
}
