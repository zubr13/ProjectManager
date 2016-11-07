'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projects.routes';

export class ProjectsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('projectManagerApp.projects', [uiRouter])
  .config(routes)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsComponent,
    controllerAs: 'projectsCtrl'
  })
  .name;
