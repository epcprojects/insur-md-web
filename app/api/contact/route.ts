import { newContactMessageTemplate } from "@/app/lib/emailTemplates/newContactMessageTemplate";
import sgMail from "@sendgrid/mail";

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
    const sendToBoth = Boolean(body.sendToBoth);

    const errors: Record<string, string> = {};

    if (!firstName) errors.firstName = "First name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!isValidEmail(email)) errors.email = "Email is invalid.";

    if (Object.keys(errors).length > 0) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    const {
      SENDGRID_API_KEY,
      CONTACT_TO_EMAIL,
      SECONDARY_CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      return Response.json(
        { ok: false, error: "Email server is not configured." },
        { status: 500 },
      );
    }
    sgMail.setApiKey(SENDGRID_API_KEY);

    const recipients =
      sendToBoth && SECONDARY_CONTACT_TO_EMAIL
        ? [CONTACT_TO_EMAIL, SECONDARY_CONTACT_TO_EMAIL]
        : [CONTACT_TO_EMAIL];

    const subject = `New contact form message from ${firstName}`;

    const text = [
      `First Name: ${firstName}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Reason: ${reason || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    const html = newContactMessageTemplate({
      recipientName: firstName,
      email,
      message,
      reason,
      phone,
    });

    await sgMail.send({
      from: CONTACT_FROM_EMAIL,
      to: recipients,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 },
    );
  }
}
