module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        marca: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        nombreProducto: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        imgIndex: {
            type: DataTypes.VARCHAR(250),
            allowNull: false
        },
        color_id: {
            type: DataTypes.SMALLLINT(6),
        },
        category: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        condicion: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        precioVenta: {
            type: DataTypes.INT,
            allowNull: false
        },
        oferta: {
            type: DataTypes.VARCHAR(5),
            allowNull: false
        },
        descuento: {
            type: DataTypes.DECIMAL(2,2),
            allowNull: false
        },
        estadoEquipo: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        marca_id: {
            type: DataTypes.SMALLLINT(6),
            allowNull: false
        },
        resolucion: {
            type: DataTypes.DECIMAL(2,2),
            allowNull: false
        },
        memoriaRam: {
            type: DataTypes.INT,
            allowNull: false
        },
        memoriaInterna: {
            type: DataTypes.INT,
            allowNull: false
        },
        dualSim: {
            type: DataTypes.VARCHAR(5),
            allowNull: false
        },
        os_id: {
            type: DataTypes.SMALLLINT(6),
            allowNull: false
        },
        senal: {
            type: DataTypes.VARCHAR(10),
            allowNull: false
        },
    };

let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    
const Product = sequelize.define(alias,cols,config);

Product.associate = function (models) {
    Product.belongsTo(models.marcas, { 
        as: "marca",
        foreignKey: "marca_id"
    })}
Product.associate = function (models) {
    Product.belongsTo(models.colors, { 
        as: "color",
        foreignKey: "color_id"
        })}
    
Product.associate = function (models) {
    Product.belongsTo(models.opsys, { 
        as: "os",
        foreignKey: "os_id"
    })
}
return Product
};
