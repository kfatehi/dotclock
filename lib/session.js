module.exports = Session;

var git = require('./git')
var moment = require('moment')

function Session(obj) {
  this.obj = obj || {
    start: new Date(),
    end: null
  }
}

// it is closed if `end` is set
Session.prototype.isClosed = function() {
  return !!this.obj.end;
}

// it is open if `end` is not set
Session.prototype.isOpen = function() {
  return !this.isClosed();
}

Session.prototype.formatStartTime = function(format) {
  return moment(this.obj.start).format(format);
}

Session.prototype.formatEndTime = function(format) {
  return moment(this.obj.end).format(format);
}

Session.prototype.diff = function(format) {
  return moment(this.obj.end || moment()).diff(this.obj.start, format, true).toFixed(2)
}

Session.prototype.end = function() {
  this.obj.end = new Date();
  return this;
}

Session.prototype.commits = function() {
  return git.shortlog({
    email: true,
    since: this.obj.start,
    until: this.obj.end
  })
}
