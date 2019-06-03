const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  update
};

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ "projects.id": id })
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
