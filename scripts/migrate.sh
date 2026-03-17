#!/bin/sh
set -e

echo "Waiting for Postgres..."
./wait-for-it.sh db:5432 --timeout=60 --strict

echo "Postgres ready!"

echo "Running USER migrations"
DATABASE_URL=$DATABASE_URL_USER pnpm prisma migrate deploy \
  --schema=libs/backend/user-prisma/prisma/schema.prisma

echo "Running COMPANY migrations"
DATABASE_URL=$DATABASE_URL_COMPANY pnpm prisma migrate deploy \
  --schema=libs/backend/company-prisma/prisma/schema.prisma

echo "Running COMPANY LOCATION migrations"
DATABASE_URL=$DATABASE_URL_COMPANY_LOCATION pnpm prisma migrate deploy \
  --schema=libs/backend/company-location-prisma/prisma/schema.prisma

echo "Running PRODUCT migrations"
DATABASE_URL=$DATABASE_URL_PRODUCT pnpm prisma migrate deploy \
  --schema=libs/backend/product-prisma/prisma/schema.prisma

echo "Running WORKORDER migrations"
DATABASE_URL=$DATABASE_URL_WORKORDER pnpm prisma migrate deploy \
  --schema=libs/backend/workorder-prisma/prisma/schema.prisma

echo "All migrations completed!"