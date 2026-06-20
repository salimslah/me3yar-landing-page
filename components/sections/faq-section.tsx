'use client'

import React, { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'ما هي منصة معيار (Meyar) وكيف تعمل؟',
    answer: 'منصة معيار هي منصة سحابية متكاملة لإدارة وتنفيذ الإستراتيجية وبطاقة الأداء المتوازن (BSC). تمكن الجهات الحكومية والشركات من صياغة رؤيتها، وتحديد مؤشرات قياس الأداء الرئيسية (KPIs)، وربطها بالمبادرات والمشاريع التشغيلية لتتبع التنفيذ والتحقق من جودة المخرجات فورت حدوثها.'
  },
  {
    question: 'هل تدعم منصة معيار ربط الأهداف بالأنشطة والمشاريع اليومية؟',
    answer: 'نعم بكل تأكيد. تم تصميم معيار لتجسير الفجوة الكلاسيكية بين التخطيط والتنفيذ. تتيح لك المنصة ربط كل مشروع أو مهمة داخل مساحة العمل الإستراتيجية بأهداف بطاقة الأداء مباشرة، مما يضمن محاذاة جهود كافة الفرق التنفيذية بنسبة 100% لتحقيق الرؤية المشتركة.'
  },
  {
    question: 'كيف تساعد منصة معيار في إدارة وتخفيف المخاطر الإستراتيجية؟',
    answer: 'توفر المنصة نظاماً متطوراً لإدارة المخاطر؛ حيث يمكنك تحديد التحديات والتهديدات المحتملة، وتقييم احتمالية حدوثها وشدة تأثيرها، ثم ربطها بالخطة الإستراتيجية لوضع خطط استجابة استباقية ومستويات إنذار مبكر قبل تأثر مؤشرات القياس.'
  },
  {
    question: 'هل تدعم المنصة إدارة الاستطلاعات ورضا العملاء؟',
    answer: 'نعم، توفر المنصة محرك استطلاعات متكامل يتيح لك تصميم استطلاعات مخصصة، إرسالها لأصحاب المصلحة، وتتبع نتائج رضا العملاء (CSAT) وربطها تلقائياً بالمنظورات الاستراتيجية الخاصة بك.'
  },
  {
    question: 'هل توجد فترة تجريبية مجانية للمنصة؟',
    answer: 'نعم، يمكنك استكشاف كافة إمكانيات معيار والاستفادة من تجربة كاملة المزايا مجاناً لمدة 14 يوماً. التسجيل فوري وبسيط ولا يتطلب إدخال أي تفاصيل لبطاقة الائتمان لتشغيل حسابك التجريبي.'
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-28 px-6 sm:px-8 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background abstract gradient blobs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider shadow-sm">
            الأسئلة الشائعة
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            لديك استفسار؟ نحن هنا للمساعدة
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            إليك الإجابات على الأسئلة الأكثر شيوعاً حول منصة معيار وأدوات التخطيط الإستراتيجي.
          </p>
        </div>

        {/* Accordion FAQ Layout */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-border/50 hover:border-primary/20 shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-right gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Modern Animated Icon Toggle */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white border-primary rotate-180'
                        : 'bg-muted/40 text-muted-foreground border-border/40 group-hover:bg-muted group-hover:text-foreground'
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {isOpen ? (
                        <line x1="5" y1="12" x2="19" y2="12" />
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </>
                      )}
                    </svg>
                  </div>
                </button>

                {/* Accordion Content Panel with Smooth Slide Animation */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-border/20' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="py-6 px-6 sm:px-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
