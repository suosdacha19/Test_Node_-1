const usecase = require('../../application/get.usecase');
module.exports = (req,res,next) => {
    usecase(req).then((data) => {
        res.send(data);
    }).catch((err) => {
        next(err);
    });
}