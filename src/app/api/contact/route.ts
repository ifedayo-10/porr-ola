import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "PORR OLA Website <onboarding@resend.dev>",
    to: "buero@porr-ola.com",
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #0a1628;">Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        <hr style="margin-top: 24px; border-color: #eee;" />
        <p style="color: #999; font-size: 12px;">Gesendet über porr-ola.com</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
