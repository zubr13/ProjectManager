'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create.routes';
import projectService from '../../services/project-service';

export class CreateComponent {
  /*@ngInject*/
  constructor(projectService) {
    this.addExecutorMode = false;
    this.currentProject = {};
    this.currentProject.executors = [];
    this.projectService = projectService;
  }

  addExecutor(){
    if(this.addExecutorMode){
      this.currentProject.executors.push({name: this.executor});
      this.executor = "";
    }
  }

  createProject(){
    //this.$state.go();
    //console.log(this.currentProject);
    this.projectService.createProject(this.currentProject);
  }
}

export default angular.module('projectManagerApp.create', [uiRouter])
  .config(routes)
  .component('create', {
    template: require('./create.html'),
    controller: CreateComponent,
    controllerAs: 'createCtrl'
  })
  .service('projectService', projectService)
  .name;
