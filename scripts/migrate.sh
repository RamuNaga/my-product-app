#!/bin/sh

set -e

echo "Waiting for Postgres..."
bash ./wait-for-it.sh db:5432 --timeout=60 --strict

echo "Postgres ready!"

echo "Running USER migrations"
pnpm exec prisma migrate deploy \
  --config=./prisma/user/prisma.config.ts

echo "Running COMPANY migrations"
pnpm exec prisma migrate deploy \
  --config=./prisma/company/prisma.config.ts

echo "Running COMPANY LOCATION migrations"
pnpm exec prisma migrate deploy \
  --config=./prisma/company-location/prisma.config.ts

echo "Running PRODUCT migrations"
pnpm exec prisma migrate deploy \
  --config=./prisma/product/prisma.config.ts

echo "Running WORKORDER migrations"
pnpm exec prisma migrate deploy \
  --config=./prisma/workorder/prisma.config.ts

echo "All migrations completed!"