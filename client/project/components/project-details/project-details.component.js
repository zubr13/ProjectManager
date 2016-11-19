'use strict';
const angular = require('angular');

import sprintsList from '../../../sprint/components/sprints-list/sprints-list.component';

export class projectDetailsComponent {
  /*@ngInject*/
  constructor(ProjectService, $stateParams, $state, Auth, notificationService) {
    this.Auth = Auth;
    this.notificationService = notificationService;
  	this.ProjectService = ProjectService;
  	this.$stateParams = $stateParams;
  	this.$state = $state;
    this.addMemberMode = false;
    this.statusOptions = ["Планування", "Аналіз", "Розробка", "Підтримка"];
  }

  deleteProject(){
    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Видалив проект під назвою '${this.project.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
  	this.ProjectService.deleteProject(this.$stateParams.id);
  	this.$state.go('projects');
  }

  addMember(){
    this.ProjectService.addMember(this.$stateParams.id, this.currentAddMember);
    this.currentAddMember = "";
    this.addMemberMode = false;
  }

  saveProject(){
    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Вніс зміни до проекту під назвою '${this.project.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
    this.ProjectService.saveProject(this.project).then((data) => {
      this.$state.go('projects');
    });
  }
}

export default angular.module('projectManagerApp.project-details', [sprintsList])
  .component('projectDetails', {
    template: require('./project-details.component.html'),
    bindings: {project: '<'},
    controller: projectDetailsComponent
  })
  .name;
