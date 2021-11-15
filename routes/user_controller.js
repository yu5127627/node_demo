const express = require('express');
const user = express.Router();

const {User} = require('../db/db');

user.get('/', async (req, res) => {
    const user = await User.findAll();
    res.send(user);
})

user.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.send(user);
})

user.post('/', async (req, res, next) => {
    const user = await User.create(req.body);
    res.send(user)
})

user.put('/:id', async (req, res) => {
    const user = await userModel.findOne({id: params.id});
    const newUser = await user.update(req.body);
    res.send(newUser);
})

user.delete('/:id', async (req, res) => {
    await userModel.destroy({where: {id: params.id}});
    res.send({msg: '删除成功！'});
})

module.exports = user;