'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create.routes';

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
    //this.$state.go();
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
