module.exports = (sequelize, DataTypes) => {
    let alias = "Marca";
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

const Marca = sequelize.define(alias,cols);

Marca.associate = function (models) {
            Marca.hasMany(models.Product, { 
                as: "products",
                foreignKey: "marca_id"
                })}
                return Marca

        }