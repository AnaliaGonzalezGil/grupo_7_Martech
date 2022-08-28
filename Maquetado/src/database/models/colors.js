module.exports = (sequelize, DataTypes) => {
    let alias = "Color";
    let cols = {
        id: {
            type: DataTypes.BIGINT(6).UNSIGNED,
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
//             Color.hasMany(models.products, { 
//                 as: "product",
//                 foreignKey: "color_id"
//                 })}
                return Color

        }