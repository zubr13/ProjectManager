import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import activityComponent from '../components/activity/activity.component';
import createState from '../states/create/create.component';

export class MainController {

  /*@ngInject*/
  constructor() {
    
  }

}

export default angular.module('projectManagerApp.main', [uiRouter, activityComponent, createState])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
