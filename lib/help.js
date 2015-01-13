module.exports = [
  "`dotclock status`: display current state (clocked in or not, for how long, etc)",
  "`dotclock in`: clock in",
  "`dotclock note`: add a note to the current session",
  "`dotclock out`: clock out",
  "`dotclock export`: print session details.",
  "`dotclock export --git`: print all sessions without granular commits (see --granular) but then print all commits made since the start of the first session until the end of the last session",
  "`dotclock export --git --granular`: print all sessions and include all commits made during the timespan of each session"
].join('\n');
