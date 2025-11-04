import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message, primary_interest } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your SMTP host
      port: 465,
      secure: true,
      auth: {
        user: "info@gmail.com",
        pass: "password", // remove spaces and quotes issue
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${'info@gmail.com'}>`,
      to: "info@evalonqa.com", // where you want to receive messages
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
