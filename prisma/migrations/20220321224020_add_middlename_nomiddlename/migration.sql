-- AlterTable
ALTER TABLE "User" ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "noMiddleName" BOOLEAN NOT NULL DEFAULT false;
