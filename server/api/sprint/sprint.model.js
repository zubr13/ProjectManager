'use strict';

import mongoose from 'mongoose';

var SprintSchema = new mongoose.Schema({
  name: String,
  description: String,
  goal: String,
  storyPoints: Number,
  beginDate: {type: Date, default: Date.now},
  endDate: {type: Date},
  participants: [{
  	id: String,
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
  	executionTime: String
  }],
  active: Boolean
});

export default mongoose.model('Sprint', SprintSchema);
