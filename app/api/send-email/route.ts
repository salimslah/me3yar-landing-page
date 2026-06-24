import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getDemoRequestEmailHtml } from '@/templates/demo-request-template'

export async function POST(req: Request) {
  try {
    const { name, email, company, orgSize, message } = await req.json()

    // Validate fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'الرجاء إدخال الحقول المطلوبة (الاسم، البريد الإلكتروني، الجهة)' },
        { status: 400 }
      )
    }

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASSWORD
    const receiverEmail = process.env.RECEIVER_EMAIL

    // Log configuration status without leaking credentials
    if (!smtpHost || !smtpUser || !smtpPass || !receiverEmail) {
      console.error('SMTP configuration variables are missing')
      return NextResponse.json(
        { error: 'خطأ في إعدادات خادم البريد. الرجاء المحاولة لاحقاً.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Generate HTML using modular template
    const htmlContent = getDemoRequestEmailHtml({
      name,
      email,
      company,
      orgSize,
      message,
    })

    // Send Mail
    await transporter.sendMail({
      from: `"${name} - منصة معيار" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `طلب عرض تجريبي جديد: ${company}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error sending email via Nodemailer:', error)
    return NextResponse.json(
      { error: 'فشل في إرسال طلبكم حالياً، الرجاء المحاولة مرة أخرى.' },
      { status: 500 }
    )
  }
}
