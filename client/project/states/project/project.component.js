'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './project.routes';

import projectService from '../../services/project-service';
import projectComponent from '../../components/project-details/project-details.component';

export class ProjectComponent {
  /*@ngInject*/
  constructor(projectService, $stateParams, Auth) {
    this.projectService = projectService;
    this.$stateParams = $stateParams;
    this.Auth = Auth;
    this.project = {};
    this.members = [];
    this.getProjectById();
    this.isCurentUserHasAccess = false;
    Auth.isAdmin().then(isAdmin => {
      if(isAdmin){
        this.isCurentUserHasAccess = true;
      }
    });
  }

  getProjectById(){
    this.projectService.getProjectById(this.$stateParams.id)
      .then(project => {
        this.project = project;
        this.getMembers();
      });
  }

  getMembers(){
    this.project.members.forEach((member) => {
      this.projectService.getMemberByEmail(member.email).then(member => {
        this.members.push(member[0]);
        this.userHasAccess(member[0]);
      });
    });
  }

  userHasAccess(member){
    const currentUser = this.Auth.getCurrentUserSync();
    if(member._id === currentUser._id){
      this.isCurentUserHasAccess = true;
    }
  }

}

export default angular.module('projectManagerApp.project', [uiRouter, projectComponent])
  .config(routes)
  .component('project', {
    template: require('./project.html'),
    controller: ProjectComponent,
    controllerAs: 'projectCtrl'
  })
  .service('projectService', projectService)
  .name;
