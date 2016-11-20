'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projects.routes'
import ProjectService from '../../services/project-service';

export class ProjectsComponent {
  /*@ngInject*/
  constructor(Auth, projectService, $state) {
    this.$state = $state;
    this.projectService = projectService;
    this.projects = [];
    this.getProjects();
  }

  getProjects(){
    this.projectService.getProjects().then(projects => {
      this.projects = projects;
      return this.projects;
    });
  }
  
  // deleteProject(project){
  //     const deletedIndex = this.projects.indexOf(project);
  //     this.projects.splice(deletedIndex, 1);
  //   this.projectService.deleteProject(project._id);
  // }
}

export default angular.module('projectManagerApp.projects', [uiRouter])
  .config(routes)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsComponent,
    controllerAs: 'projectsCtrl'
  })
  .service('ProjectService', ProjectService)
  .name;
