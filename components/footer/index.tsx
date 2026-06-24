import Link from 'next/link'
import React from 'react'
import { FooterBottom } from './footer-bottom'

export function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-right">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">معيار</h3>
            <p className="text-sm text-muted-foreground">
              منصة الأداء الإستراتيجية وبطاقة الأداء المتوازنة
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">المنتج</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المميزات
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">الشركة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">قانوني</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الشروط
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  )
}
