/*
  Warnings:

  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pronoun` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Pronoun" AS ENUM ('sheHer', 'heHim', 'theyThem');

-- CreateEnum
CREATE TYPE "Age" AS ENUM ('underSixteen', 'sixteenPlus', 'eighteenPlus', 'twentyonePlus');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" "Age" NOT NULL,
ADD COLUMN     "pronoun" "Pronoun" NOT NULL;
