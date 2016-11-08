'use strict';

var app = require('../..');
import request from 'supertest';

var newTask;

describe('Task API:', function() {
  describe('GET /api/tasks', function() {
    var tasks;

    beforeEach(function(done) {
      request(app)
        .get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          tasks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tasks.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/tasks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tasks')
        .send({
          name: 'New Task',
          info: 'This is the brand new task!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTask = res.body;
          done();
        });
    });

    it('should respond with the newly created task', function() {
      newTask.name.should.equal('New Task');
      newTask.info.should.equal('This is the brand new task!!!');
    });
  });

  describe('GET /api/tasks/:id', function() {
    var task;

    beforeEach(function(done) {
      request(app)
        .get(`/api/tasks/${newTask._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          task = res.body;
          done();
        });
    });

    afterEach(function() {
      task = {};
    });

    it('should respond with the requested task', function() {
      task.name.should.equal('New Task');
      task.info.should.equal('This is the brand new task!!!');
    });
  });

  describe('PUT /api/tasks/:id', function() {
    var updatedTask;

    beforeEach(function(done) {
      request(app)
        .put(`/api/tasks/${newTask._id}`)
        .send({
          name: 'Updated Task',
          info: 'This is the updated task!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTask = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTask = {};
    });

    it('should respond with the original task', function() {
      updatedTask.name.should.equal('New Task');
      updatedTask.info.should.equal('This is the brand new task!!!');
    });

    it('should respond with the updated task on a subsequent GET', function(done) {
      request(app)
        .get(`/api/tasks/${newTask._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let task = res.body;

          task.name.should.equal('Updated Task');
          task.info.should.equal('This is the updated task!!!');

          done();
        });
    });
  });

  describe('PATCH /api/tasks/:id', function() {
    var patchedTask;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/tasks/${newTask._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Task' },
          { op: 'replace', path: '/info', value: 'This is the patched task!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTask = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTask = {};
    });

    it('should respond with the patched task', function() {
      patchedTask.name.should.equal('Patched Task');
      patchedTask.info.should.equal('This is the patched task!!!');
    });
  });

  describe('DELETE /api/tasks/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/tasks/${newTask._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when task does not exist', function(done) {
      request(app)
        .delete(`/api/tasks/${newTask._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
