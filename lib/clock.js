module.exports = Clock;

var fs = require('fs')
var Session = require('./session')

function Clock() {}

Clock.prototype.load = function(data) {
  this.sessions = data.sessions || [];
}

// see if the last session is open or closed
Clock.prototype.isOn = function() {
  if (this.sessions.length === 0) return false;
  var last = new Session(this.sessions[this.sessions.length-1])
  return last.isOpen();
}

Clock.prototype.openNewSession = function() {
  this.sessions.push(new Session().obj)
}

Clock.prototype.persistToPath = function(filePath) {
  var json = JSON.stringify(this);
  fs.writeFileSync(filePath, json);
}