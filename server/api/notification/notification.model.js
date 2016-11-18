'use strict';

import mongoose from 'mongoose';

var NotificationSchema = new mongoose.Schema({
  text: String,
  date: {type: Date, default: Date.now},
  creator: String,
  creatorAvatar: String,
  creatorUrl: String
});

export default mongoose.model('Notification', NotificationSchema);
