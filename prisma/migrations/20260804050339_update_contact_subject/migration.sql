/*
  Warnings:

  - The values [GENERAL_QUERY,VISIT,GHEE_ORDER,RECEIPT_REQUEST] on the enum `ContactSubject` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `address` on the `ContactRequest` table. All the data in the column will be lost.
  - You are about to drop the column `gheeQuantity` on the `ContactRequest` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContactSubject_new" AS ENUM ('GENERAL_INQUIRY', 'CALLBACK_REQUEST', 'GHEE_PURCHASE', 'GOSHALA_VISIT', 'DONATION_RELATED', 'OTHER');
ALTER TABLE "ContactRequest" ALTER COLUMN "subject" TYPE "ContactSubject_new" USING ("subject"::text::"ContactSubject_new");
ALTER TYPE "ContactSubject" RENAME TO "ContactSubject_old";
ALTER TYPE "ContactSubject_new" RENAME TO "ContactSubject";
DROP TYPE "public"."ContactSubject_old";
COMMIT;

-- AlterTable
ALTER TABLE "ContactRequest" DROP COLUMN "address",
DROP COLUMN "gheeQuantity";
