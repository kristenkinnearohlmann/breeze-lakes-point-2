/*
  Warnings:

  - The values [underSixteen,sixteenPlus,eighteenPlus,twentyonePlus] on the enum `Age` will be removed. If these variants are still used in the database, this will fail.
  - The values [sheHer,heHim,theyThem] on the enum `Pronoun` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Age_new" AS ENUM ('UnderSixteen', 'SixteenPlus', 'EighteenPlus', 'TwentyonePlus', 'NotApplicable');
ALTER TABLE "User" ALTER COLUMN "age" TYPE "Age_new" USING ("age"::text::"Age_new");
ALTER TYPE "Age" RENAME TO "Age_old";
ALTER TYPE "Age_new" RENAME TO "Age";
DROP TYPE "Age_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Pronoun_new" AS ENUM ('SheHer', 'HeHim', 'TheyThem', 'NotApplicable');
ALTER TABLE "User" ALTER COLUMN "pronoun" TYPE "Pronoun_new" USING ("pronoun"::text::"Pronoun_new");
ALTER TYPE "Pronoun" RENAME TO "Pronoun_old";
ALTER TYPE "Pronoun_new" RENAME TO "Pronoun";
DROP TYPE "Pronoun_old";
COMMIT;
