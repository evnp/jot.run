A minimalist personal knowledge wrangler.

```
     __     __
    /_/__  / /_  _________
   / / _ \/ __/_/ _/ / /  \
__/ /\___/\__/_/_/ \__/_/_/
\__/
                        thought --> jot!

```

[![shellcheck](https://github.com/evnp/jot.run/workflows/shellcheck/badge.svg)](https://github.com/evnp/jot.run/actions)
[![latest release](https://img.shields.io/github/release/evnp/jot.run.svg)](https://github.com/evnp/jot.run/releases/latest)
[![npm package](https://img.shields.io/npm/v/jot.svg)](https://www.npmjs.com/package/jot)
[![license](https://img.shields.io/github/license/evnp/jot.run.svg?color=blue)](https://github.com/evnp/jot.run/blob/master/LICENSE.md)

Documentation for Jot is coming, please check back soon!

If you're itching to try it without much help, start with:
```sh
$ git clone https://github.com/evnp/jot.run.git
$ jot.run/install <directory-in-$PATH-to-install-in>
# eg.
$ jot.run/install ~/bin
```
Jot comes with aliases which make the experience of using it even more
ergonomic -- if you want to try them out, run this instead:
```sh
$ jot.run/install ~/bin <path-to-your-shell-rc-file>
```
This will append these aliases to the bottom of your shell rc file:
```
alias jn="j --num"  # used to invoke the classic unix number-generator `jot`
```
To uninstall Jot, run:
```
$ jot.run/uninstall <same-args-which-were-provided-on-install>
```

License
-------
MIT
