'use strict';
const angular = require('angular');

export class membersListComponent {
  /*@ngInject*/
  constructor(ProjectService, $stateParams) {
    this.addMemberMode = false;
    this.$stateParams = $stateParams;
    this.ProjectService = ProjectService;
  }

  addMember(){
    const currentMember = this.currentAddMember;
    this.ProjectService.addMember(this.$stateParams.id, this.currentAddMember).then(() => {
      this.ProjectService.getMemberByEmail(currentMember).then(users => {
        this.members.push(users[0]);
      });
    });
    this.currentAddMember = "";
    this.addMemberMode = false;
  }
}

export default angular.module('projectManagerApp.members-list', [])
  .component('membersList', {
    template: require('./members-list.component.html'),
    bindings: { members: '<' },
    controller: membersListComponent
  })
  .name;
