import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic server-side validation
function validate(data: Record<string, string>) {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2)
    errors.push("Name must be at least 2 characters.");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("A valid email is required.");
  if (!data.subject || data.subject.trim().length < 3)
    errors.push("Subject is required.");
  if (!data.message || data.message.trim().length < 10)
    errors.push("Message must be at least 10 characters.");
  return errors;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate
    const errors = validate({ name, email, subject, message });
    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // use this until you add a custom domain
      to: process.env.TO_EMAIL!,
      replyTo: email,                                    // so you can reply directly to sender
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: monospace; max-width: 540px; color: #222;">
          <h2 style="color: #00d4aa; margin-bottom: 4px;">New message from portfolio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 12px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 12px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}