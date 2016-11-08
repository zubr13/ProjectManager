'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './sprint.routes';

export class SprintComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('projectManagerApp.sprint', [uiRouter])
  .config(routes)
  .component('sprint', {
    template: require('./sprint.html'),
    controller: SprintComponent,
    controllerAs: 'sprintCtrl'
  })
  .name;
