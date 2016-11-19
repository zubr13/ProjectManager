'use strict';
const angular = require('angular');

export class createTaskFormComponent {
  /*@ngInject*/
  constructor(projectService, Auth, notificationService) {
    this.addTaskMode = false;
    this.currentTask = {priority: "Низький", status: "Відкрита", storyPoint: 1};
    this.projectService = projectService;
    this.Auth = Auth;
    this.notificationService = notificationService;
  }

  addTask(){
    this.addTaskMode = false;
    this.tasks.push(this.currentTask);
    this.projectService.addTask(this.sprint._id, this.currentTask);
    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Створив задачу під назвою '${this.currentTask.name}' у спрінті '${this.sprint.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
    this.currentTask = {};
  }
}

export default angular.module('projectManagerApp.create-task-form', [])
  .component('createTaskForm', {
    template: require('./create-task-form.component.html'),
    bindings: { tasks: '<', sprint: '<' },
    controller: createTaskFormComponent
  })
  .name;
