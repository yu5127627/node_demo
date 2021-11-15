module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
            name: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.SMALLINT,
                allowNull: false,
            },
        },
        {
            comment: "我是用户表!",    // 可以为MySQL和PG添加表注释
            tableName: 'user',
        });
}