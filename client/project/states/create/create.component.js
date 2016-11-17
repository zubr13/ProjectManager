'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create.routes';
import projectService from '../../services/project-service';
import project from '../project/project.component';

export class CreateComponent {
  /*@ngInject*/
  constructor(projectService, $state) {
    this.currentProject = {};
    this.projectService = projectService;
    this.$state = $state;
  }

  createProject(){
    this.projectService.createProject(this.currentProject).then(project => {
      this.$state.go('project', { id: project.data._id });
    });
  }
}

export default angular.module('projectManagerApp.create', [uiRouter, project])
  .config(routes)
  .component('create', {
    template: require('./create.html'),
    controller: CreateComponent,
    controllerAs: 'createCtrl'
  })
  .service('projectService', projectService)
  .name;
