'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import profileService from './profile-service';

import routes from './profile.routes';

export class ProfileComponent {
  /*@ngInject*/
  constructor(profileService, $stateParams) {
    this.profileService = profileService; 
    this.user = {};
    this.$stateParams = $stateParams;
    this.getUserById();
  }

  getUserById(){
    this.profileService.getUserById(this.$stateParams.id).then(data => {
      this.user = data;
      console.log(data);
    })
  }
}

export default angular.module('projectManagerApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  })
  .service('profileService', profileService)
  .name;
