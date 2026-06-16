'use client'

export function CtaSection() {
  return (
    <section className="w-full py-20 px-6 sm:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-lg border border-border p-12 sm:p-16 text-center space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              هل أنت مستعد للجد بشأن الإستراتيجية؟
            </h2>
            <p className="text-lg text-muted-foreground">
              انضم إلى الفرق التي غيرت طريقة تنفيذها. ابدأ تجربتك المجانية لمدة 14 يوم - لا حاجة لبطاقة ائتمان.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="بريدك@شركتك.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              ابدأ التجربة
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>بدون بطاقة ائتمان</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>تجربة مجانية 14 يوم</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>وصول كامل</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
