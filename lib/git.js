var sh = require('execSync')
var moment = require('moment')

module.exports = {
  shortlog: function(opts) {
    var cmd = "git shortlog";
    if (opts.email)
      cmd+=" --email";
    var fmt = "YYYY-DD-MM"
    if (opts.since)
      cmd+=' --since "'+moment(opts.since).format(fmt)+'"';
    if (opts.until)
      cmd+=' --until "'+moment(opts.until).format(fmt)+'"';
    console.log(cmd);
    //return '';
    var output = sh.exec(cmd)
    return output.stdout.trim();
  }
}
