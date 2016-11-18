'use strict';
const angular = require('angular');

export class notificationComponent {
  /*@ngInject*/
  constructor() {
    this.notification.date = new Date(this.notification.date).toLocaleString();
  }
}

export default angular.module('projectManagerApp.notification', [])
  .component('notification', {
    template: require('./notification.component.html'),
    bindings: { notification: '<' },
    controller: notificationComponent
  })
  .name;
