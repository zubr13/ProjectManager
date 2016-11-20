'use strict';
const angular = require('angular');
import tasksList from '../tasks-list/tasks-list.component';
import createSprintForm from '../create-sprint-form/create-sprint-form.component';
import commentsComponent from '../../../project/components/comments/comments.component';

export class sprintsListComponent {
  /*@ngInject*/
  constructor(projectService, Auth, notificationService) {
  	this.projectService = projectService;
    this.Auth = Auth;
    this.notificationService = notificationService;
  }

  deleteSprint(sprint){
    const index = this.sprints.indexOf(sprint);
    this.sprints.splice(index, 1);
  	this.projectService.deleteSprint(sprint._id);

    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Видалив спрінт під назвою '${sprint.name}' у проекті '${this.project.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
  }
}

export default angular.module('projectManagerApp.sprints-list', [tasksList, createSprintForm, 
  commentsComponent])
  .component('sprintsList', {
    template: require('./sprints-list.component.html'),
    bindings: { sprints: "<", project: "<"},
    controller: sprintsListComponent
  })
  .name;
