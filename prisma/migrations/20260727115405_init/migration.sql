-- CreateEnum
CREATE TYPE "DonationPurpose" AS ENUM ('GENERAL', 'FEED', 'SPECIAL_OCCASION', 'MEMORIAL', 'MAINTENANCE', 'OTHER');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('ONE_TIME', 'RECURRING');

-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "MandateFrequency" AS ENUM ('MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "MandateStatus" AS ENUM ('ACTIVE', 'PAUSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ContactSubject" AS ENUM ('GENERAL_QUERY', 'VISIT', 'GHEE_ORDER', 'RECEIPT_REQUEST', 'OTHER');

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "donorName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "amount" DECIMAL(10,2) NOT NULL,
    "purpose" "DonationPurpose" NOT NULL DEFAULT 'GENERAL',
    "type" "DonationType" NOT NULL DEFAULT 'ONE_TIME',
    "status" "DonationStatus" NOT NULL DEFAULT 'PENDING',
    "message" VARCHAR(300),
    "razorpayOrderId" TEXT,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "mandateId" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecurringMandate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "razorpaySubscriptionId" TEXT NOT NULL,
    "donorName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "frequency" "MandateFrequency" NOT NULL,
    "status" "MandateStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "RecurringMandate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactRequest" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" "ContactSubject" NOT NULL,
    "address" TEXT,
    "gheeQuantity" INTEGER,
    "message" TEXT NOT NULL,

    CONSTRAINT "ContactRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Donation_razorpayOrderId_key" ON "Donation"("razorpayOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_razorpayPaymentId_key" ON "Donation"("razorpayPaymentId");

-- CreateIndex
CREATE INDEX "Donation_email_idx" ON "Donation"("email");

-- CreateIndex
CREATE INDEX "Donation_status_idx" ON "Donation"("status");

-- CreateIndex
CREATE INDEX "Donation_mandateId_idx" ON "Donation"("mandateId");

-- CreateIndex
CREATE UNIQUE INDEX "RecurringMandate_razorpaySubscriptionId_key" ON "RecurringMandate"("razorpaySubscriptionId");

-- CreateIndex
CREATE INDEX "RecurringMandate_email_idx" ON "RecurringMandate"("email");

-- CreateIndex
CREATE INDEX "RecurringMandate_status_idx" ON "RecurringMandate"("status");

-- CreateIndex
CREATE INDEX "ContactRequest_subject_idx" ON "ContactRequest"("subject");

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_mandateId_fkey" FOREIGN KEY ("mandateId") REFERENCES "RecurringMandate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
