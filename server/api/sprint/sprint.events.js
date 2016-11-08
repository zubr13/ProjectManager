/**
 * Sprint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sprint from './sprint.model';
var SprintEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SprintEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Sprint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SprintEvents.emit(event + ':' + doc._id, doc);
    SprintEvents.emit(event, doc);
  };
}

export default SprintEvents;
