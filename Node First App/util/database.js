const Sequelize=require('sequelize');

const sequelize = new Sequelize('node-complete','root','Ramlen@97',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;