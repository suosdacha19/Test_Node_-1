const repository = require('../infrastructure/repository/get.repository')
module.exports = async (req) => {
  return repository(req);
}