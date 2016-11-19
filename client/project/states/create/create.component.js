'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './create.routes';
import projectService from '../../services/project-service';
import project from '../project/project.component';

export class CreateComponent {
  /*@ngInject*/
  constructor(projectService, $state, notificationService, Auth) {
    this.currentProject = {};
    this.projectService = projectService;
    this.$state = $state;
    this.notificationService = notificationService;
    this.Auth = Auth;
  }

  createProject(){
    this.projectService.createProject(this.currentProject).then(project => {
      this.$state.go('project', { id: project.data._id });
    });
    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Створив проект під назвою '${this.currentProject.title}' зі статусом '${this.currentProject.status}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
  }
}

export default angular.module('projectManagerApp.create', [uiRouter, project])
  .config(routes)
  .component('create', {
    template: require('./create.html'),
    controller: CreateComponent,
    controllerAs: 'createCtrl'
  })
  .service('projectService', projectService)
  .name;
