module.exports = Clock;

var fs = require('fs')
var Session = require('./session')

function Clock() {}

Clock.prototype.load = function(data) {
  this.sessions = data.sessions || [];
  return this;
}

// see if the last session is open or closed
Clock.prototype.isOn = function() {
  if (this.sessions.length === 0) return false;
  return this.getLastSession().isOpen();
}

Clock.prototype.getLastSession = function() {
  return new Session(this.sessions[this.sessions.length-1]);
}

Clock.prototype.openNewSession = function() {
  this.sessions.push(new Session().obj)
  return this;
}

Clock.prototype.persistToPath = function(filePath) {
  var json = JSON.stringify(this);
  fs.writeFileSync(filePath, json);
  return this;
}

Clock.prototype.getSessions = function() {
  return this.sessions.map(function(s){
    return new Session(s)
  })
}
