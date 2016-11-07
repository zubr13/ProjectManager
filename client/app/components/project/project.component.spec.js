'use strict';

describe('Component: project', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.project'));

  var projectComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    projectComponent = $componentController('project', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
