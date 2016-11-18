import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import createState from '../../../project/states/create/create.component';
import notificationService from './notification/notification-service';
import notificationComponent from './notification/notification.component';

export class MainController {

  /*@ngInject*/
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.notifications = [];
    this.getNotifications();
  }

  getNotifications(){
  	this.notificationService.getNotifications().then(notifications => {
  		this.notifications = notifications;
  	});
  }
}

export default angular.module('projectManagerApp.main', [uiRouter, createState, notificationComponent])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .service('notificationService', notificationService)
  .name;
