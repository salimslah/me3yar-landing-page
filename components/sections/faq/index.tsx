'use client'

import React, { useState } from 'react'
import { faqsData } from './faq-data'
import { FaqItem } from './faq-item'

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
          {faqsData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
