'use strict';
const angular = require('angular');

export class commentsComponent {
  /*@ngInject*/
  constructor(Auth) {
  	this.Auth = Auth;
  }

  handleAddComment(){
    const currentUser = this.Auth.getCurrentUserSync(); 
    const newComment = {
      text: this.newComment,
      author: currentUser.name,
      avatar: currentUser.avatar,
      date: new Date(),
      profileUrl: currentUser._id
    }
    this.onAddComment({comment: newComment});
    this.comments.push(newComment);
    this.newComment = "";
  }
}

export default angular.module('projectManagerApp.comments', [])
  .component('comments', {
    template: require('./comments.component.html'),
    bindings: { comments: '<', onAddComment: '&' },
    controller: commentsComponent
  })
  .name;
