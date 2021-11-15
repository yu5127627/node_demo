const express = require('express');

const reqRouter = express.Router();

reqRouter.get('*', (req, res, next) => {
    console.log(req.url);
    next()
})

module.exports = reqRouter
