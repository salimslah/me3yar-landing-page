'use client'

import React from 'react'
import { ContactForm } from './contact-form'
import { TrustBadges } from './trust-badges'

export function CtaSection() {
  return (
    <section id="contact" className="w-full py-20 px-6 sm:px-8 bg-[#FAF9F6] relative overflow-hidden border-t border-border/40">
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-48 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-48 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider shadow-sm">
            ابدأ التميز اليوم
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
            جاهز لبناء وتنفيذ إستراتيجيتك بنجاح؟
          </h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            سجل بياناتك الآن للحصول على عرض تجريبي مخصص لجهتكم ومناقشة متطلبات المواءمة وإدارة الأداء مع فريقنا المختص.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Form Card (Left Side in RTL) */}
          <ContactForm />

          {/* Trust Badges & HQ Details (Right Side in RTL) */}
          <TrustBadges />
        </div>
      </div>
    </section>
  )
}
