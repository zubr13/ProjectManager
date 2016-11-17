'use strict';
const angular = require('angular');

export class createTaskFormComponent {
  /*@ngInject*/
  constructor(projectService) {
    this.addTaskMode = false;
    this.currentTask = {};
    this.projectService = projectService;
  }

  addTask(){
    //this.projectService.addTask(sprintId, this.currentTask);
  }
}

export default angular.module('projectManagerApp.create-task-form', [])
  .component('createTaskForm', {
    template: require('./create-task-form.component.html'),
    bindings: { tasks: '<', sprintId: '<' },
    controller: createTaskFormComponent
  })
  .name;
