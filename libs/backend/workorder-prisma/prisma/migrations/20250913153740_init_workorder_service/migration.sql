-- CreateEnum
CREATE TYPE "public"."WorkOrderStatus" AS ENUM ('REQUESTED', 'PENDING', 'APPROVED', 'REJECTED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "public"."PurchaseOrderStatus" AS ENUM ('PENDING', 'ORDERED', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."IssueType" AS ENUM ('MACHINERY', 'PACKING', 'LABOUR', 'QUALITY', 'OTHER');

-- CreateTable
CREATE TABLE "public"."WorkOrder" (
    "id" SERIAL NOT NULL,
    "workOrderCode" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "clientLocation" TEXT NOT NULL,
    "vendorOrClient" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "status" "public"."WorkOrderStatus" NOT NULL DEFAULT 'REQUESTED',
    "createdById" INTEGER NOT NULL,
    "approvedById" INTEGER,
    "companyId" INTEGER,
    "priority" "public"."Priority" DEFAULT 'MEDIUM',
    "attachments" TEXT[],
    "assignedTo" TEXT,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PurchaseOrder" (
    "id" SERIAL NOT NULL,
    "poNumber" TEXT NOT NULL,
    "workOrderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "status" "public"."PurchaseOrderStatus" NOT NULL DEFAULT 'PENDING',
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductionPlan" (
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
CREATE TABLE "public"."ProductionIssue" (
    "id" SERIAL NOT NULL,
    "planId" INTEGER NOT NULL,
    "issueType" "public"."IssueType" NOT NULL,
    "description" TEXT NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "ProductionIssue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkOrder_workOrderCode_key" ON "public"."WorkOrder"("workOrderCode");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseOrder_poNumber_key" ON "public"."PurchaseOrder"("poNumber");
