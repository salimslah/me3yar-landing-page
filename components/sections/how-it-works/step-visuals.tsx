'use client'

import React from 'react'

export function StrategicHubVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 animate-fadeIn">
      <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
        {/* Central hub */}
        <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center shadow-xl z-10 border border-primary/20">
          <span className="text-white font-extrabold text-lg">معيار</span>
        </div>
        {/* Orbital Rings */}
        <div className="absolute w-full h-full rounded-full border border-dashed border-border/60 animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-primary/20 animate-[spin_25s_linear_infinite_reverse]"></div>

        {/* Orbiting Features */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 h-10 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-[10px] font-bold text-foreground">الأهداف</span>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 h-10 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-[10px] font-bold text-[#4A154B]">المبادرات</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-3 h-10 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-[10px] font-bold text-foreground">المخاطر</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 h-10 rounded-xl bg-white border border-border shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
          <span className="text-[10px] font-bold text-primary">الاستطلاعات</span>
        </div>

        {/* Data flow dots */}
        <div className="absolute w-2 h-2 rounded-full bg-secondary animate-ping top-12 left-1/4"></div>
        <div className="absolute w-2 h-2 rounded-full bg-primary animate-ping bottom-12 right-1/4"></div>
      </div>
    </div>
  )
}

export function BalancedScorecardVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 sm:p-8 animate-fadeIn">
      <div className="bg-white rounded-2xl border border-border p-5 space-y-4 shadow-lg relative overflow-hidden max-w-[340px] mx-auto w-full">
        {/* Header decor */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">بطاقة الأداء المتوازن</span>
          <span className="text-xs text-muted-foreground font-semibold">Q3 2026</span>
        </div>
        {/* Balanced Scorecard Target */}
        <div className="space-y-3 text-right">
          <div className="flex justify-between items-end">
            <span className="text-xs text-muted-foreground font-semibold">المنظور المالي</span>
            <span className="text-sm font-bold text-foreground">٨٥٪</span>
          </div>
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 right-0 bg-secondary rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="space-y-3 text-right">
          <div className="flex justify-between items-end">
            <span className="text-xs text-muted-foreground font-semibold">منظور العملاء</span>
            <span className="text-sm font-bold text-foreground">٩٢٪</span>
          </div>
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 right-0 bg-primary rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
        <div className="space-y-3 text-right">
          <div className="flex justify-between items-end">
            <span className="text-xs text-muted-foreground font-semibold">العمليات الداخلية</span>
            <span className="text-sm font-bold text-foreground">٧٨٪</span>
          </div>
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div className="absolute inset-y-0 right-0 bg-accent rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PerformanceChartVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 sm:p-8 animate-fadeIn">
      <div className="bg-white rounded-2xl border border-border p-6 shadow-lg space-y-4 max-w-[340px] w-full relative">
        <div className="flex items-center justify-between text-right">
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
