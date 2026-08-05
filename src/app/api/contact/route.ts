import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_EMAIL } from "@/lib/site-config";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, message, company, website } = body;

    // Honeypot: treat as success without sending
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || SITE_EMAIL;
    const from = process.env.SMTP_FROM || SITE_EMAIL;

    if (!host || !user || !pass) {
      console.error("Contact API missing SMTP_HOST, SMTP_USER, or SMTP_PASS");
      return NextResponse.json(
        { error: "Email is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeCompany = company?.trim() || "N/A";
    const safeMessage = message.trim();

    await transporter.sendMail({
      from: `FlowRiver Technologies <${from}>`,
      to,
      replyTo: safeEmail,
      subject: `New contact from ${safeName}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Company: ${safeCompany}`,
        "",
        safeMessage,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Company:</strong> ${escapeHtml(safeCompany)}</p>
        <hr />
        <p>${escapeHtml(safeMessage).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
