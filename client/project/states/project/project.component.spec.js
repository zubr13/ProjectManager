'use strict';

describe('Component: ProjectComponent', function() {
  // load the controller's module
  beforeEach(module('projectManagerApp.project'));

  var ProjectComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProjectComponent = $componentController('project', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
