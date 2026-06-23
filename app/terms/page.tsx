import React from 'react'
import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'الشروط والأحكام | معيار',
  description: 'الشروط والأحكام الخاصة باستخدام منصة معيار لإدارة الأداء والإستراتيجية.',
}

export default function TermsPage() {
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
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-black text-foreground">الشروط والأحكام</h1>
          <p className="text-muted-foreground text-sm">تاريخ آخر تحديث: يونيو ٢٠٢٦</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-foreground leading-relaxed text-base font-light">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">١. قبول الشروط</h2>
            <p>
              يعد استخدامكم لـ <strong>منصة معيار</strong> (سواء عبر التجربة المجانية أو الباقات المدفوعة) إقراراً وتعهداً بالالتزام بهذه الشروط والأحكام. إذا كنت تستخدم المنصة نيابة عن جهة حكومية أو شركة، فإنك تقر بامتلاك الصلاحيات اللازمة لربط تلك الجهة بهذه الشروط.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٢. رخصة الاستخدام والملكية الفكرية</h2>
            <p>
              نمنح جهاتكم رخصة غير حصريّة وقابلة للإلغاء لاستخدام المنصة وفقاً لباقة الاشتراك المعتمدة. تظل جميع حقوق الملكية الفكرية، التصاميم، الأكواد البرمجية، وبنية النظام ملكية خاصة وحصرية لمنصة معيار ومطوريها، ولا يحق للعميل محاولة هندسة النظام عكسياً أو اقتباسه.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٣. حسابات المستخدمين والمسؤولية</h2>
            <p>
              يتحمل المشرف المعين من قبل جهتكم مسؤولية الحفاظ على سرية معلومات حساب الدخول وإدارة الصلاحيات الممنوحة للموظفين التابعين له. كما يجب استخدام المنصة في الأغراض الإستراتيجية والتشغيلية القانونية والمصرح بها فقط.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٤. توفر الخدمة ومستوى الدعم</h2>
            <p>
              نسعى لضمان توفر المنصة بنسبة تشغيل عالية مستقرة، ونحتفظ بالحق في إجراء أعمال الصيانة والتحديثات الدورية المجدولة والتي سيتم إبلاغ جهتكم بها مسبقاً لضمان عدم تأثر سير العمل الإستراتيجي.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٥. الإنهاء وإلغاء الاشتراك</h2>
            <p>
              يحق للعميل إلغاء اشتراكه وفقاً لشروط التعاقد المبرمة. في حال انتهاء الاشتراك، نلتزم بتسليمكم كامل البيانات الإستراتيجية والتشغيلية الخاصة بجهتكم بصيغ معيارية قابلة للتصدير مع ضمان إتلافها بالكامل من خوادمنا بعد التأكيد لضمان الخصوصية.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">٦. التعديلات القانونية</h2>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط والأحكام متى دعت الحاجة لضمان التوافق مع الأنظمة الحكومية في المملكة العربية السعودية. سيتم إخطاركم بأي تغييرات جوهرية تطرأ على هذه الوثيقة.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
