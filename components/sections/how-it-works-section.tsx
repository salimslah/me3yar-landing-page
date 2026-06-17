'use client'

import React, { useState } from 'react'

interface Step {
  number: string
  label: string
  title: string
  description: string
  visual: React.ReactNode
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps: Step[] = [
    {
      number: '٠١',
      label: 'الخطوة الأولى',
      title: 'ربط بيانات مؤسستك وتكامل الأنظمة',
      description: 'اربط منصة معيار بأدواتك اليومية (Slack، Notion، Excel، أو قواعد البيانات) أو ارفع ملفاتك مباشرة لبناء قاعدة بيانات إستراتيجية موحدة في دقائق.',
      visual: (
        <div className="w-full h-full flex items-center justify-center p-8 animate-fadeIn">
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            {/* Central hub */}
            <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-xl z-10 border border-primary/20">
              <span className="text-white font-extrabold text-lg">معيار</span>
            </div>
            {/* Orbital Rings */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-border/60 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-primary/20 animate-[spin_25s_linear_infinite_reverse]"></div>

            {/* Orbiting integrations */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-foreground">Excel</span>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-[#4A154B]">Slack</span>
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-foreground">Notion</span>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-primary">API</span>
            </div>

            {/* Data flow dots */}
            <div className="absolute w-2 h-2 rounded-full bg-secondary animate-ping top-12 left-1/4"></div>
            <div className="absolute w-2 h-2 rounded-full bg-primary animate-ping bottom-12 right-1/4"></div>
          </div>
        </div>
      )
    },
    {
      number: '٠٢',
      label: 'الخطوة الثانية',
      title: 'صياغة الأهداف وبناء بطاقات الأداء',
      description: 'حدد مؤشرات قياس الأداء الرئيسية (KPIs)، واربط الأهداف الإستراتيجية بالمبادرات التشغيلية ووزع المسؤوليات على فريقك بوضوح تام.',
      visual: (
        <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-border p-5 space-y-4 shadow-lg relative overflow-hidden max-w-[340px] mx-auto w-full">
            {/* Header decor */}
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">بطاقة الأداء المتوازن</span>
              <span className="text-xs text-muted-foreground font-semibold">Q3 2026</span>
            </div>
            {/* Balanced Scorecard Target */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs text-muted-foreground font-semibold">المنظور المالي</span>
                <span className="text-sm font-bold text-foreground">٨٥٪</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs text-muted-foreground font-semibold">منظور العملاء</span>
                <span className="text-sm font-bold text-foreground">٩٢٪</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-xs text-muted-foreground font-semibold">العمليات الداخلية</span>
                <span className="text-sm font-bold text-foreground">٧٨٪</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '٠٣',
      label: 'الخطوة الثالثة',
      title: 'المتابعة المباشرة وإدارة المخاطر',
      description: 'احصل على لوحات قياس وتقارير أداء فورية حية، تتبع مستويات التقدم والإنذارات المبكرة للمخاطر لتعديل مسار خطتك بمرونة.',
      visual: (
        <div className="w-full h-full flex items-center justify-center p-6 sm:p-8 animate-fadeIn">
          <div className="bg-white rounded-2xl border border-border p-6 shadow-lg space-y-4 max-w-[340px] w-full relative">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground font-semibold">نسبة تحقيق الإستراتيجية</span>
                <h4 className="text-2xl font-black text-foreground">٩٤.٢٪</h4>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">+٢.٤٪</span>
            </div>

            {/* Sparkline chart */}
            <div className="h-24 w-full pt-4 flex items-end gap-1.5">
              <div className="bg-primary/20 h-[30%] w-full rounded-md"></div>
              <div className="bg-primary/30 h-[45%] w-full rounded-md"></div>
              <div className="bg-primary/40 h-[40%] w-full rounded-md"></div>
              <div className="bg-primary/60 h-[65%] w-full rounded-md"></div>
              <div className="bg-primary/80 h-[80%] w-full rounded-md"></div>
              <div className="bg-primary h-full w-full rounded-md relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="w-full py-28 px-6 sm:px-8 bg-[#FAF9F6] border-y border-border/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 text-center space-y-4">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider">
            دورة الأداء الذكي
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            ثلاث خطوات للوضوح الإستراتيجي
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            من دمج الأنظمة وتكامل البيانات إلى التنفيذ الفعلي والمتابعة الحية لأهداف مؤسستك.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Timeline / Steps Control (Right side in RTL) */}
          <div className="lg:col-span-7 order-first lg:order-last space-y-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group relative text-right cursor-pointer p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-primary/30 shadow-xl'
                      : 'bg-transparent border-transparent hover:bg-white/40 hover:border-border'
                  }`}
                >
                  <div className="flex gap-6 items-start">
                    {/* Step number / Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-muted/80 text-muted-foreground group-hover:bg-muted group-hover:text-foreground'
                        }`}
                      >
                        {step.number}
                      </div>
                      {/* Connection line between nodes */}
                      {index < steps.length - 1 && (
                        <div
                          className={`w-0.5 h-16 my-2 border-l border-dashed transition-colors duration-300 ${
                            isActive ? 'border-primary/40' : 'border-border'
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Step details */}
                    <div className="flex-1 space-y-2 pt-1">
                      <span className={`text-xs font-bold transition-colors ${isActive ? 'text-secondary' : 'text-muted-foreground'}`}>
                        {step.label}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dynamic Interactive Visual Panel (Left side in RTL) */}
          <div className="lg:col-span-5 relative order-last lg:order-first h-[380px] sm:h-[420px] rounded-3xl bg-gradient-to-br from-white to-[#F6F4F0] border border-border/80 shadow-inner flex items-center justify-center overflow-hidden">
            {/* Subtle card grid background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2D7D5A_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Render the visual corresponding to active step */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {steps[activeStep].visual}
            </div>

            {/* Corner accent glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

