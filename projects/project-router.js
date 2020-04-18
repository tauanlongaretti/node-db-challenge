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
        res.status(500).json({ message: 'Failed to create new project' });
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

// Adding resources
router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
    });
});

// Retrieving a list of resources
router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
    });
});

module.exports = router;