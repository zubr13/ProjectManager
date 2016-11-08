'use strict';

describe('Component: sprintsList', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.sprints-list'));

  var sprintsListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sprintsListComponent = $componentController('sprintsList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
