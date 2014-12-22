var sh = require('execSync')
var moment = require('moment')

module.exports = {
  shortlog: function(opts) {
    var cmd = "git shortlog";
    if (opts.email)
      cmd+=" --email";
    if (opts.since)
      cmd+=' --since "'+moment(opts.since).format()+'"';
    if (opts.until)
      cmd+=' --until "'+moment(opts.until).format()+'"';
    return sh.exec(cmd).stdout.trim();
  }
}
