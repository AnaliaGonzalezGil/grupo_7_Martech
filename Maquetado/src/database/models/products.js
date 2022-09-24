module.exports = (sequelize, DataTypes) => {

    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.SMALLINT(6),
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
            
        },
        id_marca: {
            type: DataTypes.SMALLINT(100),
            allowNull: true,
        },
        nombreProducto: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        imgIndex: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        id_color: {
            type: DataTypes.SMALLINT(6),
            allowNull: true
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        precioVenta: {
            type: DataTypes.SMALLINT(6),
            allowNull: true,
        },
        oferta: {
            type: DataTypes.STRING(5),
            allowNull: true,
        },
        descuento: {
            type: DataTypes.DECIMAL(2,2),
            allowNull: true,
        },
        estadoEquipo: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        resolucion: {
            type: DataTypes.DECIMAL(2,2),
            allowNull: true,
        },
        memoriaRam: {
            type: DataTypes.SMALLINT(6),
            allowNull: true,
        },
        memoriaInterna: {
            type: DataTypes.SMALLINT(6),
            allowNull: true,
        },
        dualSim: {
            type: DataTypes.STRING(5),
            allowNull: true,
        },
        id_os: {
            type: DataTypes.SMALLINT(6),
            allowNull: true,
        },
        senal: {
            type: DataTypes.STRING(10),
            allowNull: true,
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
        foreignKey: "id_marca"
    })}

Product.associate = function (models) {
    Product.belongsTo(models.Color, { 
        as: "color_producto",
        foreignKey: "id_color"
        })}
    
Product.associate = function (models) {
    Product.belongsTo(models.Os, { 
        as: "opsys",
        foreignKey: "id_os"
    })
}

return Product
};
