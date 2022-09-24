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
    let config = {
                tableName:"color",
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_At',
                deletedAt: false
            }

const Color = sequelize.define(alias,cols,config);

// Color.associate = function (models) {
//             Color.hasMany(models.Product, { 
//                 as: "product_color",
//                 foreignKey: "id_product"
//                 })}
                return Color

        }