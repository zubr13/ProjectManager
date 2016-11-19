'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from './components/auth/auth.module';
import account from './states/account';
import admin from './states/admin';
import navbar from './components/navbar/navbar.component';
import main from './states/main/main.component';
import constants from './app.constants';
import util from './components/util/util.module';
import projectsState from '../project/states/projects/projects.component';
import projectState from '../project/states/project/project.component';
import './app.scss';

angular.module('projectManagerApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io',
    uiRouter, uiBootstrap, _Auth, account, admin, navbar, main, constants, util, projectsState, projectState
  ])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(!loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['projectManagerApp'], {
      strictDi: false
    });
  });
