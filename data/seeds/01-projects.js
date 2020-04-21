exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Cook",
          description: "Rice and beans",
          completed: "1",
        },
        { id: 2, project_name: "Clean", description: "Garage", completed: "0" },
      ]);
    });
};
