import { newContactMessageTemplate } from "@/app/lib/emailTemplates/newContactMessageTemplate";
import nodemailer from "nodemailer";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = String(body.firstName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();
    const reason = String(body.reason ?? "").trim();

    // Server-side validation
    const errors: Record<string, string> = {};
    if (!firstName) errors.firstName = "First name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!isValidEmail(email)) errors.email = "Email is invalid.";

    if (Object.keys(errors).length > 0) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      return Response.json(
        { ok: false, error: "Email server is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // 465 true, 587 false
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New contact form message from ${firstName}`;
    const text = [
      `First Name: ${firstName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    // const html = `
    //   <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
    //     <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    //     <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    //     <p><strong>Message:</strong><br/>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
    //   </div>
    // `;
    const html = newContactMessageTemplate({
      recipientName: firstName,
      email: email,
      message: message,
      reason: reason,
      phone: phone,
    });

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email, // so you can hit "Reply" directly to the user
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 },
    );
  }
}

// tiny HTML escape helper (avoid injection in email HTML)
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
