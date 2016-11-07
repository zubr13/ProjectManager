'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create.routes';

import Project from '../../models/project';

export class CreateComponent {
  /*@ngInject*/
  constructor() {
    this.addExecutorMode = false;
    this.executors = [];
  }

  addExecutor(){
    if(this.addExecutorMode){
      this.executors.push(this.executor);
      this.executor = "";
    }
  }

  createProject(){
    var project = new Project(this.title, this.description, this.deadline, this.client,
      this.status, this.executors);
    this.$state.go();
  }
}

export default angular.module('projectManagerApp.create', [uiRouter])
  .config(routes)
  .component('create', {
    template: require('./create.html'),
    controller: CreateComponent,
    controllerAs: 'createCtrl'
  })
  .name;
