module.exports = (sequelize, dataTypes) => {
    let alias = "Carrito";
    let cols = {
        id: {
            type: dataTypes.SMALLINT(6).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(6),
            allowNull: false,
            },
        
        product_id:{
            type: dataTypes.BIGINT(6),
            allowNull: false,
            },
        marca_id: {
            type: dataTypes.BIGINT(6),
            allowNull: false,
            },  
        products_nombreProducto: {
            type: dataTypes.STRING(100),
            allowNull: false,
            },
        products_condicion: {
            type: dataTypes.STRING(100),
            allowNull: false,
            },
        products_precioVenta: {
            type: dataTypes.BIGINT(6),
            allowNull: false,
            },
        products_imgIndex: {
            type: dataTypes.STRING(250),
            allowNull: false,
            },
            }

        let config = {
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: false
            }


const Carrito = sequelize.define(alias,cols,config);

// Carrito.associate = function (models) {
//     Carrito.belongsTo(models.users, { 
//         as: "users",
//         foreignKey: "user_id"
//         })}

// Carrito.associate = function (models) {
//     Carrito.hasMany(models.products, { 
//         as: "product",
//         foreignKey: "products_id",
//         foreignKey: "products_marca",
//         foreignKey: "products_nombreProducto",
//         foreignKey: "products_condicion",
//         foreignKey: "products_precioVenta",
//         foreignKey: "products_imgIndex",
//         })}
        return Carrito
        }
