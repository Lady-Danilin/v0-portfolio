import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["arguellodanielaayelen@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #0066CC; margin-bottom: 16px;">Nuevo mensaje desde tu portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; width: 100px;">Nombre:</td>
              <td style="padding: 8px 0; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0; color: #555;"><a href="mailto:${email}" style="color: #0066CC;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Asunto:</td>
              <td style="padding: 8px 0; color: #555;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <p style="font-weight: bold; color: #333; margin-bottom: 8px;">Mensaje:</p>
          <p style="color: #555; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 16px 0;" />
          <p style="font-size: 12px; color: #aaa;">Este mensaje fue enviado desde daniarguello.vercel.app</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
