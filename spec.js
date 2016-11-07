'use strict';
/*eslint-env node*/
var testsContext;

require('babel-polyfill');
require('angular');
require('angular-mocks');
require('./client/app/components/ui-router/ui-router.mock');
require('./client/app/components/socket/socket.mock');

testsContext = require.context('./client', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
