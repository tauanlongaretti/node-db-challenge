const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

// Adding projects
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
    });
});

// Retrieving a list of projects
router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
    });
});

module.exports = router;