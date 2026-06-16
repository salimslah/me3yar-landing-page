'use client'

const steps = [
  {
    number: '1',
    title: 'ربط بيانات مؤسستك',
    description: 'تكامل مع أدواتك الحالية أو رفع البيانات مباشرة. يعمل مع كل شيء.'
  },
  {
    number: '2',
    title: 'حدد أهدافك',
    description: 'حدد مؤشرات الأداء والأهداف الإستراتيجية. اجعلها مرئية للفريق بأكمله.'
  },
  {
    number: '3',
    title: 'تتبع وحسّن',
    description: 'راقب التقدم في الوقت الفعلي. احصل على رؤى وأعد التعديل أثناء التعلم.'
  }
]

export function HowItWorksSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ثلاث خطوات للوضوح الإستراتيجي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            عملية بسيطة. نتائج قوية.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Modern connection lines */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute top-28 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent group-hover:from-primary/80 transition-all"></div>
                  <svg className="hidden md:block absolute top-28 -right-2 w-6 h-1 text-primary/30" viewBox="0 0 20 4" fill="none">
                    <path d="M0 2 Q5 0 10 2 T20 2" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </>
              )}

              {/* Modern card design */}
              <div className="relative bg-white rounded-2xl border border-border p-8 h-full hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:translate-y-[-4px]">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Step number - modern circular design */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-secondary/25 transition-all">
                    <span className="text-3xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-full -mr-8 -mb-8 group-hover:from-primary/10 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
