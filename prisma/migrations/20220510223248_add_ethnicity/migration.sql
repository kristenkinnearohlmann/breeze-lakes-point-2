/*
  Warnings:

  - Added the required column `ethnicity` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('Asian', 'Black', 'HispanicLatino', 'NativeIndigenous', 'White', 'NotSpecified', 'NotApplicable');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ethnicity" "Ethnicity" NOT NULL;
