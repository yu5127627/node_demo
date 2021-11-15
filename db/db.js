const Sequelize = require('sequelize');

console.log(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_HOST);

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+08:00'
});

db
    .authenticate()
    .then(() => {
        console.log('Mysql connect success ...');
    })
    .catch(err => {
        console.error('Mysql connect error:', err);
    });

const User = db.import('./model/user');

db.sync({face: true});

module.exports = {
    db,
    User,
    op: Sequelize.Op
};