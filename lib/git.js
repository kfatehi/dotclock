var exec = require('child_process').exec;
var moment = require('moment')

var Promise = require('bluebird')

var name = null;

module.exports = {
  shortlog: function(opts) {
    return new Promise(function(resolve, reject) {
      var args = ["shortlog"]
      if (opts.email) args.push("--email");
      if (opts.since) {
        args.push('--since');
        args.push('"'+moment(opts.since).format()+'"');
      }
      if (opts.until) {
        args.push('--until');
        args.push('"'+moment(opts.until).format()+'"');
      }
      return new Promise(function(resolve, reject) {
        if (name) return resolve(name);
        exec('git config --global user.name', function(err, sout, serr) {
          if (err) return reject(err);
          return resolve(sout.trim());
        });
      }).then(function(name) {
        args.push('--author="'+name+'"');
      }).then(function() {
        return new Promise(function(resolve, reject) {
          args.push(['< /dev/tty']);
          var cmd = ['git'].concat(args).join(' ');
          exec(cmd, { cwd: process.cwd() }, function(err, sout, serr) {
            if (err) return reject(err);
            return resolve(sout.trim().split('\n'));
          });
        });
      }).then(function(lines) {
        // drop the first line, it's your name
        return lines.slice(1, lines.length).map(function(i) {
          return i.trim(); // and trim the indents
        })
      }).then(function(commits) {
        resolve(commits); // give you an array of short commit strings
      });
    });
  }
}
