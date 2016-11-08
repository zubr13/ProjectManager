'use strict';

import mongoose from 'mongoose';

var TaskSchema = new mongoose.Schema({
  	name: String,
    description: String,
    creator: String,
    asignee: String,
    storyPoint: Number,
    status: String,
    priority: String,
    implementationTime: String
});

export default mongoose.model('Task', TaskSchema);
