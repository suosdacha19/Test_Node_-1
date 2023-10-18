const repository = require('../infrastructure/repository/put.repository')
module.exports = async ({body, params}) => {
  return repository({body, params});
}