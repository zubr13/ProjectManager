'use strict';

describe('Component: comments', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.comments'));

  var commentsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    commentsComponent = $componentController('comments', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
