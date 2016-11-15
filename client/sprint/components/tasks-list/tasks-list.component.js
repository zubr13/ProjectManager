'use strict';
const angular = require('angular');

export class tasksListComponent {
  /*@ngInject*/
  constructor() {
    this.isDetailsVisible = false;
  }

  toggleDetails(){
    this.isDetailsVisible = !this.isDetailsVisible;
  }
}

export default angular.module('projectManagerApp.tasks-list', [])
  .component('tasksList', {
    template: require('./tasks-list.component.html'),
    bindings: { tasks: '<' },
    controller: tasksListComponent
  })
  .name;
