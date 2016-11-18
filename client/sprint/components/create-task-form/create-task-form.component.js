'use strict';
const angular = require('angular');

export class createTaskFormComponent {
  /*@ngInject*/
  constructor(projectService) {
    this.addTaskMode = false;
    this.currentTask = {priority: "Низький", status: "Відкрита", storyPoint: 1};
    this.projectService = projectService;
  }

  addTask(){
    this.addTaskMode = false;
    this.tasks.push(this.currentTask);
    this.projectService.addTask(this.sprintId, this.currentTask);
    this.currentTask = {};
  }
}

export default angular.module('projectManagerApp.create-task-form', [])
  .component('createTaskForm', {
    template: require('./create-task-form.component.html'),
    bindings: { tasks: '<', sprintId: '<' },
    controller: createTaskFormComponent
  })
  .name;
