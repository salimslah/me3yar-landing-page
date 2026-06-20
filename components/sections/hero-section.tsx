'use client'

import React from 'react'
import { Building2, Activity, Target, Globe } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full pt-40 pb-32 px-6 sm:px-8 bg-[#FAF9F6] overflow-hidden">
      {/* SaaS Gradient Glow Blobs */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl animate-[pulse_8s_infinite]"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-[pulse_10s_infinite_1s]"></div>
      <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#2C2C2C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right side - Modern dashboard mockup with floating widgets */}
          <div className="order-last lg:order-first relative">
            
            {/* Floating Widget 1 (Top Left in RTL) */}
            <div className="absolute -top-6 -left-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl border border-border/80 p-4 shadow-xl flex items-center gap-3 animate-[bounce_5s_infinite_ease-in-out]">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                ↑
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground font-bold leading-none">معدل الإنجاز</p>
                <p className="text-sm font-black text-foreground mt-1">+١٢.٤٪ هذا الشهر</p>
              </div>
            </div>

            {/* Floating Widget 2 (Bottom Right in RTL) */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white/90 backdrop-blur-md rounded-2xl border border-border/80 p-4 shadow-xl flex items-center gap-3 animate-[bounce_6s_infinite_ease-in-out_1s]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-bold">
                ⚠
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground font-bold leading-none">إدارة المخاطر</p>
                <p className="text-sm font-black text-foreground mt-1">لا توجد مخاطر حرجة</p>
              </div>
            </div>

            {/* Main Mockup Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-border/60 shadow-2xl overflow-hidden group hover:shadow-primary/5 hover:border-primary/25 transition-all duration-500">
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>

              <div className="p-8 sm:p-10 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/40 pb-5">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-primary tracking-widest bg-primary/10 px-2.5 py-1 rounded-md inline-block">
                      لوحة التحكم الحية
                    </p>
                    <h3 className="text-2xl font-black text-foreground tracking-tight">بطاقة الأداء الإستراتيجي</h3>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                </div>

                {/* Main metric with modern design */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-muted-foreground">معدل تنفيذ الإستراتيجية العام</span>
                      <span className="text-4xl font-black text-primary">٨٧.٥٪</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute inset-y-0 right-0 bg-gradient-to-l from-primary to-primary/80 rounded-full transition-all duration-500 group-hover:from-primary group-hover:to-primary/70" 
                        style={{ width: '87.5%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats grid - modern minimal style */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
                    <div className="space-y-2 p-4 rounded-2xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/40">
                      <p className="text-xs text-muted-foreground font-bold">الأهداف المتوافقة</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-foreground">٢٣</span>
                        <span className="text-sm text-muted-foreground">/ ٢٤</span>
                      </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-2xl hover:bg-muted/40 transition-colors border border-transparent hover:border-border/40">
                      <p className="text-xs text-muted-foreground font-bold">المبادرات قيد الإنجاز</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-primary">١٨</span>
                        <span className="text-xs text-muted-foreground font-semibold">مبادرة نشطة</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini status visual distribution */}
                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground font-bold mb-4">التوزيع العام للمنظورات</p>
                    <div className="flex items-end gap-3 h-16">
                      <div className="flex-1 h-full bg-primary/10 rounded-xl relative overflow-hidden group/bar">
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-primary/70 rounded-xl transition-all duration-300 group-hover/bar:brightness-105" style={{ height: '70%' }}></div>
                      </div>
                      <div className="flex-1 h-full bg-secondary/10 rounded-xl relative overflow-hidden group/bar">
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary to-secondary/70 rounded-xl transition-all duration-300 group-hover/bar:brightness-105" style={{ height: '85%' }}></div>
                      </div>
                      <div className="flex-1 h-full bg-accent/10 rounded-xl relative overflow-hidden group/bar">
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent to-accent/70 rounded-xl transition-all duration-300 group-hover/bar:brightness-105" style={{ height: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left side - Copy and CTAs */}
          <div className="order-first lg:order-last space-y-8 text-right">
            <div class="space-y-6">
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
                <a href="https://www.growth-side.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm border border-border/80 rounded-full shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                  <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">بإدارة وتطوير</span>
                  <div className="w-px h-4 bg-border"></div>
                  <img src="https://www.growth-side.co/logos/growth-side-brand.svg" alt="Growth Side" className="h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
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
        </div>
      </div>
    </section>
  )
}

