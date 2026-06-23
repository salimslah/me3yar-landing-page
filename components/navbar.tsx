'use client'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-32 h-10 flex-shrink-0">
              <Image 
                src="/logo.jpeg" 
                alt="Meyar Logo" 
                fill 
                className="object-contain mix-blend-multiply" 
                priority
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground font-medium hover:text-primary transition-colors">
              المميزات
            </a>
            <a href="#how" className="text-foreground font-medium hover:text-primary transition-colors">
              كيف يعمل
            </a>
            <a href="#contact" className="text-foreground font-medium hover:text-primary transition-colors">
              اتصل بنا
            </a>
          </div>

          {/* CTA Button */}
          <a 
            href={process.env.NEXT_PUBLIC_APP_URL || '#'}
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm cursor-pointer"
          >
            ابدأ الآن
          </a>
        </div>
      </div>
    </nav>
  )
}
