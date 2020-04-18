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

function addTask(taskData) {
    return db('tasks').insert(taskData);
}

function findTasks() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.id', 'tasks.description', 'tasks.notes', 'tasks.completed', 'projects.project_name', 'projects.description')
}

module.exports = {
    addProject,
    find,
    addResource,
    findResources,
    addTask,
    findTasks
};