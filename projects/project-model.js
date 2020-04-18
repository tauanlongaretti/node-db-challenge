const db = require('../data/dbConfig.js');

function addProject() {
    return db('projects').insert(projectData);
}

function find() {
    return db('projects');
}

module.exports = {
    addProject,
    find
};