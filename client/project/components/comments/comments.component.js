'use strict';
const angular = require('angular');

export class commentsComponent {
  /*@ngInject*/
  constructor(Auth) {
  	this.Auth = Auth;
  }

  addComment(){
    const currentUser = this.Auth.getCurrentUserSync(); 
    const newComment = {
      text: this.newComment,
      author: currentUser.name,
      avatar: currentUser.avatar,
      profileUrl: currentUser._id
    }
    this.comments.push(newComment);
    this.newComment = "";
  }
}

export default angular.module('projectManagerApp.comments', [])
  .component('comments', {
    template: require('./comments.component.html'),
    bindings: { comments: '<' },
    controller: commentsComponent
  })
  .name;
