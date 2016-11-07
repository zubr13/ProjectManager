'use strict';

var app = require('../..');
import request from 'supertest';

var newProject;

describe('Project API:', function() {
  describe('GET /api/project', function() {
    var projects;

    beforeEach(function(done) {
      request(app)
        .get('/api/project')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          projects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      projects.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/project', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/project')
        .send({
          name: 'New Project',
          info: 'This is the brand new project!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newProject = res.body;
          done();
        });
    });

    it('should respond with the newly created project', function() {
      newProject.name.should.equal('New Project');
      newProject.info.should.equal('This is the brand new project!!!');
    });
  });

  describe('GET /api/project/:id', function() {
    var project;

    beforeEach(function(done) {
      request(app)
        .get(`/api/project/${newProject._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          project = res.body;
          done();
        });
    });

    afterEach(function() {
      project = {};
    });

    it('should respond with the requested project', function() {
      project.name.should.equal('New Project');
      project.info.should.equal('This is the brand new project!!!');
    });
  });

  describe('PUT /api/project/:id', function() {
    var updatedProject;

    beforeEach(function(done) {
      request(app)
        .put(`/api/project/${newProject._id}`)
        .send({
          name: 'Updated Project',
          info: 'This is the updated project!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedProject = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProject = {};
    });

    it('should respond with the original project', function() {
      updatedProject.name.should.equal('New Project');
      updatedProject.info.should.equal('This is the brand new project!!!');
    });

    it('should respond with the updated project on a subsequent GET', function(done) {
      request(app)
        .get(`/api/project/${newProject._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let project = res.body;

          project.name.should.equal('Updated Project');
          project.info.should.equal('This is the updated project!!!');

          done();
        });
    });
  });

  describe('PATCH /api/project/:id', function() {
    var patchedProject;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/project/${newProject._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Project' },
          { op: 'replace', path: '/info', value: 'This is the patched project!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedProject = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedProject = {};
    });

    it('should respond with the patched project', function() {
      patchedProject.name.should.equal('Patched Project');
      patchedProject.info.should.equal('This is the patched project!!!');
    });
  });

  describe('DELETE /api/project/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/project/${newProject._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when project does not exist', function(done) {
      request(app)
        .delete(`/api/project/${newProject._id}`)
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
