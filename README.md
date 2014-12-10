dotclock
---

per-project work timer using git and the cli

creates, manages, and maintains files in a directory ".clock" in any directory in which you wish to manage time.

your identity is maintained by whatever output is gained from querying the current user (e.g. process.env.USER)

## Install

install with `npm -g install dotclock`

dotclock provides an executable `dotclock`

running `dotclock` by itself is a shortcut for `dotclock status`

## Commands

`dotclock status`: display current state (clocked in or not, for how long, etc)

`dotclock in`: clock in

`dotclock out`: clock out

`dotclock report [html|csv|json]`: generate a report. optionally provide a format

## Gitignore

You may want to add .clock to your global gitignore. e.g.:

```
echo ".clock" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```
