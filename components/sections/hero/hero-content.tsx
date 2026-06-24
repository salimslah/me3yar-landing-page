'use client'

import React from 'react'
import { Building2, Activity, Target, Globe } from 'lucide-react'

export function HeroContent() {
  return (
    <div className="order-first lg:order-last space-y-8 text-right">
      <div className="space-y-6">
        <div>
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider shadow-sm">
            منصة إدارة وتنفيذ الإستراتيجية المتكاملة
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight tracking-tight">
          إستراتيجية واضحة، <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            تنفيذ متميز
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
          توقف عن بعثرة أهدافك في ملفات الإكسل التقليدية. منصة معيار تمنحك مساحة عمل متكاملة لتتبع خططك، مؤشرات الأداء (KPIs)، وإدارة المخاطر في لوحة تحكم فورية واحدة.
        </p>

        {/* Powered by Badge */}
        <div className="pt-2">
          <a href="https://www.growth-side.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-border/80 rounded-full shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
            <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">بإدارة وتطوير</span>
            <div className="w-px h-6 bg-border"></div>
            <img src="https://www.growth-side.co/logos/growth-side-brand.svg" alt="Growth Side" className="h-6 opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Premium CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-start">
        <a 
          href={process.env.NEXT_PUBLIC_APP_URL || '#'} 
          className="px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/95 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>ابدأ مجاناً الآن</span>
          <span>←</span>
        </a>
        <a 
          href={process.env.NEXT_PUBLIC_APP_URL || '#'} 
          className="px-8 py-4 bg-white hover:bg-muted/30 border border-border/80 text-foreground font-bold rounded-2xl transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>شاهد العرض التجريبي</span>
        </a>
      </div>

      {/* Trusted indicators */}
      <div className="pt-8 border-t border-border/40 flex items-center gap-4 justify-start">
        {/* Overlapping Avatar Stack */}
        <div className="flex -space-x-3 rtl:space-x-reverse shrink-0">
          <div className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md select-none transform hover:scale-105 transition-transform duration-200">
            <Building2 className="w-4.5 h-4.5" />
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md select-none transform hover:scale-105 transition-transform duration-200">
            <Activity className="w-4.5 h-4.5" />
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md select-none transform hover:scale-105 transition-transform duration-200">
            <Target className="w-4.5 h-4.5" />
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-purple-500 to-violet-600 text-white flex items-center justify-center shadow-md select-none transform hover:scale-105 transition-transform duration-200">
            <Globe className="w-4.5 h-4.5" />
          </div>
        </div>
        <p className="text-xs font-bold text-muted-foreground leading-relaxed">
          تثق بنا نخبة من الهيئات والشركات الوطنية
        </p>
      </div>
    </div>
  )
}
