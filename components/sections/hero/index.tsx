'use client'

import React from 'react'
import { HeroContent } from './hero-content'
import { DashboardMockup } from './dashboard-mockup'

export function HeroSection() {
  return (
    <section className="relative w-full pt-40 pb-32 px-6 sm:px-8 bg-[#FAF9F6] overflow-hidden">
      {/* SaaS Gradient Glow Blobs */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl animate-[pulse_8s_infinite]"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl animate-[pulse_10s_infinite_1s]"></div>
      <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#2C2C2C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right side - Modern dashboard mockup with floating widgets */}
          <div className="order-last lg:order-first relative">
            <DashboardMockup />
          </div>

          {/* Left side - Copy and CTAs */}
          <HeroContent />
        </div>
      </div>
    </section>
  )
}
