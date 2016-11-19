'use strict';

import mongoose from 'mongoose';

var ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  deadline: {type: Date, default: Date.now},
  client: String,
  status: String,
  files: [{
  	path:  String
  }],
  managerEmail: String,
  sprints: [{
    name: String,
    description: String,
    goal: String,
    storyPoints: Number,
    beginDate: {type: Date, default: Date.now},
    endDate: {type: Date},
    participants: [{
      name: String,
      role: String
    }],
    tasks: [{
      name: String,
      description: String,
      creator: String,
      asignee: String,
      storyPoint: Number,
      status: String,
      priority: String,
      implementationTime: String
    }],
    members: [{
      email: String
    }],
    active: Boolean
  }]
});

export default mongoose.model('Project', ProjectSchema);
