'use strict';
const angular = require('angular');
import createTaskForm from '../create-task-form/create-task-form.component';
import commentsComponent from '../../../project/components/comments/comments.component';

export class tasksListComponent {
  /*@ngInject*/
  constructor(projectService, Auth, notificationService) {
    this.isDetailsVisible = [];
    this.projectService = projectService;
    this.Auth = Auth;
    this.notificationService = notificationService;
  }

  fillDetailsVisible(){
    for(let i = 0; i < this.tasks.length; i++){
      this.isDetailsVisible = false;
    }
  }

  toggleDetails(index){
    this.isDetailsVisible[index] = !this.isDetailsVisible[index];
  }

  isDetailVisible(index){
    return this.isDetailsVisible[index];
  }

  deleteTask(task){
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.projectService.deleteTask(task._id);

    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Видалив задачу під назвою '${task.name}' у спрінті '${this.sprint.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
  }

  addComment(task, comment){
    const currentUser = this.Auth.getCurrentUserSync();
    const notification = {
      text: `Додав коментар '${comment.text}' до задачі під назвою '${task.name}' у спрінті '${this.sprint.name}'`,
      creator: currentUser.name,
      creatorAvatar: currentUser.avatar,
      creatorUrl: currentUser._id
    }
    this.notificationService.createNotification(notification);
    this.projectService.addTaskComment(this.sprint, this.tasks);
  }
}

export default angular.module('projectManagerApp.tasks-list', [createTaskForm, commentsComponent])
  .component('tasksList', {
    template: require('./tasks-list.component.html'),
    bindings: { tasks: '<', sprint: "<" },
    controller: tasksListComponent
  })
  .name;
