'use strict';

describe('Component: membersList', function() {
  // load the component's module
  beforeEach(module('projectManagerApp.members-list'));

  var membersListComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    membersListComponent = $componentController('membersList', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
