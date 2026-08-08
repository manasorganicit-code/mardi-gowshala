import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/validations/contact-form";
import { sendContactNotification } from "@/lib/contact/send-contact-notification";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: z.treeifyError(parsed.error) },
        { status: 400 }
      );
    }

    const contactRequest = await prisma.contactRequest.create({
      data: parsed.data,
    });

    await sendContactNotification(contactRequest);

    return NextResponse.json({ id: contactRequest.id });
  } catch (error) {
    console.error("Error creating contact request:", error);
    return NextResponse.json({ error: "Failed to submit your request" }, { status: 500 });
  }
}