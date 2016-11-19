'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);
router.put('/:id/addsprint', controller.addSprint);
router.put('/:id/addtask', controller.addTask);
router.delete('/:id/sprint', controller.deleteSprint);
router.delete('/task/:id', controller.deleteTask);

module.exports = router;
