'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User, Auth) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.Auth = Auth;
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  updateUser(user) {
  	this.Auth.updateUser(user);
  }
}
