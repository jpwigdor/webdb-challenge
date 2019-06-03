const db = require("../data/dbConfig.js");

module.exports = {
  update
};

function update(id, changes) {
  return db("actions")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}
