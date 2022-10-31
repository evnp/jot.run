#!/usr/bin/env bash
set -euo pipefail

# If you're concerned about this colliding with the classix unix `jot` ,
# worry not -- you can think of this as an extension of the original `jot`.
#
# Jot \ ˈjät \ verb
# : to write briefly or hurriedly : set down in the form of a note
#
# This beautiful verb a diamond in the rough -- it should not be confined
# to the realm of mere digits. Embrace Jot, feel its presence directly under
# your right index finger (J, the most essential of homerow keys), and start
# building your personal knowledge-base with agility, from atoms, in the
# most elemental and focus-enriching of settings -- the shell.
# If you ever desire to invoke the classic `jot` unix command, you can
# utter simply
# $ jot -n 1 2 3  # with the -n / --num arg, all following params
#                 # will pass directly to the original unix `jot`
# and find the beloved number-generator of your youth.
# Note: with modern Jot's aliases, this takes fewer keystrokes than the original:
# $ j <note>      # jot a note down
# $ jn <number>   # generate some numbers with jot-classic
# Enjot!

# Bash Special Chars
# ------------------
# ' - Q  quote
# " - QQ double-quote
# ` - T  tick
# # - H  hash
# $ - D  dollar sign
# & - A  ampersand
# * - S  star
# ( - B  bracket (open)
# ) - B  bracket (close)
# | - P  pipe
# \ - B  backslash
# : - C  colon (not strictly necessary, but nice for parity with semicolon)
# ; - SC semicolon
# < - LT less-than
# < - LC left-caret (alias)
# > - GT greater-than
# > - RC right-caret (alias)

function jot() (
  if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || "${1:-}" == "-help" ]]; then
    echo "The Jot usage manual is coming soon!"
    echo "Sorry Jot doesn't have good documentation quite yet."
    exit 0
  fi

  if [[ "${1:-}" == "-n" || "${1:-}" == "--num" || "${1:-}" == "-num" ]]; then
    shift
    local unix_jot
    [[ -f "/bin/jot" ]] && unix_jot="/bin/jot"
    [[ -f "/usr/bin/jot" ]] && unix_jot="/usr/bin/jot"
    if [[ -n "${unix_jot}" ]]; then
      "${unix_jot}" "$@"
      exit $?
    fi
  fi

  local origdir
  local message="$*"

  # if no JOT file in current directory, nav up until we find one
  origdir="$( pwd )"
  while ! ls ./JOT* 1> /dev/null 2>&1; do
    if [[ "$( pwd )" == "${HOME}" ]]; then
      cd "${origdir}" || exit
      break
    else
      cd ..
    fi
  done

  # remove jot by index:
  if [[ "${message}" =~ ^[0-9]+$ ]]; then
    for file in JOT*; do
      if [[ -f "${file}" ]]; then
        sed -i '' "${message}d" "${file}"
      fi
    done

  # swap jots by index:
  elif [[ "${message}" =~ ^[0-9]+[[:space:]][0-9]+$ ]]; then
    for file in JOT*; do
      if [[ -f "${file}" ]]; then
        local a
        local b
        a="$1"
        b="$2"
        if (( a > b )); then
          local temp
          temp="${a}"
          a="${b}"
          b="${temp}"
        fi
        if (( a != b)); then
          {
              printf '%dm%d\n' "${a}" "${b}"
              printf '%d-m%d-\n' "${b}" "${a}"
              printf '%s\n' w q
          } | ed -s "${file}"
        fi
      fi
    done

  # create jot (if message provided):
  elif [[ -n "${message}" ]]; then
    local jotfile
    for file in JOT*; do
      if [[ -f "${file}" ]]; then
        jotfile="${file}"
        break
      fi
    done
    if ! [[ -f "${jotfile}" ]]; then
      jotfile="JOTS"
    fi
    echo "${message}" >> "${jotfile}"
  fi

  # list jots
  for file in JOTS*; do
    if [[ -f "${file}" ]]; then
      if [[ -s "${file}" ]]; then
        cat -n "${file}"
      else
        echo " All done, time for a 🍺"
      fi
    fi
  done
)

jot "$@"
