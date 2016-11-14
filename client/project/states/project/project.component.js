'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './project.routes';

import projectService from '../../services/project-service';
import projectComponent from '../../components/project-details/project-details.component';

export class ProjectComponent {
  /*@ngInject*/
  constructor(projectService, $stateParams) {
    this.projectService = projectService;
    this.project = {};
    this.$stateParams = $stateParams;
    this.getProjectById();
  }

  getProjectById(){
    this.projectService.getProjectById(this.$stateParams.id)
      .then(project => {
        this.project = project;
        this.project.deadline = new Date(this.project.deadline).toLocaleString();
        this.formatSprintDate(project.sprints);
      });
  }

  formatSprintDate(sprints){
    sprints.map(sprint => {
        sprint.beginDate = new Date(sprint.beginDate).toLocaleString();
        sprint.endDate = new Date(sprint.endDate).toLocaleString();
        return sprint; 
    });
  }
}

export default angular.module('projectManagerApp.project', [uiRouter, projectComponent])
  .config(routes)
  .component('project', {
    template: require('./project.html'),
    controller: ProjectComponent,
    controllerAs: 'projectCtrl'
  })
  .service('projectService', projectService)
  .name;
