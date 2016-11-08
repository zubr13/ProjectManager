'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('sprint', {
      url: '/sprint/:id',
      template: '<sprint></sprint>'
    });
}
