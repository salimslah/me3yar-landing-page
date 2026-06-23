'use client'

import React from 'react'

interface Feature {
  tag: string
  title: string
  description: string
  linkText: string
  linkHref: string
  bgClass: string
  tagBgClass: string
  tagTextClass: string
  linkColorClass: string
  graphic: React.ReactNode
}

const features: Feature[] = [
  {
    tag: 'بطاقة الأداء المتوازن (BSC)',
    title: 'ترجمة إستراتيجيتك إلى مؤشرات أداء دقيقة',
    description: 'حوّل رؤيتك وأهدافك الكبرى إلى أهداف تشغيلية موزعة على مناظير الأربعة لضمان التوازن والتركيز المستمر.',
    linkText: 'تصفح بطاقات الأداء',
    linkHref: '#',
    bgClass: 'bg-[#FCF7F0]/90 hover:bg-[#FCF7F0]', // soft peach/sand gold
    tagBgClass: 'bg-white border border-[#E8DFD3]',
    tagTextClass: 'text-[#8B6F47]',
    linkColorClass: 'text-[#8B6F47] hover:text-[#2D7D5A]',
    graphic: (
      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B6F47" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g transform="translate(100, 100) rotate(45)">
          <rect x="-65" y="-65" width="50" height="50" rx="16" fill="url(#gold-grad)" />
          <rect x="15" y="-65" width="50" height="50" rx="16" fill="url(#gold-grad)" />
          <rect x="-65" y="15" width="50" height="50" rx="16" fill="url(#gold-grad)" />
          <rect x="15" y="15" width="50" height="50" rx="16" fill="url(#gold-grad)" />
          {/* Inner details for premium look */}
          <circle cx="-40" cy="-40" r="6" fill="#D4A574" opacity="0.3" />
          <circle cx="40" cy="-40" r="6" fill="#D4A574" opacity="0.3" />
          <circle cx="-40" cy="40" r="6" fill="#D4A574" opacity="0.3" />
          <circle cx="40" cy="40" r="6" fill="#D4A574" opacity="0.3" />
        </g>
      </svg>
    )
  },
  {
    tag: 'مساحة العمل الإستراتيجية',
    title: 'ربط المبادرات والمشاريع بالنتائج مباشرة',
    description: 'مساحة موحدة تمكنك من ربط المشاريع والمهام بالأهداف الإستراتيجية للمنظمة لضمان محاذاة جهود فريقك بنسبة 100%.',
    linkText: 'استكشف مساحة العمل',
    linkHref: '#',
    bgClass: 'bg-[#F0F5FA]/90 hover:bg-[#F0F5FA]', // soft ice blue
    tagBgClass: 'bg-white border border-[#D0E0EF]',
    tagTextClass: 'text-[#4A7F9F]',
    linkColorClass: 'text-[#4A7F9F] hover:text-[#2D7D5A]',
    graphic: (
      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <defs>
          <linearGradient id="blue-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7F9F" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9AC1D9" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="blue-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9AC1D9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4A7F9F" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Abstract shapes matching the image's top-right style */}
        <path d="M40 40 C 40 90, 90 90, 90 40 Z" fill="url(#blue-grad-1)" transform="translate(10, 20)" />
        <rect x="110" y="20" width="50" height="50" rx="16" fill="url(#blue-grad-2)" />
        <rect x="40" y="90" width="50" height="50" rx="16" fill="url(#blue-grad-2)" />
        <path d="M110 90 C 160 90, 160 140, 110 140 Z" fill="url(#blue-grad-1)" />
      </svg>
    )
  },
  {
    tag: 'إدارة المخاطر الإستراتيجية',
    title: 'توقع التحديات وبادر بالاستجابة الفعالة',
    description: 'حدد المخاطر المحتملة، وقيّم شدة تأثيرها واحتمالية حدوثها، واربطها ببطاقة الأداء لبناء إستراتيجية مرنة ومحصنة.',
    linkText: 'عرض لوحة المخاطر',
    linkHref: '#',
    bgClass: 'bg-[#FAF4FC]/90 hover:bg-[#FAF4FC]', // soft lavender/purple
    tagBgClass: 'bg-white border border-[#EADDF2]',
    tagTextClass: 'text-[#9C6ADE]',
    linkColorClass: 'text-[#9C6ADE] hover:text-[#2D7D5A]',
    graphic: (
      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <defs>
          <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9C6ADE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D2B5FA" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Curving, overlapping ribbon path inspired by the bottom-left purple graphic */}
        <path d="M30 50 Q 80 50 100 100 T 170 150 Q 120 150 100 100 T 30 50 Z" fill="url(#purple-grad)" />
        <path d="M170 50 Q 120 50 100 100 T 30 150 Q 80 150 100 100 T 170 50 Z" fill="url(#purple-grad)" opacity="0.7" />
      </svg>
    )
  },
  {
    tag: 'مراقبة وتحليلات الأداء',
    title: 'لوحات تحكم فورية لقرارات مدروسة',
    description: 'راقب مؤشرات قياس الأداء الرئيسية (KPIs) ونسب الإنجاز مباشرة، واحصل على تقارير تفصيلية تدعم اتخاذ القرار.',
    linkText: 'استكشف لوحة التحليلات',
    linkHref: '#',
    bgClass: 'bg-[#F2FAF5]/90 hover:bg-[#F2FAF5]', // soft green matching primary
    tagBgClass: 'bg-white border border-[#D5EFE0]',
    tagTextClass: 'text-[#2D7D5A]',
    linkColorClass: 'text-[#2D7D5A] hover:text-[#8B6F47]',
    graphic: (
      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
        <defs>
          <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D7D5A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A3E2C3" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g transform="translate(100, 100) rotate(15)">
          <rect x="-40" y="-80" width="60" height="60" rx="20" fill="url(#green-grad)" />
          <rect x="-20" y="-20" width="60" height="60" rx="20" fill="url(#green-grad)" />
          <rect x="-60" y="20" width="60" height="60" rx="20" fill="url(#green-grad)" />
        </g>
      </svg>
    )
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 px-6 sm:px-8 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            ضاعف كفاءة سير عملك
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            جميع الأدوات لإدارة الإستراتيجية والأداء والمبادرات في لوحة قيادة متكاملة.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={process.env.NEXT_PUBLIC_APP_URL || '#'}
              className={`group block relative ${feature.bgClass} rounded-3xl border border-border/60 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[340px] text-right`}
            >
              {/* Graphic container (absolute positioned on the left/start side to prevent overlapping with RTL text) */}
              <div className="absolute bottom-0 left-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2">
                {feature.graphic}
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-6 max-w-[75%] sm:max-w-[70%]">
                {/* Tag */}
                <div>
                  <span className={`inline-block text-xs font-bold ${feature.tagBgClass} ${feature.tagTextClass} px-3 py-1.5 rounded-full shadow-sm`}>
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Link at bottom */}
              <div className="relative z-10 pt-6 mt-auto">
                <div
                  className={`inline-flex items-center gap-1.5 text-sm font-bold ${feature.linkColorClass} transition-colors group/link`}
                >
                  <span>{feature.linkText}</span>
                  <span className="inline-block transition-transform group-hover/link:-translate-x-1 duration-200">
                    ←
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

