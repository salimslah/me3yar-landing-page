'use client'

import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    orgSize: '١-٥٠ موظف'
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '', orgSize: '١-٥٠ موظف' })
        setTimeout(() => setSubmitted(false), 8000)
      } else {
        setErrorMessage(result.error || 'حدث خطأ أثناء إرسال طلبكم. الرجاء المحاولة مرة أخرى.')
      }
    } catch (err) {
      setErrorMessage('فشل الاتصال بالخادم. يرجى التأكد من اتصال الإنترنت والمحاولة لاحقاً.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="lg:col-span-7 relative order-last lg:order-first text-right">
      {/* Glow backdrop behind card */}
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-xl pointer-events-none"></div>

      <div className="relative bg-white rounded-[2rem] border border-border/50 p-6 sm:p-8 shadow-2xl text-right h-full flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[11px] font-bold text-foreground">الاسم الكريم</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="الاسم الكامل"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground placeholder:text-muted-foreground/55"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[11px] font-bold text-foreground">البريد الإلكتروني للمنظمة</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground placeholder:text-muted-foreground/55 text-left"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Company Input */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-[11px] font-bold text-foreground">الجهة / الشركة</label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="اسم المنظمة أو الجهة"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground placeholder:text-muted-foreground/55"
              />
            </div>

            {/* Organization Size */}
            <div className="space-y-1.5">
              <label htmlFor="orgSize" className="text-[11px] font-bold text-foreground">
                حجم الجهة (عدد الموظفين)
              </label>
              <select
                id="orgSize"
                value={formData.orgSize}
                onChange={(e) => setFormData({ ...formData, orgSize: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground"
              >
                <option>١-٥٠ موظف</option>
                <option>٥١-٢٠٠ موظف</option>
                <option>٢٠١-٥٠٠ موظف</option>
                <option>أكثر من ٥٠٠ موظف</option>
              </select>
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-[11px] font-bold text-foreground">
              متطلبات إضافية لمشروعكم
            </label>
            <textarea
              id="message"
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="اذكر أي متطلبات خاصة بالربط، التخصيص، أو نوع الدعم الفني المطلوب..."
              className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground placeholder:text-muted-foreground/55 resize-none"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-xs font-bold text-destructive bg-destructive/10 p-3 rounded-lg text-right">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-1 text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white font-extrabold rounded-xl hover:bg-primary/95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.99] duration-200 text-center cursor-pointer text-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                'إرسال الطلب'
              )}
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="text-xs font-bold text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl text-right flex items-center gap-2 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
              <span>تم إرسال طلبكم بنجاح! سنتواصل معكم خلال ٢٤ ساعة.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
