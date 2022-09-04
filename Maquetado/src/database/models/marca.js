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
            type: DataTypes.STRING(100),
            allowNull: false,
            },
            }
let config = {
                tableName:"marcas",
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: false
            }
const Marca = sequelize.define(alias,cols,config);

Marca.associate = function (models) {
            Marca.hasMany(models.Product, { 
                as: "products",
                foreignKey: "id_marca"
                })}
                return Marca

        }