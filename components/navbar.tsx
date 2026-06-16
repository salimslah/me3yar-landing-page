'use client'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              م
            </div>
            <span className="text-xl font-bold text-foreground">معيار</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground font-medium hover:text-primary transition-colors">
              المميزات
            </a>
            <a href="#how" className="text-foreground font-medium hover:text-primary transition-colors">
              كيف يعمل
            </a>
            <a href="#pricing" className="text-foreground font-medium hover:text-primary transition-colors">
              الأسعار
            </a>
            <a href="#contact" className="text-foreground font-medium hover:text-primary transition-colors">
              اتصل بنا
            </a>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
            ابدأ الآن
          </button>
        </div>
      </div>
    </nav>
  )
}
