'use strict';
const angular = require('angular');

export class tasksListComponent {
  /*@ngInject*/
  constructor(ProjectsService) {
    this.isDetailsVisible = [];
    this.ProjectsService = ProjectsService;
  }

  fillDetailsVisible(){
    for(let i = 0; i < this.tasks.length; i++){
      this.isDetailsVisible = false;
    }
  }

  toggleDetails(index){
    this.isDetailsVisible[index] = !this.isDetailsVisible[index];
  }

  isDetailVisible(index){
    return this.isDetailsVisible[index];
  }

  addTask(){
    this.ProjectsService.addTask(this.sprintId, this.currentTask);
  }
}

export default angular.module('projectManagerApp.tasks-list', [])
  .component('tasksList', {
    template: require('./tasks-list.component.html'),
    bindings: { tasks: '<', sprintId: "<" },
    controller: tasksListComponent
  })
  .name;
