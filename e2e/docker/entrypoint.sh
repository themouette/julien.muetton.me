#!/usr/bin/env bash

# Entrypoint script for the container running e2e tests.

set -o errexit
set -o pipefail
set -o nounset

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

function main {
  npm run test:e2e-internal -- "$@"
}

main "$@"
