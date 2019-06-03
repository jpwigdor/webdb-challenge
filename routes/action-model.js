const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  update
};

function add(action) {
  return db("actions")
    .insert(action, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function find() {
  return db("actions");
}

function findById(id) {
  return db("actions")
    .where({ id })
    .first();
}

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
