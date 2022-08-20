module.exports = (sequelize, DataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: DataTypes.SMALLINT(6).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
            },
        lastName: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
            },    
        email: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
                },    
        contrasenia: {
            type: DataTypes.TEXT,
            allowNull: false,
            },    
        imagenPerfil: {
            type: DataTypes.VARCHAR(250),
            },        
        esAdmin: {
            type: DataTypes.VARCHAR(5),
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
//             User.hasMany(models.products, { 
//                 as: "product",
//                 foreignKey: "color_id"
//                 })}
//                 return User

        }
