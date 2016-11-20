/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 var mongoose = require('mongoose');

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Project from '../api/project/project.model';
import Notification from '../api/notification/notification.model';

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
    },
    {
      _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000003'),
      provider: 'local',
      name: 'Шевченко Сергій',
      email: 's.shevchenko@example.com',
      avatar: "http://combiboilersleeds.com/images/man/man-4.jpg",
      password: 'test'
    },
    {
      _id: mongoose.Types.ObjectId('4edd40c86762e0fb12000004'),
      provider: 'local',
      name: 'Ковальов Дмитро',
      avatar: 'http://creativestockphoto.com/wp-content/uploads/2014/10/images-of-man-and-woman-in-love.jpg',
      email: 'd.kovalyov@example.com',
      password: 'test'
    },
     {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      avatar: 'http://findicons.com/files/icons/2526/bloggers/256/admin.png',
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
      deadline: new Date(2017, 7, 25),
      client: "Іван Ковальов",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      members: [{
        email: "admin@example.com"
      },{
        email: "test@example.com"
      }],
      sprints: [{
        name: "Cпринт 1",
        description: "Реалізація початкового функціоналу",
        goal: "Розробити каркас веб-додатку",
        storyPoints: 90,
        beginDate: new Date(2016, 5, 15),
        endDate: new Date(2015, 6, 15),
        active: true,
        participants: [{
            name: "Іванов Іван",
            role: "Розробник"
          },
          {
            name: "Пяточкін Дмитро",
            role: "Бізнес-аналітик"
          },
          {
            name: "Савкін Дмитро",
            role: "Розробник"
          }
        ],
        tasks: [{
          name: "Розробка архітектури ядра",
          description: "Розробка архітектури основної частини веб-додатку",
          creator: "Олександр Балан",
          asignee: "Савкін Дмитро",
          storyPoint: 2,
          status: "Активний",
          priority: "high",
          implementationTime: "2d 6h"
        },{
          name: "Розробка модулю для генерації звіту",
          description: "Розробка модулю, що буде генерувати звіт по продажу для користувача",
          creator: "Олександр Балан",
          asignee: "Іванов Іван",
          storyPoint: 2,
          status: "Активний",
          priority: "Високий",
          implementationTime: "2d 6h"
        }]
      },
      {
        name: "Cпринт 2",
        description: "Реалізація початкового функціоналу",
        goal: "Розробити каркас веб-додатку",
        storyPoints: 90,
        beginDate: new Date(2016, 5, 15),
        endDate: new Date(2015, 6, 15),
        active: true,
        participants: [{
            name: "Іванов Іван",
            role: "Розробник"
          },
          {
            name: "Пяточкін Дмитро",
            role: "Бізнес-аналітик"
          },
          {
            name: "Савкін Дмитро",
            role: "Розробник"
          }
        ],
        tasks: [{
          name: "Розробка архітектури ядра",
          description: "Розробка архітектури основної частини веб-додатку",
          creator: "Олександр Балан",
          asignee: "Савкін Дмитро",
          storyPoint: 2,
          status: "Активний",
          priority: "high",
          implementationTime: "2d 6h"
        },{
          name: "Розробка модулю для генерації звіту",
          description: "Розробка модулю, що буде генерувати звіт по продажу для користувача",
          creator: "Олександр Балан",
          asignee: "Іванов Іван",
          storyPoint: 2,
          status: "Активний",
          priority: "Високий",
          implementationTime: "2d 6h"
        }]
      }]
    }, 
    {
      name: "Проект 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim. Maecenas imperdiet orci sit amet tellus congue, ullamcorper rutrum nibh dignissim. Integer tempor" + 
      "dignissim sodales. Sed accumsan, est nec varius feugiat, sem purus elementum massa, accumsan vehicula eros" +
      " diam at lorem",
      deadline: new Date(2017, 7, 25),
      client: "Іван Ковальов",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      members: [{
        email: "admin@example.com"
      },{
        email: "test@example.com"
      }],
      sprints: [{
        name: "Cпринт 1",
        description: "Реалізація початкового функціоналу",
        goal: "Розробити каркас веб-додатку",
        storyPoints: 90,
        beginDate: new Date(2016, 6, 15),
        endDate: new Date(2015, 7, 15),
        participants: [{
            name: "Іванов Іван",
            role: "Розробник"
          },
          {
            name: "Пяточкін Дмитро",
            role: "Бізнес-аналітик"
          },
          {
            name: "Савкін Дмитро",
            role: "Розробник"
          }
        ],
        tasks: [{
          name: "Проектування сутності користувача",
          description: "Проектування сутності користувача у базі даних",
          creator: "Олександр Балан",
          asignee: "Савкін Дмитро",
          storyPoint: 2,
          status: "active",
          priority: "high",
          implementationTime: "1d 6h"
        },{
          name: "Проектування сутності для звіту",
          description: "Проектування сутності для звіту у базі даних",
          creator: "Олександр Балан",
          asignee: "Іванов Іван",
          storyPoint: 2,
          status: "Активний",
          priority: "Високий",
          implementationTime: "2d 6h"
        }]
      }]
    },
    {
      name: "Проект 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien dolor, tempus sit amet leo" +
      "vitae, consectetur suscipit urna. Vestibulum ullamcorper mauris nec ante facilisis, sed tincidunt metus" + 
      "dignissim. Maecenas imperdiet orci sit amet tellus congue, ullamcorper rutrum nibh dignissim. Integer tempor" + 
      "dignissim sodales. Sed accumsan, est nec varius feugiat, sem purus elementum massa, accumsan vehicula eros" +
      " diam at lorem",
      deadline: new Date(2017, 7, 25),
      client: "Іван Ковальов",
      status:  "Розробка",
      files: [{
        name:  "filePath"
      }],
      members: [{
        email: "admin@example.com"
      },{
        email: "test@example.com"
      }],
      sprints: [{
        name: "Cпринт 1",
        description: "Реалізація початкового функціоналу",
        goal: "Розробити каркас веб-додатку",
        storyPoints: 90,
        beginDate: new Date(2016, 5, 15),
        endDate: new Date(2015, 6, 15),
        participants: [{
            name: "Іванов Іван",
            role: "Розробник"
          },
          {
            name: "Пяточкін Дмитро",
            role: "Бізнес-аналітик"
          },
          {
            name: "Савкін Дмитро",
            role: "Розробник"
          }
        ],
        tasks: [{
          name: "Авторизація через Google",
          description: "Розробка авторизації через Google",
          creator: "Олександр Балан",
          asignee: "Савкін Дмитро",
          storyPoint: 2,
          status: "Активний",
          priority: "Високий",
          implementationTime: "2d 6h"
        },{
          name: "Авторизація через Facebook",
          description: "Розробка авторизації через Facebook",
          creator: "Олександр Балан",
          asignee: "Іванов Іван",
          storyPoint: 2,
          status: "active",
          priority: "high",
          implementationTime: "2d 6h"
        }]
      }]
    })
    .then(() => {
      console.log('finished creating projects');
    });
  });

Notification.find({}).remove()
  .then(() => {
    Notification.create({
      text: "Додав задачу 'Створити сервіс обслуговування клієнта до спринту 1'",
      creator: "Ковальов Дмитро",
      creatorAvatar: "http://creativestockphoto.com/wp-content/uploads/2014/10/images-of-man-and-woman-in-love.jpg",
      creatorUrl: "4edd40c86762e0fb12000004"
    },
    {
      text: "Сторив спрінт під назвою 'Спрінт 2'",
      creator: "Шевченко Сергій",
      creatorAvatar: "http://combiboilersleeds.com/images/man/man-4.jpg",
      creatorUrl: "4edd40c86762e0fb12000003"
    })
    .then(() => {
      console.log('finished populating notifications');
    });
  });
