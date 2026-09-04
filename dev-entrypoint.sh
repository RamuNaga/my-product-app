#!/bin/sh
set -e

# ---------------------------
# dev-entrypoint.sh
# ---------------------------

# The service name must be passed as an environment variable
if [ -z "$SERVICE" ]; then
  echo "Error: SERVICE environment variable is not set."
  exit 1
fi

# Wait for Postgres to be ready
echo "Waiting for Postgres..."
./wait-for-it.sh db:5432 --timeout=60 --strict
echo "Postgres is ready!"

# Enable corepack & pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Build service including protos
echo "Building $SERVICE..."
pnpm nx run $SERVICE:build

# Start the service
echo "Starting $SERVICE..."
case $SERVICE in
  api-gateway)
    pnpm nx serve api-gateway --host 0.0.0.0 --port 3000
    ;;
  bff)
    pnpm nx serve bff --host 0.0.0.0 --port 3002
    ;;
  backend-product-service)
    pnpm nx serve backend-product-service --host 0.0.0.0 --port 3001
    ;;
  user-grpc)
    pnpm nx serve user-grpc --host 0.0.0.0 --port 3003
    ;;
  company-grpc)
    pnpm nx serve company-grpc --host 0.0.0.0 --port 3004
    ;;
  company-location-grpc)
    pnpm nx serve company-location-grpc --host 0.0.0.0 --port 3005
    ;;
  workorder-service)
    pnpm nx serve workorder-service --host 0.0.0.0 --port 3006
    ;;
  *)
    echo "Unknown SERVICE: $SERVICE"
    exit 1
    ;;
esac