'use strict';

describe('Component: projectDetails', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.project-details'));

  var projectDetailsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    projectDetailsComponent = $componentController('projectDetails', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
