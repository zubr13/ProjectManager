import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import createState from '../../../project/states/create/create.component';

export class MainController {

  /*@ngInject*/
  constructor() {
    
  }

}

export default angular.module('projectManagerApp.main', [uiRouter, createState])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
