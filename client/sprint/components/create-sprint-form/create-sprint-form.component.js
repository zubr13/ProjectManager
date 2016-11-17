'use strict';
const angular = require('angular');

export class createSprintFormComponent {
  /*@ngInject*/
  constructor($stateParams, projectService) {
    this.addExecutorMode = false;
    this.currentSprint = {};
    this.currentSprint.participants = [];
    this.addSprintMode = false;
    this.$stateParams = $stateParams;
    this.projectService = projectService;
  }

  addExecutor(){
    if(this.addExecutorMode){
      this.currentSprint.participants.push({name: this.executor, role: "developer"});
      this.executor = "";
    }
  }

  addSprint(){
    this.addSprintMode = false;
    this.sprints.push(this.currentSprint);
    this.projectService.addSprint(this.$stateParams.id, this.currentSprint);
    this.currentSprint = {};
    this.currentSprint.participants = [];

  }
}

export default angular.module('projectManagerApp.create-sprint-form', [])
  .component('createSprintForm', {
    template: require('./create-sprint-form.component.html'),
    bindings: { sprints: '<' },
    controller: createSprintFormComponent
  })
  .name;
