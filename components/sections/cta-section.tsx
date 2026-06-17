'use client'

import React from 'react'

export function CtaSection() {
  return (
    <section className="w-full py-28 px-6 sm:px-8 bg-background relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Outer Premium Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1E4D38] via-[#2D7D5A] to-[#1C4632] border border-primary/20 p-12 sm:p-20 text-center space-y-10 shadow-2xl">
          
          {/* Decorative glowing gradient elements inside the card */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#8B6F47]/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Grid pattern overlay inside card */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          {/* Text Content */}
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="inline-block text-[11px] font-black text-secondary bg-white/10 backdrop-blur-md px-4 py-2 rounded-full tracking-wider border border-white/10 uppercase">
              ابدأ التميز اليوم
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              جاهز لبناء وتنفيذ <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-secondary via-[#FFE4B5] to-secondary bg-clip-text text-transparent">
                إستراتيجيتك بنجاح؟
              </span>
            </h2>
            <p className="text-emerald-100/80 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
              انضم إلى المؤسسات الذكية والفرق التنفيذية التي اختارت الوضوح والمحاذاة الشاملة. ابدأ معنا بخطوات بسيطة لتحويل أهدافك إلى نتائج حقيقية وملموسة.
            </p>
          </div>

          {/* Primary Action Button (Moving to subscription/sign up website) */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || '#'}
              className="w-full sm:w-auto px-10 py-4 bg-secondary text-white font-extrabold rounded-2xl hover:bg-secondary/95 hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 text-center shadow-lg cursor-pointer"
            >
              اشترك في المنصة الآن
            </a>
            <a
              href={process.env.NEXT_PUBLIC_APP_URL || '#'}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 active:scale-[0.98] transition-all duration-200 text-center cursor-pointer"
            >
              طلب عرض تجريبي
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-emerald-100/70 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-secondary font-black">✓</span>
              <span>تجربة مجانية لمدة ١٤ يوماً</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-black">✓</span>
              <span>إعداد وتكامل سريع خلال دقائق</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-black">✓</span>
              <span>لا تطلب بطاقة ائتمان للتسجيل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

