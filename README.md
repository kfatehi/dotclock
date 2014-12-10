dotclock
---

command-line oriented multi-project work timer for one or more people 

creates, manages, and maintains time entries in json files (your username being the filename) in a special subdirectory `.clock` in any directory in which you `dotclock in`

your identity is maintained by whatever output is gained from querying the current user (e.g. process.env.USER)

## Install

install globally with `npm -g install dotclock`

dotclock provides an executable `dotclock`

running `dotclock` by itself is a shortcut for `dotclock status`

## Commands

`dotclock status`: display current state (clocked in or not, for how long, etc)

`dotclock in`: clock in

`dotclock out`: clock out

`dotclock export`: generate a report

## Gitignore

You may want to add .clock to your global gitignore. e.g.:

```
echo ".clock" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
