const express = require('express');
const db = require('./db/db');
const reqRouter = require('./middleware/interceptor/request');
const resRouter = require('./middleware/interceptor/response');
// const logger = require('./middleware/logger.middleware');
const user = require('./routes/user_controller');
const bodyParser = require('body-parser');
const {resetValidate} = require('./util/validateError');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 全局路由拦截
app.use(reqRouter);

// 全局业务路由
app.use('/user', user);

// 全局路由响应处理
app.use(resRouter);

// 全局异常处理
app.use((err, req, res, next)=> {
    // console.log(err)
    res.send(resetValidate(err))
})


app.listen(process.env.APP_POST, () => {
    console.log(`${process.env.NODE_ENV} running at port ${process.env.APP_POST} ...`)
})