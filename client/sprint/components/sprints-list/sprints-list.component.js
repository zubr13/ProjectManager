'use strict';
const angular = require('angular');
import tasksList from '../tasks-list/tasks-list.component';
import createSprintForm from '../create-sprint-form/create-sprint-form.component';

export class sprintsListComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('projectManagerApp.sprints-list', [tasksList, createSprintForm])
  .component('sprintsList', {
    template: require('./sprints-list.component.html'),
    bindings: { sprints: "<"},
    controller: sprintsListComponent
  })
  .name;
