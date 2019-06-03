const router = require("express").Router();

const Actions = require("./action-model");

//endpoints here

router.post("/", (req, res) => {
  const { description, notes, completed, project_id } = req.body;
  const action = { description, notes, completed, project_id };

  if (action.description) {
    try {
      Actions.add(action).then(action => {
        res.status(200).json(action);
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "we ran into an error creating the action" });
    }
  } else {
    res.status(400).json({ message: "please provide name of the action" });
  }
});

router.get("/", (req, res) => {
  Actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "we ran into an error retrieving the action" });
    });
});
module.exports = router;
