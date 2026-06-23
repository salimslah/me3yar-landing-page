import React from 'react'
import Link from 'next/link'
import { ShieldCheck, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'سياسة الخصوصية | معيار',
  description: 'سياسة الخصوصية وحماية البيانات لمنصة معيار لإدارة الأداء والإستراتيجية.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] py-28 px-6 sm:px-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-right">
        {/* Navigation Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          <span>العودة للرئيسية</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12 pb-8 border-b border-border">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-black text-foreground">سياسة الخصوصية</h1>
          <p className="text-muted-foreground text-sm">تاريخ آخر تحديث: يونيو ٢٠٢٦</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-foreground leading-relaxed text-base font-light">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">١. مقدمة عامة</h2>
            <p>
              نحن في <strong>منصة معيار</strong> نلتزم بأعلى درجات حماية البيانات والخصوصية لجميع مستخدمينا وجهات العمل المستفيدة. توضح هذه السياسة كيفية جمع البيانات، استخدامها، وحمايتها، بما يتماشى مع الأنظمة والتشريعات الصادرة عن الهيئة الوطنية للأمن السيبراني وهيئة الاتصالات والفضاء والتقنية في المملكة العربية السعودية.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٢. البيانات التي نجمعها</h2>
            <p>
              نقوم بجمع البيانات اللازمة لتقديم الخدمة وتحسين الأداء الإستراتيجي لجهاتكم، ويشمل ذلك:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pr-4 text-sm text-muted-foreground">
              <li>المعلومات الشخصية الأساسية: مثل الاسم، المسمى الوظيفي، والبريد الإلكتروني المهني.</li>
              <li>بيانات الجهة والمؤسسة: مثل اسم الجهة، حجم الفريق، والأهداف الإستراتيجية المدخلة لتشغيل المنصة.</li>
              <li>بيانات الاستخدام الفني: مثل عنوان الـ IP ونوع الجهاز وملفات تعريف الارتباط لتحسين تجربة التصفح.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٣. استضافة وتأمين البيانات</h2>
            <p>
              تتم استضافة كافة بيانات نظام "معيار" ونسخها الاحتياطية في <strong>خوادم سحابية محلية بالكامل داخل المملكة العربية السعودية</strong>. نعتمد تشفيرًا متطورًا للبيانات أثناء النقل والراحة لحماية معلوماتكم من أي وصول غير مصرح به.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٤. مشاركة البيانات مع أطراف ثالثة</h2>
            <p>
              لا نقوم ببيع أو تأجير أو مشاركة أي من بياناتكم مع جهات تجارية خارجية. تتم مشاركة البيانات فقط مع مزودي الخدمات المعتمدين والموثوقين الذين يساهمون في تشغيل المنصة تحت اتفاقيات سرية صارمة ومتوافقة مع الحوكمة المحلية.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٥. حقوق المستخدمين</h2>
            <p>
              تتمتع جهاتكم ومستخدموكم بحق الوصول إلى البيانات الخاصة بكم، أو تعديلها، أو طلب حذفها في أي وقت من خلال التواصل مع الدعم الفني المخصص لديكم.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٦. التواصل والدعم</h2>
            <p>
              لأي استفسار بخصوص سياسة الخصوصية أو إدارة وحماية البيانات، يرجى التواصل معنا عبر البريد الإلكتروني:
            </p>
            <a 
              href="mailto:support@meyar.app" 
              className="inline-block text-primary font-bold hover:underline"
            >
              support@meyar.app
            </a>
          </section>

        </div>
      </div>
    </main>
  )
}
