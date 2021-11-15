function logErrors(err, req, res, next) {
    console.error(err);

    // next(err);
    res.send('err')
}

module.exports = logErrors()