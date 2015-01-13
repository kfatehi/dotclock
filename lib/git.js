var sh = require('execSync')
var moment = require('moment')


var name = null;

module.exports = {
  shortlog: function(opts) {
    var cmd = "git shortlog";
    if (opts.email)
      cmd+=" --email";
    if (opts.since)
      cmd+=' --since "'+moment(opts.since).format()+'"';
    if (opts.until)
      cmd+=' --until "'+moment(opts.until).format()+'"';

    if (name === null)
      name = sh.exec("git config --global user.name").stdout.trim();

    cmd+=' --author="'+name+'"';

    var lines = sh.exec(cmd).stdout.trim().split('\n');

    // drop the first line, it's you
    var out = lines.slice(1, lines.length).map(function(i) {
      return i.trim(); // and trim the indents
    })

    return out; // give you an array of short commit strings
  }
}
