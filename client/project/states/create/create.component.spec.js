'use strict';

describe('Component: CreateComponent', function() {
  // load the controller's module
  beforeEach(module('projectManagerApp.create'));

  var CreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CreateComponent = $componentController('create', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
