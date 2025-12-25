#!/usr/bin/env bash
set -e

# Kill all child processes on exit (Ctrl+C)
trap "kill 0" SIGINT SIGTERM EXIT

usage() {
  echo "Usage: ./script.sh {dev|build|start}"
  exit 1
}

if [ $# -eq 0 ]; then
  usage
fi

COMMAND=$1

case "$COMMAND" in
  dev)
    echo "Starting development servers..."

    (
      cd loud-landing-page/loud
      pnpm install
      pnpm run dev
    ) &

    (
      cd loud-backend
      pnpm install
      pnpm run dev
    ) &

    wait
    ;;

  build)
    echo "🏗️ Building projects..."

    (
      cd loud-landing-page/loud
      pnpm install
      pnpm run build
    )

    (
      cd loud-backend
      pnpm install
      pnpm run build
    )
    ;;

  start)
    echo "▶️ Starting production servers..."

    (
      cd loud-landing-page/loud
      pnpm run start
    ) &

    (
      cd loud-backend
      pnpm run start
    ) &

    wait
    ;;

  *)
    usage
    ;;
esac
