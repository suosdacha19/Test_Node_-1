const repository = require('../infrastructure/repository/find.repository')
module.exports = async (req) => {
  return repository(req);
}