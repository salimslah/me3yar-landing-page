'use client'

import React, { useState } from 'react'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  tagline: string
  description: string
  priceMonthly: string
  priceYearly: string
  features: PricingFeature[]
  ctaText: string
  ctaHref: string
  isPopular: boolean
  colorTheme: {
    badgeBg: string
    badgeText: string
    borderHover: string
    buttonBg: string
    buttonText: string
    glowBlob: string
  }
}

const tiers: PricingTier[] = [
  {
    name: 'الأساسية',
    tagline: 'للتنظيم الشخصي والفرق الناشئة',
    description: 'ابدأ بصياغة إستراتيجيتك الأولى وتحديد أهدافك الأساسية بوضوح وسهولة.',
    priceMonthly: 'اتصل بنا',
    priceYearly: 'اتصل بنا',
    features: [
      { text: 'مساحة عمل إستراتيجية وبطاقة أداء متوازن (BSC)', included: true },
      { text: 'إدارة الأهداف ومؤشرات القياس الأساسية (KPIs)', included: true },
      { text: 'تتبع المبادرات والمشاريع التشغيلية', included: true },
      { text: 'لوحة قيادة تنفيذية موحدة', included: true },
      { text: 'دعم استطلاعات الرضا الأساسية', included: true },
      { text: 'لوحة إدارة مخاطر متكاملة وسجل المخاطر', included: false },
      { text: 'مصمم تقارير مخصص وتصدير احترافي (PDF/Excel)', included: false },
      { text: 'إدارة الاجتماعات والمراجعات الدورية', included: false }
    ],
    ctaText: 'تواصل معنا',
    ctaHref: '#',
    isPopular: false,
    colorTheme: {
      badgeBg: 'bg-muted/50',
      badgeText: 'text-muted-foreground',
      borderHover: 'hover:border-primary/30',
      buttonBg: 'bg-white hover:bg-muted/30 border border-border/80 text-foreground',
      buttonText: 'text-foreground',
      glowBlob: 'bg-primary/5'
    }
  },
  {
    name: 'الاحترافية',
    tagline: 'للمؤسسات والفرق الإستراتيجية النشطة',
    description: 'أفضل الباقات لإدارة الأداء والمبادرات والمخاطر بشكل متكامل ومترابط.',
    priceMonthly: 'اتصل بنا',
    priceYearly: 'اتصل بنا',
    features: [
      { text: 'مساحات عمل وبطاقات BSC غير محدودة', included: true },
      { text: 'أهداف، مؤشرات، ومبادرات تشغيلية لا محدودة', included: true },
      { text: 'لوحة إدارة مخاطر متقدمة ورادار المخاطر', included: true },
      { text: 'محرك استطلاعات وتدقيق رضا أصحاب المصلحة', included: true },
      { text: 'مصمم تقارير مخصص وتصدير احترافي (PDF/Excel)', included: true },
      { text: 'إدارة الاجتماعات الاستراتيجية والمراجعات الدورية', included: true },
      { text: 'دعم فني ذو أولوية على مدار الساعة', included: true }
    ],
    ctaText: 'تواصل معنا',
    ctaHref: '#',
    isPopular: true,
    colorTheme: {
      badgeBg: 'bg-primary/10',
      badgeText: 'text-primary',
      borderHover: 'border-primary/45 shadow-primary/5',
      buttonBg: 'bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/20',
      buttonText: 'text-white',
      glowBlob: 'bg-secondary/15'
    }
  },
  {
    name: 'المؤسسات',
    tagline: 'حلول مخصصة ذات متطلبات خاصة',
    description: 'بيئة عمل متكاملة مخصصة بالكامل لتلبية معايير الحوكمة والأمان العالي.',
    priceMonthly: 'اتصل بنا',
    priceYearly: 'اتصل بنا',
    features: [
      { text: 'بيئة سحابية مخصصة أو استضافة داخلية (On-Premise)', included: true },
      { text: 'ربط وتكامل مع الأنظمة الداخلية للمنظمة (SSO)', included: true },
      { text: 'سجل مخاطر متقدم ونماذج مخصصة بالكامل', included: true },
      { text: 'اتفاقيات مستوى الخدمة (SLAs) وضمان الأداء', included: true },
      { text: 'مدير حساب مخصص وتدريب ميداني للفرق والقيادات', included: true },
      { text: 'أعلى معايير التشفير والامتثال الأمني', included: true }
    ],
    ctaText: 'تواصل مع المبيعات',
    ctaHref: '#',
    isPopular: false,
    colorTheme: {
      badgeBg: 'bg-accent/10',
      badgeText: 'text-accent',
      borderHover: 'hover:border-accent/30',
      buttonBg: 'bg-white hover:bg-muted/30 border border-border/80 text-foreground',
      buttonText: 'text-foreground',
      glowBlob: 'bg-accent/5'
    }
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="w-full py-28 px-6 sm:px-8 bg-[#FAF9F6] relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center space-y-6">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider shadow-sm">
            باقات الاشتراك
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            استثمار بسيط لقيمة إستراتيجية مستدامة
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            اختر الباقة المناسبة لحجم مؤسستك وابدأ بتنفيذ رؤيتك بتميز اليوم.
          </p>

          {/* Sliding Capsule Toggle */}
          <div className="flex items-center justify-center pt-6">
            <div className="relative bg-muted/60 border border-border/60 p-1 rounded-full flex items-center justify-between w-64 h-12 shadow-inner">
              {/* Sliding Background Pill */}
              <div
                className={`absolute top-1 bottom-1 w-[124px] bg-white rounded-full shadow-sm transition-all duration-300 ease-out ${
                  isYearly ? 'translate-x-0 left-1' : 'translate-x-0 right-1'
                }`}
              ></div>

              <button
                onClick={() => setIsYearly(false)}
                className={`flex-1 text-center text-sm font-bold relative z-10 transition-colors duration-200 ${
                  !isYearly ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                شهرياً
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`flex-1 text-center text-sm font-bold relative z-10 transition-colors duration-200 flex items-center justify-center gap-1.5 ${
                  isYearly ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <span>سنوياً</span>
                <span className="text-[9px] font-black text-white bg-secondary px-1.5 py-0.5 rounded-full">
                  وفر ٢٠٪
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => {
            const hasPrice = tier.priceMonthly !== 'اتصل بنا'
            const currentPrice = isYearly ? tier.priceYearly : tier.priceMonthly

            return (
              <div
                key={index}
                className={`group rounded-3xl bg-white border border-border/50 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
                  tier.isPopular ? 'border-primary/40 ring-1 ring-primary/20 shadow-lg scale-105 z-10' : 'hover:border-primary/20'
                }`}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none transition-opacity duration-300 ${tier.colorTheme.glowBlob}`}></div>

                <div>
                  {/* Popular tag placeholder (to keep card heights perfectly aligned) */}
                  <div className="h-6 mb-4 flex items-center justify-start">
                    {tier.isPopular ? (
                      <span className="text-[10px] font-black text-white bg-primary px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                        الأكثر شيوعاً
                      </span>
                    ) : (
                      <span className="opacity-0 select-none text-[10px] py-1.5">الباقة</span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl font-black text-foreground mb-2">{tier.name}</h3>

                  {/* Tagline Pill */}
                  <div className="mb-4">
                    <span className={`inline-block text-[10px] font-bold px-3 py-1.5 rounded-md ${tier.colorTheme.badgeBg} ${tier.colorTheme.badgeText}`}>
                      {tier.tagline}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed font-light mb-8 min-h-[40px]">
                    {tier.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mb-8 border-b border-border/40 pb-8">
                    {hasPrice ? (
                      <div className="flex items-baseline gap-1.5 justify-start">
                        <span className="text-5xl font-black text-foreground tracking-tight transition-all duration-300">
                          {currentPrice}
                        </span>
                        <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-md select-none leading-none" style={{ fontFamily: "'Saudi Riyal Font', sans-serif" }}>
                          {"\u20C1"}
                        </span>
                        <span className="text-xs text-muted-foreground font-bold mr-1">
                          / {isYearly ? 'سنوياً' : 'شهرياً'}
                        </span>
                      </div>
                    ) : (
                      <div className="text-4xl font-black text-foreground">
                        {tier.priceMonthly}
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex gap-3 items-start text-sm text-muted-foreground">
                        {/* Custom Modern Checked / Cross Bullet */}
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 mt-0.5 border border-emerald-100/50">
                            <svg className="w-3 h-3" stroke="#10b981" strokeWidth={3} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 text-red-500 mt-0.5 border border-red-100/50 opacity-60">
                            <svg className="w-2.5 h-2.5" stroke="#ef4444" strokeWidth={3} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                        )}
                        <span className={`leading-tight font-normal ${feature.included ? 'text-foreground/90' : 'text-muted-foreground/60 line-through decoration-muted-foreground/30'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <div className="mt-auto pt-6">
                  <a
                    href={tier.ctaHref}
                    className={`block w-full text-center py-4 rounded-2xl font-bold transition-all active:scale-[0.98] duration-200 ${tier.colorTheme.buttonBg}`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
