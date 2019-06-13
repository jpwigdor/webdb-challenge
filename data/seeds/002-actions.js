exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(actions)
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex(actions).insert([
        {
          id: 1,
          description: "Buy Fireworks",
          notes: "get some zingy sounding fireworks",
          completed: "false",
          project_id: 1
        },
        {
          id: 2,
          description: "Complete lambda Labs",
          notes: "Try to get all 3's on your sprints!",
          completed: "false",
          project_id: 2
        },
        {
          id: 3,
          description: "Buy 7 Monitors to keep up with your chrome tabs",
          notes: "Buy HP brand",
          completed: "false",
          project_id: 2
        },
        {
          id: 4,
          description: "Update the Kitchen",
          notes: "For resale value! it's all about resale value",
          completed: "false",
          project_id: 3
        }
      ]);
    });
};
