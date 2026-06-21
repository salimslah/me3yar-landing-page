'use client'

import React from 'react'
import { Landmark, GraduationCap, HeartPulse, Building2, Users, Truck } from 'lucide-react'

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
          
          {/* 1. Government (Large block - 2x2) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2D7D5A] via-[#246749] to-[#174430] p-8 sm:p-10 text-white flex flex-col justify-end group shadow-2xl shadow-primary/20 cursor-default border border-primary/30">
            <Landmark className="absolute -left-12 -top-12 w-80 h-80 text-white/5 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-700 ease-out pointer-events-none" />
            <div className="relative z-10 mt-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-inner">
                <Landmark className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-black mb-3">القطاع الحكومي</h3>
              <p className="text-emerald-100/90 text-lg max-w-md leading-relaxed">
                حوكمة متكاملة لتنفيذ المبادرات الوطنية، ومتابعة الأداء المؤسسي للوزارات والهيئات بدقة تامة تتوافق مع رؤية 2030.
              </p>
            </div>
          </div>

          {/* 2. Enterprise (Wide block - 2x1) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#1E2724] to-[#121A17] p-8 text-white flex flex-col justify-center group shadow-xl shadow-emerald-950/20 cursor-default border border-primary/20">
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-100">الشركات الكبرى</h3>
                <p className="text-emerald-100/60 text-base max-w-xs sm:max-w-md">مواءمة إستراتيجية لكافة الإدارات والفروع، وتتبع دقيق للعوائد والمخاطر.</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>

          {/* 3. Health (Square block - 1x1) */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-[2.5rem] bg-[#FDF8F7] border border-[#E9D2CD] hover:border-rose-300 shadow-[0_4px_20px_-4px_rgba(201,91,91,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(201,91,91,0.15)] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-[#FFF2F0] shadow-sm flex items-center justify-center mb-4 text-[#C95B5B] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <HeartPulse className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#3F2B2B]">القطاع الصحي</h3>
          </div>

          {/* 4. Education (Square block - 1x1) */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-[2.5rem] bg-[#F5FAF8] border border-[#CBE2D7] hover:border-emerald-300 shadow-[0_4px_20px_-4px_rgba(45,125,90,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(45,125,90,0.15)] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-[#EAF5F0] shadow-sm flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1B3E2F]">القطاع التعليمي</h3>
          </div>

          {/* 5. HR (Wide block - 2x1) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden rounded-[2.5rem] bg-[#FCFAF5] border border-[#E8DEC8] hover:border-amber-300 shadow-[0_4px_20px_-4px_rgba(212,165,116,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(212,165,116,0.15)] p-8 flex items-center gap-6 group transition-all duration-300 cursor-default">
            <div className="w-20 h-20 rounded-2xl bg-[#F7F3EA] shadow-sm flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#3E3420] mb-2">الموارد البشرية</h3>
              <p className="text-[#6B5E49] text-base leading-relaxed">إدارة أهداف الموظفين وتقييم الأداء بشكل دوري لضمان ارتباطهم برؤية المنظمة.</p>
            </div>
          </div>

          {/* 6. Logistics (Wide block - 2x1) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden rounded-[2.5rem] bg-[#F4F8FA] border border-[#CADCE2] hover:border-sky-300 shadow-[0_4px_20px_-4px_rgba(74,127,159,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(74,127,159,0.15)] p-8 flex items-center gap-6 group transition-all duration-300 cursor-default">
            <div className="w-20 h-20 rounded-2xl bg-[#EAF2F6] shadow-sm flex items-center justify-center text-[#4A7F9F] shrink-0 group-hover:translate-x-reverse group-hover:translate-x-2 transition-transform duration-300">
              <Truck className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#233540] mb-2">الخدمات اللوجستية</h3>
              <p className="text-[#4E6270] text-base leading-relaxed">متابعة دقيقة لمؤشرات التشغيل، سلاسل الإمداد، وتحسين كفاءة العمليات اليومية.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
