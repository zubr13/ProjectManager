'use strict';
const angular = require('angular');

import sprintsList from '../../../sprint/components/sprints-list/sprints-list.component';

export class projectDetailsComponent {
  /*@ngInject*/
  constructor() {
    
  }
}

export default angular.module('projectManagerApp.project-details', [sprintsList])
  .component('projectDetails', {
    template: require('./project-details.component.html'),
    bindings: {project: '<'},
    controller: projectDetailsComponent
  })
  .name;
