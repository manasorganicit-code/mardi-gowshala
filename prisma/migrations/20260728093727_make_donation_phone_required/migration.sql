/*
  Warnings:

  - Made the column `phone` on table `ContactRequest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Donation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `RecurringMandate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContactRequest" ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Donation" ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "RecurringMandate" ALTER COLUMN "phone" SET NOT NULL;
