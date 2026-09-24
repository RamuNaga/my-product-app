-- CreateEnum
CREATE TYPE "public"."CompanyType" AS ENUM ('MANUFACTURER', 'CLIENT', 'SUPPLIER');

-- CreateTable
CREATE TABLE "public"."Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."CompanyType" NOT NULL DEFAULT 'MANUFACTURER',
    "contact" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "public"."Company"("name");
