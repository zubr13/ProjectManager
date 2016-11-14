'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projects.routes';

import ProjectService from '../../services/project-service';

export class ProjectsComponent {
  /*@ngInject*/
  constructor(ProjectService, $state) {
    this.$state = $state;
    this.ProjectService = ProjectService;
    this.projects = [];
    this.getProjects();
  }

  getProjects(){
    this.ProjectService.getProjects().then(projects => {
      this.projects = projects;
      this.projects.map(project => {
        project.deadline = new Date(project.deadline).toLocaleString();
        return project;
      });
      return this.projects;
    });
  }
  
  deleteProject(project){
      const deletedIndex = this.projects.indexOf(project);
      this.projects.splice(deletedIndex, 1);
    this.ProjectService.deleteProject(project._id);
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
