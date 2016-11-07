'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projects.routes';

import ProjectService from '../../services/project-service';

export class ProjectsComponent {
  /*@ngInject*/
  constructor(ProjectService) {
    this.message = 'Hello';
    this.ProjectService = ProjectService;
    this.projects = [];
    this.getProjects();
  }

  getProjects(){
    this.ProjectService.getProjects().then(projects => {
      this.projects = projects;
      this.projects.map(function(project) {
        project.deadline = new Date(project.deadline).toLocaleString();
        return project;
      })
      return this.projects;
    });
  }
}

ProjectsComponent.$inject = ['ProjectService'];

export default angular.module('projectManagerApp.projects', [uiRouter])
  .config(routes)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsComponent,
    controllerAs: 'projectsCtrl'
  })
  .service('ProjectService', ProjectService)
  .name;
