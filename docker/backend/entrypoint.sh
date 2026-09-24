#!/usr/bin/env bash
set -e

# Wait for Postgres to be ready
./wait-for-it.sh db:5432 --timeout=60 --strict

# Run the original command
exec "$@"