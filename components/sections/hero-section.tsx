'use client'

export function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-32 px-6 sm:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Right side - Modern card design */}
          <div className="order-last lg:order-first relative">
            <div className="relative bg-white rounded-3xl border border-border shadow-2xl overflow-hidden group">
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

              <div className="p-8 sm:p-10 space-y-8">
                {/* Header */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-primary tracking-widest">لوحة التحكم المباشرة</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">بطاقة الإستراتيجية</h3>
                </div>

                {/* Main metric with modern design */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-muted-foreground">درجة التنفيذ</span>
                      <span className="text-4xl font-bold text-primary">87%</span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-primary to-primary/70 rounded-full transition-all group-hover:from-primary group-hover:to-primary/60" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  {/* Stats grid - modern minimal style */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <p className="text-xs text-muted-foreground font-medium">الأهداف المتوافقة</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-foreground">23</span>
                        <span className="text-sm text-muted-foreground">/24</span>
                      </div>
                    </div>
                    <div className="space-y-2 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <p className="text-xs text-muted-foreground font-medium">قيد التنفيذ</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">18</span>
                        <span className="text-sm text-muted-foreground">مشروع</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground font-semibold mb-3">التوزيع حسب الحالة</p>
                    <div className="flex items-end gap-2">
                      <div className="flex-1 h-12 bg-primary/30 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/50 rounded-t-lg" style={{ height: '70%' }}></div>
                      </div>
                      <div className="flex-1 h-12 bg-secondary/30 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-secondary/50 rounded-t-lg" style={{ height: '45%' }}></div>
                      </div>
                      <div className="flex-1 h-12 bg-accent/30 rounded-t-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-accent to-accent/50 rounded-t-lg" style={{ height: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating element */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Left side - Copy and CTAs */}
          <div className="order-first lg:order-last space-y-8">
            <div className="space-y-6">
              <div>
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-4 py-2 rounded-full mb-4 tracking-widest">
                  منصة تنفيذ الإستراتيجية
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                استراتيجية تُحقق النتائج
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
                توقف عن التخطيط في جداول البيانات. معيار يجمع مؤسستك بأكملها لتتبع التقدم والبقاء متوافقاً وتحقيق نتائج حقيقية برؤية الأداء المباشرة.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-7 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg hover:shadow-xl">
                ابدأ النسخة التجريبية المجانية
              </button>
              <button className="px-7 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-colors">
                شاهد العرض التوضيحي
              </button>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <p className="text-sm font-medium text-muted-foreground">موثوقة من قبل الشركات الناشئة</p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">✓</div>
                  <span className="text-sm text-foreground font-medium">شركة التدفق التقني</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold text-sm">✓</div>
                  <span className="text-sm text-foreground font-medium">معامل النمو</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
