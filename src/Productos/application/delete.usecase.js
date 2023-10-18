const repository = require('../infrastructure/repository/delete.repository')
module.exports = async ({body, params}) => {
  return repository({body, params});
}