'use client'

const features = [
  {
    icon: 'chart',
    title: 'لوحات تحكم فورية',
    description: 'شاهد مؤشرات الأداء والقياسات أثناء حدوثها. لا تأخير، لا مفاجآت.'
  },
  {
    icon: 'target',
    title: 'توافق الأهداف',
    description: 'ربط الإستراتيجية بالتنفيذ. حافظ على تركيز الفرق على ما يهم.'
  },
  {
    icon: 'users',
    title: 'التعاون بين الفرق',
    description: 'اعمل معاً على المبادرات والتقدم. تم تصميمها للعمل الجماعي.'
  },
  {
    icon: 'zap',
    title: 'إعداد سريع',
    description: 'ابدأ في دقائق، وليس أشهر. واجهة بسيطة وبديهية.'
  },
  {
    icon: 'shield',
    title: 'أمان المستوى الإنتاجي',
    description: 'بيانتك آمنة. معتمدة من SOC 2 مع حماية متقدمة.'
  },
  {
    icon: 'messageCircle',
    title: 'رؤى ذكية',
    description: 'التوصيات المدعومة بالذكاء الاصطناعي تساعدك على اكتشاف الاتجاهات والفرص.'
  }
]

const IconRenderer = ({ icon }: { icon: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    chart: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    target: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    users: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    zap: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    shield: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    messageCircle: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  }
  
  return icons[icon] || null
}

export function FeaturesSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            كل ما تحتاجه للتنفيذ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            جميع الأدوات لإدارة الإستراتيجية الحديثة في مكان واحد.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-border p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon container with modern style */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                <IconRenderer icon={feature.icon} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
