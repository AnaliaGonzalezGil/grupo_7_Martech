module.exports = (sequelize, dataTypes) => {

    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        marca: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        nombreProducto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        imgIndex: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        color_id: {
            type: dataTypes.BIGINT(6),
        },
        categoy: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        condicion: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precioVenta: {
            type: dataTypes.BIGINT(6),
            allowNull: false
        },
        oferta: {
            type: dataTypes.STRING(5),
            allowNull: false
        },
        descuento: {
            type: dataTypes.DECIMAL(2,2),
            allowNull: false
        },
        estadoEquipo: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        marca_id: {
            type: dataTypes.SMALLINT(6),
            allowNull: false
        },
        resolucion: {
            type: dataTypes.DECIMAL(2,2),
            allowNull: false
        },
        memoriaRam: {
            type: dataTypes.BIGINT(6),
            allowNull: false
        },
        memoriaInterna: {
            type: dataTypes.BIGINT(6),
            allowNull: false
        },
        dualSim: {
            type: dataTypes.STRING(5),
            allowNull: false
        },
        os_id: {
            type: dataTypes.BIGINT(6),
            allowNull: false
        },
        senal: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
    };

let config = {
        tableName:"products",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    


    
const Product = sequelize.define(alias,cols,config)

Product.associate = function (models) {
    Product.belongsTo(models.Marca, { 
        as: "marca",
        foreignKey: "marca_id"
    })}

Product.associate = function (models) {
    Product.belongsTo(models.Color, { 
        as: "color_producto",
        foreignKey: "color_id"
        })}
    
Product.associate = function (models) {
    Product.belongsTo(models.Os, { 
        as: "Opsys",
        foreignKey: "os_id"
    })
}

return Product
};
