'use strict';

describe('Component: createSprintForm', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.create-sprint-form'));

  var createSprintFormComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    createSprintFormComponent = $componentController('createSprintForm', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
