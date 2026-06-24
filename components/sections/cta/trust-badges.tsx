'use client'

import React from 'react'
import { MapPin, Mail } from 'lucide-react'

export function TrustBadges() {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-right order-first lg:order-last">
      <div className="bg-white rounded-3xl border border-border/50 p-5 sm:p-6 shadow-xl space-y-6 flex-1 flex flex-col justify-between">
        
        {/* Trust Section */}
        <div className="space-y-4">
          <div className="border-b border-border/40 pb-3">
            <h3 className="text-lg font-bold text-foreground">الالتزام والمعايير الوطنية</h3>
            <p className="text-xs text-muted-foreground mt-0.5">نهتم بأمن وحوكمة بياناتكم بأعلى درجات المسؤولية</p>
          </div>

          <div className="space-y-3">
            {/* Trust Card 1 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F6]/60 border border-border/30 hover:border-primary/20 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">السيادة والامتثال الأمني (CST & NCA)</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  استضافة سحابية سعودية محلية بالكامل، متوافقة تماماً مع ضوابط الأمن السيبراني الوطنية.
                </p>
              </div>
            </div>

            {/* Trust Card 2 */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF9F6]/60 border border-border/30 hover:border-primary/20 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-foreground">عزل البيانات والتشفير التام</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  تشفير البيانات الحساسة وعزل قواعد البيانات بشكل كامل لضمان أقصى درجات السرية.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Info & Location */}
        <div className="pt-4 border-t border-border/40 space-y-4">
          <div className="flex items-center gap-3 text-[11px]">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-foreground">المقر الرئيسي</p>
              <p className="text-muted-foreground mt-0.5">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>

          <a href="mailto:support@meyar.app" className="flex items-center gap-3 text-[11px] hover:bg-[#FAF9F6] p-1.5 -m-1.5 rounded-2xl transition-colors group">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-foreground group-hover:text-primary transition-colors">البريد الإلكتروني للتواصل</p>
              <p className="text-muted-foreground mt-0.5 underline decoration-primary/30">
                support@meyar.app
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}
