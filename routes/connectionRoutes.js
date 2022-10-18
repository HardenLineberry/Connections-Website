const express = require('express');
const controller = require('../controllers/connectionController');

const router = express.Router();

//GET /connections: send all connections to the user

router.get('/', controller.index);

//GET /connections/new: send html form for creating a new story

router.get('/new', controller.new);

//POST /connections: create a new story

router.post('/', controller.create);

//GET /connections/:id: send details of story identified by id
router.get('/:id', controller.show);

//GET /connections/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /connections/:id: update the story identified by id
router.put('/:id', controller.update);

//DELETE /connections/:id, delete the story identified by id
router.delete('/:id', controller.delete);

module.exports = router;