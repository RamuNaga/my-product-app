/*
  Warnings:

  - You are about to drop the column `productcode` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `WorkOrder` table. All the data in the column will be lost.
  - You are about to drop the column `productWeight` on the `WorkOrder` table. All the data in the column will be lost.
  - You are about to drop the column `updateDate` on the `WorkOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productCode]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[workOrderCode]` on the table `WorkOrder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productCode` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productWeight` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workOrderCode` to the `WorkOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_productcode_key";

-- DropIndex
DROP INDEX "WorkOrder_status_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productcode",
ADD COLUMN     "companyId" INTEGER,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "productCode" TEXT NOT NULL,
ADD COLUMN     "productWeight" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyId" INTEGER;

-- AlterTable
ALTER TABLE "WorkOrder" DROP COLUMN "createdDate",
DROP COLUMN "productWeight",
DROP COLUMN "updateDate",
ADD COLUMN     "companyId" INTEGER,
ADD COLUMN     "workOrderCode" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "address" TEXT,
    "contact" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrder" (
    "id" SERIAL NOT NULL,
    "poNumber" TEXT NOT NULL,
    "workOrderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER,
    "address" TEXT,
    "contact" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "unit" TEXT NOT NULL,
    "netWeight" TEXT,
    "origin" TEXT,
    "usedBy" TIMESTAMP(3),
    "batchCode" TEXT,
    "manufacturer" TEXT,
    "vendor" TEXT,
    "packSize" TEXT,
    "netContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductIngredient" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sauce" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sauce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SauceIngredient" (
    "id" SERIAL NOT NULL,
    "sauceId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SauceIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tray" (
    "id" SERIAL NOT NULL,
    "trayName" TEXT NOT NULL,
    "dimensions" TEXT,
    "weight" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tray_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garnish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weight" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Garnish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "noOfUnits" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionalInfo" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "sugar" DOUBLE PRECISION NOT NULL,
    "fibre" DOUBLE PRECISION NOT NULL,
    "salt" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "NutritionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionPlan" (
    "id" SERIAL NOT NULL,
    "workOrderId" INTEGER NOT NULL,
    "lineNumber" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "hiskRiskLabour" INTEGER NOT NULL,
    "lowRiskLabour" INTEGER NOT NULL,
    "packLabour" INTEGER NOT NULL,
    "targetPerMin" INTEGER NOT NULL,
    "actualProduced" INTEGER,
    "issues" TEXT,

    CONSTRAINT "ProductionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionIssue" (
    "id" SERIAL NOT NULL,
    "planId" INTEGER NOT NULL,
    "issueType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "ProductionIssue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseOrder_poNumber_key" ON "PurchaseOrder"("poNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_code_key" ON "Ingredient"("code");

-- CreateIndex
CREATE UNIQUE INDEX "NutritionalInfo_productId_key" ON "NutritionalInfo"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_productCode_key" ON "Product"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "WorkOrder_workOrderCode_key" ON "WorkOrder"("workOrderCode");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkOrder" ADD CONSTRAINT "WorkOrder_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_workOrderId_fkey" FOREIGN KEY ("workOrderId") REFERENCES "WorkOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrder" ADD CONSTRAINT "PurchaseOrder_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductIngredient" ADD CONSTRAINT "ProductIngredient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductIngredient" ADD CONSTRAINT "ProductIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sauce" ADD CONSTRAINT "Sauce_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SauceIngredient" ADD CONSTRAINT "SauceIngredient_sauceId_fkey" FOREIGN KEY ("sauceId") REFERENCES "Sauce"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SauceIngredient" ADD CONSTRAINT "SauceIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NutritionalInfo" ADD CONSTRAINT "NutritionalInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductionPlan" ADD CONSTRAINT "ProductionPlan_workOrderId_fkey" FOREIGN KEY ("workOrderId") REFERENCES "WorkOrder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductionIssue" ADD CONSTRAINT "ProductionIssue_planId_fkey" FOREIGN KEY ("planId") REFERENCES "ProductionPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
