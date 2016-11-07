'use strict';

import angular from 'angular';

export default angular.module('projectManagerApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .constant('API_URL', require('./config/constants')) 
  .name;
