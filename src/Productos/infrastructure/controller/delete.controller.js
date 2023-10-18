const usecase = require('../../application/delete.usecase');
module.exports = (req,res,next) => {
    usecase(req).then((data) => {
        res.send(data);
    }).catch((err) => {
        next(err);
    });
}