module.exports = (sequelize, DataTypes) => {
    let alias = "Os";
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

const Os = sequelize.define(alias,cols);

// Os.associate = function (models) {
//             Os.hasMany(models.Product, { 
//                 as: "producto_os",
//                 foreignKey: "product_id"
//                 })}
                return Os

        }