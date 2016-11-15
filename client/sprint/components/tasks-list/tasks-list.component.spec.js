'use strict';

describe('Component: tasksList', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.tasks-list'));

  var tasksListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    tasksListComponent = $componentController('tasksList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
