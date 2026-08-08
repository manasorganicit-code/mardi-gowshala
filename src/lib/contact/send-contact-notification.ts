import { Resend } from "resend";
import type { ContactRequest } from "@/generated/prisma/client";
import { getContactRecipient } from "@/lib/contact/email-routing";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactNotification(request: ContactRequest) {
  try {
    await resend.emails.send({
      from: "Mardi Gowshala Website <notifications@goshala.mardi.co.in>",
      to: getContactRecipient(request.subject),
      replyTo: request.email,
      subject: `New Contact Request: ${request.subject.replaceAll("_", " ")}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Request</h2>
          <p><strong>Subject:</strong> ${escapeHtml(request.subject.replaceAll("_", " "))}</p>
          <p><strong>Name:</strong> ${escapeHtml(request.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(request.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(request.phone)}</p>
          <p><strong>Message:</strong><br />${escapeHtml(request.message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
  }
}