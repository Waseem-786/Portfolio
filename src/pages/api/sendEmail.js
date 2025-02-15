import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Verify environment variables exist
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
    console.error("Missing environment variables");
    return res.status(500).json({ message: "Server configuration error" });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD, // Use App Password here
      },
    });

    // Send email
    await transporter.sendMail({
        from: email,
        to: "engrwaseemshahzad134@gmail.com", // Your email address
      subject: `Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
