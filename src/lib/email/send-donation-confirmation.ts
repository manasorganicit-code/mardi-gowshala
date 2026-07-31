import { Resend } from "resend";
import type { Donation } from "@/generated/prisma/client";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendDonationConfirmationEmail(donation: Donation) {
  try {
    await resend.emails.send({
      from: "Mardi Gowshala <donations@goshala.mardi.co.in>",
      to: donation.email,
      subject: "Thank you for your donation",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Thank you, ${escapeHtml(donation.donorName)}</h2>
          <p>We've received your donation of ₹${donation.amount.toString()}.</p>
          <p>Your contribution goes directly toward the feed, medical care,
          and upkeep of our shelter's cows.</p>
          <p>If you require an official receipt, please write to us via our
          contact page with your payment details.</p>
          <p>With gratitude,<br />Mardi Gowshala</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send donation confirmation email:", error);
  }
}