exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "4th of July Fireworks party!",
          description: "",
          completed: false
        },
        {
          id: 2,
          name: "Complete Lambda School",
          description: "",
          completed: false
        },
        { id: 3, name: "Upgrade My House", description: "", completed: false }
      ]);
    });
};
