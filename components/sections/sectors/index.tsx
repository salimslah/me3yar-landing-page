'use client'

import React from 'react'
import { sectorsData } from './sectors-data'
import { SectorCard } from './sector-card'

export function SectorsSection() {
  return (
    <section className="py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-border/40">
      {/* Subtle background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-full tracking-wider">
            منصتك، لقطاعك
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            مرونة استثنائية تناسب <span className="bg-gradient-to-l from-primary to-emerald-500 bg-clip-text text-transparent">جميع القطاعات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            لا نؤمن بالحلول المعلبة. منصة معيار صُممت بهندسة مرنة تتكيف مع تعقيدات القطاع الحكومي وديناميكية الشركات الخاصة.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px]">
          {sectorsData.map((item) => (
            <SectorCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
