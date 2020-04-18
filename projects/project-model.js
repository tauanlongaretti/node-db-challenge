const db = require('../data/dbConfig.js');

function addProject(projectData) {
    return db('projects').insert(projectData);
}

function find() {
    return db('projects');
}

function addResource(resourceData) {
    return db('resources').insert(resourceData);
}

function findResources() {
    return db('resources');
}

module.exports = {
    addProject,
    find,
    addResource,
    findResources
};