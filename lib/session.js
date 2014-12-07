module.exports = Session;

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
