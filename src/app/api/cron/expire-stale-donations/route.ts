import { NextRequest, NextResponse } from "next/server";
import { expireStaleDonations } from "@/lib/donations/expire-stale-donations";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await expireStaleDonations();

  return NextResponse.json(result);
}