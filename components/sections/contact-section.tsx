'use client'

import React, { useState } from 'react'

export function ContactSection() {
  const [topic, setTopic] = useState<'quote' | 'support' | 'general'>('quote')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    orgSize: '١-٥٠ موظف'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '', orgSize: '١-٥٠ موظف' })
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section id="contact" className="w-full py-16 px-6 sm:px-8 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-48 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-48 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full tracking-wider shadow-sm">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
            دعنا نساعدك في تمكين إستراتيجيتك
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            فريقنا متواجد للإجابة على استفساراتك وتقديم عروض توضيحية مخصصة لجهاتكم.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Trust Badges & HQ Details (Right Side in RTL) */}
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
              <div className="pt-4 border-t border-border/40 space-y-3">
                <div className="flex items-center gap-2.5 text-[11px]">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 text-xs">
                    📍
                  </div>
                  <div>
                    <p className="font-bold text-foreground">المقر الرئيسي</p>
                    <p className="text-muted-foreground mt-0.5">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-[11px]">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 text-xs">
                    ✉
                  </div>
                  <div>
                    <p className="font-bold text-foreground">البريد الإلكتروني للتواصل</p>
                    <p className="text-muted-foreground mt-0.5">support@meyar.app</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 text-[11px]">
                  <div className="w-7 h-7 rounded-lg bg-[#c5a880]/10 flex items-center justify-center text-[#9a7e58] shrink-0 text-xs">
                    🕒
                  </div>
                  <div>
                    <p className="font-bold text-foreground">أوقات الدعم والاستشارات</p>
                    <p className="text-muted-foreground mt-0.5">الأحد - الخميس | 8:00 ص - 5:00 م</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form Card (Left Side in RTL) */}
          <div className="lg:col-span-7 relative order-last lg:order-first">
            {/* Glow backdrop behind card */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-xl pointer-events-none"></div>

            <div className="relative bg-white rounded-[2rem] border border-border/50 p-6 sm:p-8 shadow-2xl text-right h-full flex flex-col justify-center">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-foreground">تم الإرسال بنجاح!</h3>
                  <p className="text-muted-foreground text-xs max-w-sm mx-auto leading-relaxed">
                    شكراً لتواصلك معنا. سنقوم بمراجعة استفسارك والتواصل معك عبر البريد الإلكتروني في غضون ٢٤ ساعة.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Topic Selector Capsule Toggle */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-foreground">موضوع الاستفسار</label>
                    <div className="bg-muted/40 p-1 rounded-xl flex gap-1 border border-border/40">
                      <button
                        type="button"
                        onClick={() => setTopic('quote')}
                        className={`flex-1 py-2 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                          topic === 'quote' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        طلب عرض سعر
                      </button>
                      <button
                        type="button"
                        onClick={() => setTopic('support')}
                        className={`flex-1 py-2 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                          topic === 'support' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        دعم فني وتكامل
                      </button>
                      <button
                        type="button"
                        onClick={() => setTopic('general')}
                        className={`flex-1 py-2 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                          topic === 'general' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        استفسار عام
                      </button>
                    </div>
                  </div>

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

                    {/* Conditional Input based on Topic */}
                    <div className="space-y-1.5">
                      <label htmlFor="orgSize" className="text-[11px] font-bold text-foreground">
                        {topic === 'quote' ? 'حجم الجهة (عدد الموظفين)' : 'أولوية الاستفسار'}
                      </label>
                      {topic === 'quote' ? (
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
                      ) : (
                        <select
                          id="priority"
                          className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground"
                        >
                          <option>عادي</option>
                          <option>متوسط</option>
                          <option>عاجل</option>
                        </select>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold text-foreground">
                      {topic === 'quote' ? 'متطلبات إضافية لمشروعكم' : 'تفاصيل الرسالة'}
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        topic === 'quote'
                          ? 'اذكر أي متطلبات خاصة بالربط، التخصيص، أو نوع الدعم الفني المطلوب...'
                          : 'كيف يمكننا مساعدتك اليوم؟'
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-xs outline-none text-foreground placeholder:text-muted-foreground/55 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white font-extrabold rounded-xl hover:bg-primary/95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.99] duration-200 text-center cursor-pointer text-xs"
                    >
                      إرسال الاستفسار
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
