-- CreateEnum
CREATE TYPE "UnitOfMeasure" AS ENUM ('G', 'KG', 'ML', 'L', 'EACH');

-- CreateEnum
CREATE TYPE "ItemKind" AS ENUM ('RAW_MATERIAL', 'PURCHASED_PREPARED', 'MANUFACTURED_COMPONENT', 'SAUCE', 'GARNISH', 'PACKAGING', 'OTHER');

-- CreateEnum
CREATE TYPE "SupplyType" AS ENUM ('PURCHASED', 'MANUFACTURED', 'BOTH');

-- CreateEnum
CREATE TYPE "ProcessType" AS ENUM ('NONE', 'OVEN', 'STEAM', 'SAUCE_PREPARATION', 'MIXING', 'OTHER');

-- CreateEnum
CREATE TYPE "RecipeStatus" AS ENUM ('DRAFT', 'APPROVED', 'RETIRED');

-- CreateEnum
CREATE TYPE "RecipePurpose" AS ENUM ('FINISHED_FOOD', 'INTERMEDIATE');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "netWeightG" DECIMAL(18,3);

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "ProductIngredient";

-- DropTable
DROP TABLE "Sauce";

-- DropTable
DROP TABLE "SauceIngredient";

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "kind" "ItemKind" NOT NULL,
    "supplyType" "SupplyType" NOT NULL DEFAULT 'PURCHASED',
    "processType" "ProcessType" NOT NULL DEFAULT 'NONE',
    "baseUnit" "UnitOfMeasure" NOT NULL,
    "allergenDeclaration" TEXT,
    "origin" TEXT,
    "manufacturer" TEXT,
    "defaultSupplierId" INTEGER,
    "packSizeDescription" TEXT,
    "netContentDescription" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCodeSequence" (
    "prefix" TEXT NOT NULL,
    "nextNumber" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCodeSequence_pkey" PRIMARY KEY ("prefix")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "purpose" "RecipePurpose" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeRevision" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "revision" INTEGER NOT NULL,
    "status" "RecipeStatus" NOT NULL DEFAULT 'DRAFT',
    "referenceQuantity" DECIMAL(18,6) NOT NULL,
    "referenceUnit" "UnitOfMeasure" NOT NULL,
    "outputItemId" INTEGER,
    "processType" "ProcessType" NOT NULL DEFAULT 'NONE',
    "effectiveFrom" TIMESTAMP(3),
    "effectiveTo" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "approvedById" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecipeRevision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeLine" (
    "id" SERIAL NOT NULL,
    "recipeRevisionId" INTEGER NOT NULL,
    "lineNumber" INTEGER NOT NULL,
    "componentItemId" INTEGER NOT NULL,
    "quantity" DECIMAL(18,6) NOT NULL,
    "unit" "UnitOfMeasure" NOT NULL,
    "processLossPercent" DECIMAL(7,4),
    "notes" TEXT,

    CONSTRAINT "RecipeLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecipeAssignment" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "recipeRevisionId" INTEGER NOT NULL,
    "portionQuantity" DECIMAL(18,6) NOT NULL,
    "portionUnit" "UnitOfMeasure" NOT NULL DEFAULT 'G',
    "effectiveFrom" TIMESTAMP(3) NOT NULL,
    "effectiveTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductRecipeAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPackagingLine" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" DECIMAL(18,6) NOT NULL,
    "unit" "UnitOfMeasure" NOT NULL DEFAULT 'EACH',
    "effectiveFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "effectiveTo" TIMESTAMP(3),

    CONSTRAINT "ProductPackagingLine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_code_key" ON "Item"("code");

-- CreateIndex
CREATE INDEX "Item_kind_isActive_idx" ON "Item"("kind", "isActive");

-- CreateIndex
CREATE INDEX "Item_supplyType_idx" ON "Item"("supplyType");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_code_key" ON "Recipe"("code");

-- CreateIndex
CREATE INDEX "RecipeRevision_outputItemId_status_idx" ON "RecipeRevision"("outputItemId", "status");

-- CreateIndex
CREATE INDEX "RecipeRevision_status_effectiveFrom_idx" ON "RecipeRevision"("status", "effectiveFrom");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeRevision_recipeId_revision_key" ON "RecipeRevision"("recipeId", "revision");

-- CreateIndex
CREATE INDEX "RecipeLine_componentItemId_idx" ON "RecipeLine"("componentItemId");

-- CreateIndex
CREATE UNIQUE INDEX "RecipeLine_recipeRevisionId_lineNumber_key" ON "RecipeLine"("recipeRevisionId", "lineNumber");

-- CreateIndex
CREATE INDEX "ProductRecipeAssignment_productId_effectiveFrom_idx" ON "ProductRecipeAssignment"("productId", "effectiveFrom");

-- CreateIndex
CREATE UNIQUE INDEX "ProductRecipeAssignment_productId_recipeRevisionId_effectiv_key" ON "ProductRecipeAssignment"("productId", "recipeRevisionId", "effectiveFrom");

-- CreateIndex
CREATE INDEX "ProductPackagingLine_productId_effectiveFrom_idx" ON "ProductPackagingLine"("productId", "effectiveFrom");

-- CreateIndex
CREATE INDEX "Product_companyId_idx" ON "Product"("companyId");

-- AddForeignKey
ALTER TABLE "RecipeRevision" ADD CONSTRAINT "RecipeRevision_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeRevision" ADD CONSTRAINT "RecipeRevision_outputItemId_fkey" FOREIGN KEY ("outputItemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeLine" ADD CONSTRAINT "RecipeLine_recipeRevisionId_fkey" FOREIGN KEY ("recipeRevisionId") REFERENCES "RecipeRevision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeLine" ADD CONSTRAINT "RecipeLine_componentItemId_fkey" FOREIGN KEY ("componentItemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecipeAssignment" ADD CONSTRAINT "ProductRecipeAssignment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductRecipeAssignment" ADD CONSTRAINT "ProductRecipeAssignment_recipeRevisionId_fkey" FOREIGN KEY ("recipeRevisionId") REFERENCES "RecipeRevision"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPackagingLine" ADD CONSTRAINT "ProductPackagingLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPackagingLine" ADD CONSTRAINT "ProductPackagingLine_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NutritionalInfo" ADD CONSTRAINT "NutritionalInfo_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
