const router = require("express").Router();
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const Projects = require("./project-model");
const Actions = require("./action-model");
const db = knex(knexConfig.development);

// TODO: MVP goals:
/*
1) POST for adding projects
2) GET for retrieving a project by its id that returns an object with the following structure:
{
  id: 1,
  name: 'project name here',
  description: 'the project description',
  completed: false, // or true, the database will return 1 for true and 0 for false
  actions: [
    {
      id: 1,
      description: 'action description',
      notes: 'the action notes',
      completed: false // or true
    },
    {
      id: 7,
      description: 'another action description',
      notes: 'the action notes',
      completed: false // or true
    }
  ]
}
*/

//endpoints here

router.get("/", (req, res) => {
  //const list = Actions;
  Projects.find()
    .then(projects => {
      res.status(200).json(
        projects
        // list
      );
    })

    .catch(error => {
      res
        .status(500)
        .json({ message: "we ran into an error retrieving the projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("projects")
    .where({ id: id })
    .first()
    .then(projects => {
      db("actions")
        .where({ project_id: id })
        .then(actions => {
          projects.actions = actions;
          return res.status(200).json(projects);
        });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        message: "The project information could not be retrieved."
      });
    });
});

router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  const project = { name, description, completed };

  if (project.name) {
    try {
      Projects.add(project).then(project => {
        res.status(200).json(project);
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "we ran into an error creating the project" });
    }
  } else {
    res.status(400).json({ message: "please provide name of the project" });
  }
});

router.put("/:id", (req, res) => {
  db("projects")
    .where({ id: req.params.id })
    .update(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
