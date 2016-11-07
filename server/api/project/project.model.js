'use strict';

import mongoose from 'mongoose';

var ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  deadline: {type: Date, default: Date.now},
  client: String,
  status:  String,
  files: [{
  	path:  String
  }],
  executors: [{
  	name: String
  }]
});

export default mongoose.model('Project', ProjectSchema);
