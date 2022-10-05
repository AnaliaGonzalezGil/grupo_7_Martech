module.exports = (sequelize, DataTypes) => {
    let alias = "MarcaPrueba";

    let cols = {
        id: {
            type: DataTypes.INTEGER(100),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }

    let config = {
        tableName:"marcaprueba",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_At',
        deletedAt: false
    }


    const MarcaPrueba = sequelize.define(alias,cols,config);





    return MarcaPrueba;

}