export interface DemoRequestEmailData {
  name: string
  email: string
  company: string
  orgSize: string
  message?: string
}

export function getDemoRequestEmailHtml(data: DemoRequestEmailData): string {
  const { name, email, company, orgSize, message } = data
  const formattedMessage = message ? message.replace(/\n/g, '<br>') : 'لا توجد متطلبات إضافية مدخلة.'

  return `
  <!DOCTYPE html>
  <html dir="rtl" lang="ar">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>طلب عرض تجريبي جديد - معيار</title>
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        background-color: #FAF9F6;
        color: #2C2C2C;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #FFFFFF;
        border-radius: 24px;
        border: 1px solid #EAE6DF;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(45, 125, 90, 0.04);
      }
      .header {
        background-color: #2D7D5A;
        padding: 32px;
        text-align: center;
        border-bottom: 4px solid #D4A574;
      }
      .header h1 {
        color: #FFFFFF;
        margin: 0;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: -0.5px;
      }
      .header p {
        color: #EAF5F0;
        margin: 8px 0 0 0;
        font-size: 14px;
        font-weight: 400;
      }
      .content {
        padding: 40px;
      }
      .lead-text {
        font-size: 16px;
        line-height: 1.6;
        color: #4A4A4A;
        margin-bottom: 30px;
        text-align: right;
      }
      .data-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin-bottom: 30px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #F0ECE6;
      }
      .data-table th, .data-table td {
        padding: 16px;
        text-align: right;
        border-bottom: 1px solid #F0ECE6;
      }
      .data-table th {
        background-color: #FAF9F6;
        color: #2D7D5A;
        font-weight: 700;
        width: 35%;
        font-size: 13px;
      }
      .data-table td {
        background-color: #FFFFFF;
        color: #2C2C2C;
        font-size: 14px;
      }
      .data-table tr:last-child th, .data-table tr:last-child td {
        border-bottom: none;
      }
      .message-box {
        background-color: #FAF9F6;
        border-right: 4px solid #D4A574;
        padding: 20px;
        border-radius: 8px;
        margin-top: 10px;
        font-size: 14px;
        line-height: 1.6;
        color: #3E3E3E;
      }
      .footer {
        background-color: #FAF9F6;
        padding: 24px;
        text-align: center;
        border-top: 1px solid #EAE6DF;
        font-size: 12px;
        color: #8B8B8B;
      }
      .footer a {
        color: #2D7D5A;
        text-decoration: none;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <div class="container" dir="rtl" style="text-align: right; direction: rtl;">
      <div class="header">
        <h1 style="direction: rtl; text-align: center;">منصة معيار الإستراتيجية</h1>
        <p style="direction: rtl; text-align: center;">إشعار بطلب عرض تجريبي مخصص جديد</p>
      </div>
      
      <div class="content" style="text-align: right; direction: rtl;">
        <p class="lead-text" style="text-align: right; direction: rtl; font-size: 15px; line-height: 1.8; color: #4A4A4A; margin-bottom: 30px;">
          لقد تم استلام طلب عرض تجريبي مخصص جديد عبر النموذج الرئيسي للموقع الإلكتروني للمنصة. وفيما يلي تفاصيل الطلب الواردة:
        </p>
        
        <table class="data-table" dir="rtl" style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 30px; border-radius: 12px; overflow: hidden; border: 1px solid #F0ECE6; text-align: right; direction: rtl;">
          <tr>
            <th style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FAF9F6; color: #2D7D5A; font-weight: 700; width: 35%; font-size: 13px;">الاسم الكامل</th>
            <td style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FFFFFF; color: #2C2C2C; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <th style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FAF9F6; color: #2D7D5A; font-weight: 700; width: 35%; font-size: 13px;">البريد الإلكتروني</th>
            <td style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FFFFFF; color: #2C2C2C; font-size: 14px;"><a href="mailto:${email}" style="color: #2D7D5A; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <th style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FAF9F6; color: #2D7D5A; font-weight: 700; width: 35%; font-size: 13px;">الجهة / الشركة</th>
            <td style="text-align: right; direction: rtl; padding: 16px; border-bottom: 1px solid #F0ECE6; background-color: #FFFFFF; color: #2C2C2C; font-size: 14px;">${company}</td>
          </tr>
          <tr>
            <th style="text-align: right; direction: rtl; padding: 16px; border-bottom: none; background-color: #FAF9F6; color: #2D7D5A; font-weight: 700; width: 35%; font-size: 13px;">حجم الجهة</th>
            <td style="text-align: right; direction: rtl; padding: 16px; border-bottom: none; background-color: #FFFFFF; color: #2C2C2C; font-size: 14px;">${orgSize}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; text-align: right; direction: rtl;">
          <span style="font-size: 13px; font-weight: 700; color: #2D7D5A; display: block; margin-bottom: 8px; text-align: right; direction: rtl;">متطلبات إضافية لمشروعكم:</span>
          <div class="message-box" style="text-align: right; direction: rtl; background-color: #FAF9F6; border-right: 4px solid #D4A574; padding: 20px; border-radius: 8px; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #3E3E3E;">
            ${formattedMessage}
          </div>
        </div>
      </div>
      
      <div class="footer" style="text-align: center; direction: rtl;">
        <p style="direction: rtl; text-align: center;">هذا البريد تم إرساله تلقائياً من نظام إدارة الطلبات لمنصة <a href="https://meyar.app" style="color: #2D7D5A; text-decoration: none; font-weight: 600;">معيار</a>.</p>
      </div>
    </div>
  </body>
  </html>
  `
}
