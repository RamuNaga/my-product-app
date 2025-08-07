-- AlterTable
ALTER TABLE "CompanyLocation" ALTER COLUMN "companyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "companyId" DROP NOT NULL;
