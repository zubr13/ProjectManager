'use strict';
const angular = require('angular');
import createTaskForm from '../create-task-form/create-task-form.component';

export class tasksListComponent {
  /*@ngInject*/
  constructor() {
    this.isDetailsVisible = [];
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
}

export default angular.module('projectManagerApp.tasks-list', [createTaskForm])
  .component('tasksList', {
    template: require('./tasks-list.component.html'),
    bindings: { tasks: '<', sprintId: "<" },
    controller: tasksListComponent
  })
  .name;
