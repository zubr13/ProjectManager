'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sprintCtrlStub = {
  index: 'sprintCtrl.index',
  show: 'sprintCtrl.show',
  create: 'sprintCtrl.create',
  upsert: 'sprintCtrl.upsert',
  patch: 'sprintCtrl.patch',
  destroy: 'sprintCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var sprintIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './sprint.controller': sprintCtrlStub
});

describe('Sprint API Router:', function() {
  it('should return an express router instance', function() {
    sprintIndex.should.equal(routerStub);
  });

  describe('GET /api/sprints', function() {
    it('should route to sprint.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sprintCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/sprints/:id', function() {
    it('should route to sprint.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'sprintCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/sprints', function() {
    it('should route to sprint.controller.create', function() {
      routerStub.post
        .withArgs('/', 'sprintCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/sprints/:id', function() {
    it('should route to sprint.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'sprintCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/sprints/:id', function() {
    it('should route to sprint.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'sprintCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/sprints/:id', function() {
    it('should route to sprint.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'sprintCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
