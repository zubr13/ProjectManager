'use strict';
const angular = require('angular');

import sprintsList from '../../../sprint/components/sprints-list/sprints-list.component';

export class projectDetailsComponent {
  /*@ngInject*/
  constructor(ProjectService, $stateParams, $state) {
  	this.ProjectService = ProjectService;
  	this.$stateParams = $stateParams;
  	this.$state = $state;
  }

  deleteProject(){
  	this.ProjectService.deleteProject(this.$stateParams.id);
  	this.$state.go('projects');
  }
}

export default angular.module('projectManagerApp.project-details', [sprintsList])
  .component('projectDetails', {
    template: require('./project-details.component.html'),
    bindings: {project: '<'},
    controller: projectDetailsComponent
  })
  .name;
