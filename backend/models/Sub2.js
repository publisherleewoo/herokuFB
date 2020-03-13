module.exports=(DataType,sequelize)=>{
    return sequelize.define('Sub4',{
        no:{
            type:DataType.INTEGER,
            unique:true,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        },
        todo:{
            type:DataType.TEXT,
            allowNull:false,
        },
        done:{
            type:DataType.BOOLEAN,
            allowNull:false,
        }
    },{
        timestamp:true,
        paranoid: true,
        freezeTableName: true,
    });
}