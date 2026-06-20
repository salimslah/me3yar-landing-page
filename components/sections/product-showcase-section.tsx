'use client'

import React, { useState } from 'react'

interface ShowcaseTab {
  id: string
  label: string
  title: string
  description: string
  screen: React.ReactNode
}

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState('bsc')
  const [showMore, setShowMore] = useState(false)

  const tabs: ShowcaseTab[] = [
    {
      id: 'bsc',
      label: 'بطاقة الأداء المتوازن',
      title: 'إدارة بطاقات الأداء والمؤشرات (BSC)',
      description: 'راقب مستوى تقدم أهدافك الموزعة عبر المنظورات الأربعة مع نسب إنجاز حية وتحديثات تلقائية لمؤشرات الأداء.',
      screen: (
        <div className="w-full bg-[#1E293B] text-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs font-semibold text-slate-400 select-none">meyar.app/bsc-dashboard</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30 space-y-2">
              <span className="text-xs text-slate-400">المنظور المالي</span>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-white">٩٤٪</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded">مكتمل</span>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30 space-y-2">
              <span className="text-xs text-slate-400">منظور العملاء</span>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-white">٨٧٪</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded">مكتمل</span>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/30 space-y-2">
              <span className="text-xs text-slate-400">التعلم والنمو</span>
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-white">٧٦٪</span>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-950/40 px-1.5 py-0.5 rounded">قيد التقدم</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white">تفاصيل مؤشر الأداء (KPI-201)</h4>
            <div className="h-24 w-full flex items-end gap-2 pt-2">
              <div className="bg-primary h-[40%] w-full rounded-md opacity-40"></div>
              <div className="bg-primary h-[60%] w-full rounded-md opacity-60"></div>
              <div className="bg-primary h-[50%] w-full rounded-md opacity-50"></div>
              <div className="bg-primary h-[80%] w-full rounded-md opacity-80"></div>
              <div className="bg-primary h-full w-full rounded-md relative">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-secondary text-white font-bold px-1.5 py-0.5 rounded">١٠٠٪</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk',
      label: 'سجل وإدارة المخاطر',
      title: 'تحديد وتقييم المخاطر الإستراتيجية',
      description: 'واجهة متكاملة لحصر المخاطر، وتصنيف شدتها واحتمالية حدوثها، مع ربطها مباشرة بالأهداف التنفيذية لضمان الاستجابة السريعة.',
      screen: (
        <div className="w-full bg-[#1E293B] text-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs font-semibold text-slate-400 select-none">meyar.app/risk-registry</span>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/40 flex justify-between items-center gap-4">
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-white">تأخر تكامل البيانات الخارجية</h5>
                <p className="text-xs text-slate-400">القسم المسؤول: إدارة التقنية والتحول الرقمي</p>
              </div>
              <span className="text-xs font-extrabold text-red-400 bg-red-950/60 px-2.5 py-1 rounded-md">خطر مرتفع</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/40 flex justify-between items-center gap-4">
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-white">تجاوز الميزانية المرصودة للمشاريع</h5>
                <p className="text-xs text-slate-400">القسم المسؤول: الإدارة المالية</p>
              </div>
              <span className="text-xs font-extrabold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md">خطر متوسط</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      label: 'التحليلات والتقارير',
      title: 'لوحة تحليلات الأداء الإستراتيجي',
      description: 'لوحات قياس ذكية تزودك بتقارير شاملة ومقترحات مدعومة بالبيانات لتمكين متخذي القرار من اتخاذ خطوات استباقية دقيقة.',
      screen: (
        <div className="w-full bg-[#1E293B] text-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs font-semibold text-slate-400 select-none">meyar.app/analytics</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-white">نسبة تحقيق المبادرات العامة</span>
            <span className="text-xl font-black text-emerald-400">٩١.٣٪</span>
          </div>

          <div className="relative pt-2">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-left">
                <span className="text-xs font-semibold inline-block text-emerald-400">
                  مكتمل بنجاح
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-slate-800">
              <div
                style={{ width: '91.3%' }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="w-full py-28 px-6 sm:px-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-4 py-2 rounded-full tracking-wider shadow-sm">
            نظرة عن قرب
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            استكشف واجهات منصة معيار
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            مساحة عمل متطورة مصممة لملاءمة احتياجات التخطيط والمتابعة الإستراتيجية.
          </p>
        </div>

        {/* Dynamic Interactive Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Tab buttons */}
          <div className="lg:col-span-4 space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-right p-5 rounded-2xl border transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white border-primary/25 shadow-lg shadow-primary/5 text-primary'
                    : 'bg-transparent border-transparent text-muted-foreground hover:bg-white/40 hover:border-border/60 hover:text-foreground'
                }`}
              >
                <h3 className="font-extrabold text-lg leading-snug">{tab.label}</h3>
              </button>
            ))}
          </div>

          {/* Active Tab Screen Panel */}
          <div className="lg:col-span-8">
            <div className="transition-all duration-500 transform hover:scale-[1.01]">
              {tabs.find((t) => t.id === activeTab)?.screen}
            </div>
          </div>
        </div>

        {/* Show More Images Expandable Gallery */}
        <div className="text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3.5 bg-white hover:bg-muted/30 border border-border/80 text-foreground font-bold rounded-2xl transition-all shadow-sm active:scale-[0.98]"
          >
            {showMore ? 'عرض أقل' : 'عرض المزيد من لقطات الشاشة'}
          </button>
        </div>

        {showMore && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-6 animate-fadeIn">
            {/* Gallery Image Mockup 1 */}
            <div className="bg-[#1E293B] text-slate-100 rounded-2xl p-5 border border-slate-700/50 shadow-md space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                <span>الاستطلاعات والآراء</span>
                <span>meyar.app/surveys</span>
              </div>
              <p className="text-xs text-slate-300 font-bold">إدارة استطلاعات رضا أصحاب المصلحة</p>
              <div className="h-20 bg-slate-800/80 rounded-xl flex items-center justify-center text-[10px] text-emerald-400 font-semibold border border-slate-700/20">
                ✓ تم المزامنة بنجاح منذ ٥ دقائق
              </div>
            </div>

            {/* Gallery Image Mockup 2 */}
            <div className="bg-[#1E293B] text-slate-100 rounded-2xl p-5 border border-slate-700/50 shadow-md space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                <span>إدارة المستخدمين</span>
                <span>meyar.app/users</span>
              </div>
              <p className="text-xs text-slate-300 font-bold">صلاحيات الأقسام والفرق</p>
              <div className="h-20 bg-slate-800/80 rounded-xl flex items-center justify-center text-[10px] text-slate-400 font-semibold border border-slate-700/20">
                أعضاء الفريق النشطون: ٢٤ مستخدم
              </div>
            </div>

            {/* Gallery Image Mockup 3 */}
            <div className="bg-[#1E293B] text-slate-100 rounded-2xl p-5 border border-slate-700/50 shadow-md space-y-4">
              <div className="flex justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                <span>لوحة الأهداف</span>
                <span>meyar.app/objectives</span>
              </div>
              <p className="text-xs text-slate-300 font-bold">ربط المبادرات بالأهداف الإستراتيجية</p>
              <div className="h-20 bg-slate-800/80 rounded-xl flex items-center justify-center text-[10px] text-amber-400 font-semibold border border-slate-700/20">
                الارتباطات الحالية: ١٢ هدف فعال
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
