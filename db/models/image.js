module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define("Image", {
    url: DataTypes.STRING,
  })

  return Image
}
