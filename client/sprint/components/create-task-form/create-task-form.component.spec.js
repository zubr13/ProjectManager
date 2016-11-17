'use strict';

describe('Component: createTaskForm', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.create-task-form'));

  var createTaskFormComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    createTaskFormComponent = $componentController('createTaskForm', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
