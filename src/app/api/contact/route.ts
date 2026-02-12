import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------------
    // TODO: Forward the submission to your email service or CRM.
    //
    // Example with Resend:
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "FlowRiver <noreply@flowriver.tech>",
    //     to: ["team@flowriver.tech"],
    //     subject: `New contact from ${name}`,
    //     text: `Name: ${name}\nEmail: ${email}\nCompany: ${body.company ?? "N/A"}\n\n${message}`,
    //   });
    //
    // For now we just log it to the server console.
    // ---------------------------------------------------------------
    console.log("Contact form submission:", { name, email, company: body.company, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
