const express = require('express');
const resRouter = express.Router();

resRouter.get('*', (req, res) => {
    res.send('404 not page...')
})

module.exports = resRouter
