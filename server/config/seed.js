/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 var mongoose = require('mongoose');

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Project from '../api/project/project.model';
import Task from '../api/task/task.model';
import Sprint from '../api/sprint/sprint.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

  Project.find({}).remove()
  .then(() => {
    Project.create({
      name: "Проект 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim. Maecenas imperdiet orci sit amet tellus congue, ullamcorper rutrum nibh dignissim. Integer tempor" + 
      "dignissim sodales. Sed accumsan, est nec varius feugiat, sem purus elementum massa, accumsan vehicula eros" +
      " diam at lorem",
      client: "Іван Іванов",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Вася Пупкін"
      }]
    }, { 
      name: "Проект 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim.",
      client: "Джон Сміт",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Денис Шевченко"
      }]
    },
    { 
      name: "Проект 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim.",
      client: "Джон Сміт",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Денис Шевченко"
      }]
    },
    { 
      name: "Проект 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim.",
      client: "Джон Сміт",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Денис Шевченко"
      }]
    },
    { 
      name: "Проект 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim.",
      client: "Джон Сміт",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Денис Шевченко"
      }]
    },
    {
      name: "Проект 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim. Maecenas imperdiet orci sit amet tellus congue, ullamcorper rutrum nibh dignissim. Integer tempor" + 
      "dignissim sodales. Sed accumsan, est nec varius feugiat, sem purus elementum massa, accumsan vehicula eros" +
      " diam at lorem",
      client: "Іван Іванов",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      executors: [{
        name: "Вася Пупкін"
      }]
    })
    .then(() => {
      console.log('finished creating projects');
    });
  });

Task.find({}).remove()
  .then(() => {
    Task.create({
      name: "Task 1",
      description: "Description",
      creator: "Creator",
      priority: "High"
    },
    {
      name: "Task 2",
      description: "Description",
      creator: "Creator",
      priority: "High"
    },
    {
      name: "Task 2",
      description: "Description",
      creator: "Creator",
      priority: "High"
    },
    {
      name: "Task 4",
      description: "Description",
      creator: "Creator",
      priority: "High"
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Sprint.find({}).remove()
  .then(() => {
    Sprint.create({
      name: "Sprint 1",
      description: "Description",
      goal: "Implement the first part of functionality",
      storyPoints: 120,
      endDate: new Date(2017, 4, 12, 0, 0, 0),
      participants: [{
        id: "1",
        name: "Vasiliy Pupkin",
        role: "Developer"
      }],
      tasks: [{
        id: "12d1sa"
      }],
      active: true
    })
    .then(() => {
      console.log('finished populating users');
    });
  });   