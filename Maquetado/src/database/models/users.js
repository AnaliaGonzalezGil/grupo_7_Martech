module.exports = (sequelize, DataTypes) => {
    
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.SMALLINT(6).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false,
            },    
        email: {
            type: DataTypes.STRING(250),
            allowNull: false,
                },    
        contrasenia: {
            type: DataTypes.TEXT,
            allowNull: false,
            },    
        imagenPerfil: {
            type: DataTypes.STRING(250),
            },        
        esAdmin: {
            type: DataTypes.STRING(5),
            },                                              
                                         
                }    

            let config = {
                timestamps: true,
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: false
            }

    const User = sequelize.define(alias,cols,config);

// User.associate = function (models) {
//             User.hasMany(models.Product, { 
//                 as: "productos_usuario",
//                 foreignKey: "id_product"
//                 })}
    return User

}


        