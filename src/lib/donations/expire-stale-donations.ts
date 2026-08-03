import { prisma } from "@/lib/prisma";

const STALE_AFTER_HOURS = 24 * 7; // 1 week

export async function expireStaleDonations(): Promise<{ expiredCount: number }> {
  const cutoff = new Date(Date.now() - STALE_AFTER_HOURS * 60 * 60 * 1000);

  const result = await prisma.donation.updateMany({
    where: { status: "PENDING", createdAt: { lt: cutoff } },
    data: { status: "EXPIRED" },
  });

  return { expiredCount: result.count };
}