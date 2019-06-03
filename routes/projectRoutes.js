const router = require("express").Router();

const Projects = require("./project-model");

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
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "we ran into an error retrieving the projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.findById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      if (error === 404)
        res.status(404).json({ error: "No project with that ID found." });
      else res.status(500).json({ error });
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

module.exports = router;
