const repository = require('../infrastructure/repository/post.repository')
module.exports = async ({body}) => {
  return repository({body});
}