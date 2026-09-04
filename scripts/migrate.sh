#!/bin/sh

set -e

echo "Waiting for Postgres..."

bash ./wait-for-it.sh db:5432 --timeout=60 --strict

echo "Postgres ready!"

echo "Running USER migrations"
DATABASE_URL_USER="$DATABASE_URL_USER" \
  pnpm exec prisma migrate deploy \
  --config=./prisma/user/prisma.config.ts

echo "Running COMPANY migrations"
DATABASE_URL_COMPANY="$DATABASE_URL_COMPANY" \
  pnpm exec prisma migrate deploy \
  --config=./prisma/company/prisma.config.ts

echo "Running COMPANY LOCATION migrations"
DATABASE_URL_COMPANY_LOCATION="$DATABASE_URL_COMPANY_LOCATION" \
  pnpm exec prisma migrate deploy \
  --config=./prisma/company-location/prisma.config.ts

echo "Running PRODUCT migrations"
DATABASE_URL_PRODUCT="$DATABASE_URL_PRODUCT" \
  pnpm exec prisma migrate deploy \
  --config=./prisma/product/prisma.config.ts

echo "Running WORKORDER migrations"
DATABASE_URL_WORKORDER="$DATABASE_URL_WORKORDER" \
  pnpm exec prisma migrate deploy \
  --config=./prisma/workorder/prisma.config.ts

echo "All migrations completed!"