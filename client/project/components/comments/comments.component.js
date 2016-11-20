'use strict';
const angular = require('angular');

export class commentsComponent {
  /*@ngInject*/
  constructor() {
    
  }
}

export default angular.module('projectManagerApp.comments', [])
  .component('comments', {
    template: require('./comments.component.html'),
    bindings: { comments: '<' },
    controller: commentsComponent
  })
  .name;
