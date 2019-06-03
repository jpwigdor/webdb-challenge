const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  update
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("projects")
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
