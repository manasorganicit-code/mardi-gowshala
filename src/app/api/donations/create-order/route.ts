import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { donationFormSchema } from "@/lib/validations/donation-form";
import { createOneTimeOrder } from "@/lib/donations/create-one-time-order";
import { createRecurringSubscription } from "@/lib/donations/create-recurring-subscription";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = donationFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: z.treeifyError(parsed.error) },
        { status: 400 }
      );
    }

    const result =
      parsed.data.type === "RECURRING"
        ? await createRecurringSubscription(parsed.data)
        : await createOneTimeOrder(parsed.data);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error creating donation:", error);
    return NextResponse.json({ error: "Failed to create donation" }, { status: 500 });
  }
}