-- AlterTable
ALTER TABLE "RecurringMandate" ADD COLUMN     "purpose" "DonationPurpose" NOT NULL DEFAULT 'GENERAL',
ALTER COLUMN "status" SET DEFAULT 'PENDING';
