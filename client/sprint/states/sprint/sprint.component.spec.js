'use strict';

describe('Component: SprintComponent', function() {
  // load the controller's module
  beforeEach(module('projectManagerApp.sprint'));

  var SprintComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SprintComponent = $componentController('sprint', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
