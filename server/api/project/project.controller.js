/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/project              ->  index
 * POST    /api/project              ->  create
 * GET     /api/project/:id          ->  show
 * PUT     /api/project/:id          ->  upsert
 * PATCH   /api/project/:id          ->  patch
 * DELETE  /api/project/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Project from './project.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Projects
export function index(req, res) {
  return Project.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Project from the DB
export function show(req, res) {
  return Project.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Project in the DB
export function create(req, res) {
  return Project.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Project in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Project.findOneAndUpdate(req.params.id, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Project in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Project.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function addSprint(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Project.findOneAndUpdate({_id: req.params.id}, {$push: { sprints: req.body }}, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function addTask(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  Project.update({
    "sprints._id": req.params.id
  },
  { "$push": { "sprints.$.tasks": req.body } },
  {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
  .then(respondWithResult(res))
  .catch(handleError(res));
}

// Deletes a Project from the DB
export function destroy(req, res) {
  return Project.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

export function deleteSprint(req, res) {

  return Project.update({"sprints._id": req.params.id},  {$pull: {"sprints": {"_id": req.params.id} }}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function deleteTask(req, res) {

  return Project.update({"sprints.tasks._id": req.params.id},  {$pull: {"sprints.$.tasks": {"_id": req.params.id} }}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function addMember(req, res) {

  return Project.findOneAndUpdate({_id: req.params.id}, {$push: {"members": req.body}},
   {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}