'use strict';
const angular = require('angular');

export class sprintsListComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('projectManagerApp.sprints-list', [])
  .component('sprintsList', {
    template: require('./sprints-list.component.html'),
    bindings: {},
    controller: sprintsListComponent
  })
  .name;
