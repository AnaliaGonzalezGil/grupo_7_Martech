module.exports = (sequelize, DataTypes) => {
    let alias = "Marca";
    let cols = {
        id: {
            type: DataTypes.SMALLINT(6).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
            },
            }

const Marca = sequelize.define(alias,cols);

Marca.associate = function (models) {
            Marca.hasMany(models.products, { 
                as: "product",
                foreignKey: "marca_id"
                })}
                return Marca

        }