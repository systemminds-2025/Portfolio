import { NextRequest, NextResponse } from "next/server";

const ZEPTOMAIL_AUTH_HEADER =
  "Zoho-enczapikey PHtE6r0IQOrvjGN88EJTsaS6FpT1ZootrONmfwNH5YtCWPYATU1Vrtsrkz/mr0h8APgTHPObyIJv47rNtL+CdjnkPWpKDWqyqK3sx/VYSPOZsbq6x00atVobd0fVVIHoc9Fs1CTWuNjTNA==";

export async function POST(req: NextRequest) {
  try {
    const { name, number, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email content for admin
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FE4300; border-bottom: 2px solid #FE4300; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${number}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
        </div>

        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #FE4300; border-radius: 5px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #999; font-size: 12px;">This email was sent from your portfolio contact form at SystemMindz</p>
      </div>
    `;

    // Thank you email content for user
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FE4300; margin-bottom: 20px;">Thank You for Reaching Out! 🎉</h2>
        
        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
          Hi <strong>${name}</strong>,
        </p>

        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
          Thank you for getting in touch with me! I really appreciate you taking the time to send me a message through my portfolio.
        </p>

        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
          I've received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.
        </p>

        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #FE4300; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Your Message Details:</strong></p>
          <p style="margin: 5px 0; color: #666;">Phone: ${number}</p>
        </div>

        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
          In the meantime, feel free to check out my work and explore the services I offer. If you have any urgent matters, you can also reach out to me on my social media profiles.
        </p>

        <div style="text-align: center; margin: 30px 0; padding: 20px 0; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd;">
          <p style="margin: 0 0 15px 0; font-weight: bold; color: #333;">Connect with me on:</p>
          <div style="display: flex; justify-content: center; gap: 20px;">
            <a href="https://www.instagram.com/sharan._09/" style="text-decoration: none; display: inline-block;">
              <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" style="height: 40px; border-radius: 5px;">
            </a>
            <a href="https://www.facebook.com/p/Sharan-M-Neeli-100013746105869/" style="text-decoration: none; display: inline-block;">
              <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" style="height: 40px; border-radius: 5px;">
            </a>
            <a href="https://www.linkedin.com/in/sharanm09/" style="text-decoration: none; display: inline-block;">
              <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="height: 40px; border-radius: 5px;">
            </a>
          </div>
        </div>

        <p style="font-size: 16px; line-height: 1.6; margin: 15px 0;">
          Best regards,<br/>
          <strong style="color: #FE4300;">Sharan M Neeli</strong><br/>
          Full Stack Developer<br/>
          <a href="https://systemmindz.com" style="color: #FE4300; text-decoration: none;">SystemMindz</a>
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #999; font-size: 12px; text-align: center;">© 2026 Sharan M Neeli. All rights reserved.</p>
      </div>
    `;

    // Send email to admin
    const adminResponse = await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": ZEPTOMAIL_AUTH_HEADER,
      },
      body: JSON.stringify({
        from: {
          address: "noreply@systemmindz.com",
          name: name,
        },
        to: [
          {
            email_address: {
              address: "sharanmneeli09@gmail.com",
              name: "Sharan M Neeli",
            },
          },
        ],
        reply_to: {
          address: email,
          name: name,
        },
        subject: `New Message from ${name} - Portfolio Contact`,
        htmlbody: adminEmailContent,
      }),
    });

    const adminData = await adminResponse.json();

    if (!adminResponse.ok) {
      console.error("Zeptomail admin email error:", adminData);
      return NextResponse.json(
        { error: "Failed to send email to admin", details: adminData },
        { status: adminResponse.status }
      );
    }

    // Send thank you email to user
    const userResponse = await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": ZEPTOMAIL_AUTH_HEADER,
      },
      body: JSON.stringify({
        from: {
          address: "noreply@systemmindz.com",
          name: "Sharan M Neeli",
        },
        to: [
          {
            email_address: {
              address: email,
              name: name,
            },
          },
        ],
        subject: "Thank You for Reaching Out! - SystemMindz",
        htmlbody: userEmailContent,
      }),
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error("Zeptomail user email error:", userData);
      return NextResponse.json(
        { error: "Failed to send thank you email", details: userData },
        { status: userResponse.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
