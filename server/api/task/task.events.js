/**
 * Task model events
 */

'use strict';

import {EventEmitter} from 'events';
import Task from './task.model';
var TaskEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TaskEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Task.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    TaskEvents.emit(event + ':' + doc._id, doc);
    TaskEvents.emit(event, doc);
  };
}

export default TaskEvents;
