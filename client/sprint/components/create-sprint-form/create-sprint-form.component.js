'use strict';
const angular = require('angular');

export class createSprintFormComponent {
  /*@ngInject*/
  constructor($stateParams, projectService, Auth, notificationService) {
    this.addExecutorMode = false;
    this.currentSprint = {};
    this.currentSprint.participants = [];
    this.addSprintMode = false;
    this.$stateParams = $stateParams;
    this.projectService = projectService;
    this.Auth = Auth;
    this.notificationService = notificationService;
  }

  addExecutor(){
    if(this.addExecutorMode){
      this.currentSprint.participants.push({name: this.executor, role: "developer"});
      this.executor = "";
    }
  }

  addSprint(){
    this.addSprintMode = false;
    this.sprints.push(this.currentSprint);
    this.projectService.addSprint(this.$stateParams.id, this.currentSprint);
    const currentUser = this.Auth.getCurrentUserSync();
    console.log(this.project);
    const notification = {
      text: `Створив спрінт під назвою '${this.currentSprint.name}' у проекті '${this.project.name}' з метою: '${this.currentSprint.goal}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
    this.currentSprint = {};
    this.currentSprint.participants = [];


  }
}

export default angular.module('projectManagerApp.create-sprint-form', [])
  .component('createSprintForm', {
    template: require('./create-sprint-form.component.html'),
    bindings: { sprints: '<', project: '<' },
    controller: createSprintFormComponent
  })
  .name;
