#!/usr/bin/env bash

set -eu
set -o pipefail

cd "$(dirname "$0")/.."

command_console() {
  echo '```console'
  echo "$ $*"
  "$@"
  echo '```'
}

commands() {
  for cmd in install generate init update-aqua update-checksum which generate-registry cp list completion exec; do
    echo "
## aqua $cmd

$(command_console aqua help $cmd)"
  done
}

echo "---
sidebar_position: 400
---

# Usage

<!-- This is generated by scripts/generate-usage.sh. Don't edit this file directly. -->

$(command_console aqua help)
$(commands)
"
