import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1. Data receive kar rahay hain frontend se
    const { name, email, subject, message, primary_interest } = await req.json();

    // 2. Transporter setup (Zoho Credentials ke sath)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Port ko number banana zaroori hai
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Website Contact" <info@evalonqa.com>',

      to: "info@evalonqa.com",

      replyTo: email,

      subject: `Consultation Form: ${subject}`,
      html: `
        <h3>New Consultation Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Primary Interest:</b> ${primary_interest}</p>
        <p><b>Message:</b><br>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}