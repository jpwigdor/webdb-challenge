const router = require("express").Router();

const Projects = require("./project-model");

//endpoints here
router.get("/", (req, res) => {
  res.send(`<h1> hello from projectRoutes</h1>`);
});

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
module.exports = router;
