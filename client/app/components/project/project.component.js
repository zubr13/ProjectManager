'use strict';
const angular = require('angular');

export class projectComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('projectManagerApp.project', [])
  .component('project', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: projectComponent
  })
  .name;
