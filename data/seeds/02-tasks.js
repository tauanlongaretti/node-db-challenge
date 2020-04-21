exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          project_id: 1,
          id: 1,
          description: "Wash Rice",
          notes: "Rinse with water",
          completed: "1",
        },
        {
          project_id: 1,
          id: 2,
          description: "Pick Beans",
          notes: "Remove bad ones",
          completed: "1",
        },
        {
          project_id: 2,
          id: 3,
          description: "Remove garbase",
          notes: "Choose what to throw out",
          completed: "0",
        },
        {
          project_id: 2,
          id: 4,
          description: "Sweep",
          notes: "Use the broom",
          completed: "0",
        }
      ]);
    });
};
