-- AlterEnum
ALTER TYPE "DonationStatus" ADD VALUE 'EXPIRED';

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "ipAddress" TEXT;
