module.exports = (sequelize, DataTypes) => {
    let alias = "Color";
    let cols = {
        id: {
            type: DataTypes.SMALLINT(6).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            },
            }

const Color = sequelize.define(alias,cols);

// Color.associate = function (models) {
//             Color.hasMany(models.Product, { 
//                 as: "product_color",
//                 foreignKey: "id_product"
//                 })}
                return Color

        }