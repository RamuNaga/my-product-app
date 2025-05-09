@echo off
echo 🛠️  Running Prisma Client generation...
nx run-many --target=generate --projects=prisma

echo 📦 Building Prisma library...
nx build prisma

echo 🏗️  Building User library...
nx build user

echo ✅ Done!
