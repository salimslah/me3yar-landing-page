'use client'

import React, { useState } from 'react'
import { stepsData } from './steps-data'
import { StepItem } from './step-item'

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how" className="w-full py-28 px-6 sm:px-8 bg-[#FAF9F6] border-y border-border/40 relative overflow-hidden">
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
            {stepsData.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
                isLast={index === stepsData.length - 1}
              />
            ))}
          </div>

          {/* Dynamic Interactive Visual Panel (Left side in RTL) */}
          <div className="lg:col-span-5 relative order-last lg:order-first h-[380px] sm:h-[420px] rounded-3xl bg-gradient-to-br from-white to-[#F6F4F0] border border-border/80 shadow-inner flex items-center justify-center overflow-hidden">
            {/* Subtle card grid background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2D7D5A_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Render the visual corresponding to active step */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {stepsData[activeStep].visual}
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
