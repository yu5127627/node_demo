const resetValidate = (err) => {
    // console.log(err);

    const {errors, status} = err;
    let errInfo = [];
    for (let item of errors) {
        const obj = {
            message: item.message,
            key: item.path,
            val: item.value,
            type: item.type
        }
        errInfo.push(obj);
    }
    return {errInfo, status}
}

module.exports = {
    resetValidate
}