'use client'

import React from 'react'
import { featuresData } from './features-data'
import { FeatureCard } from './feature-card'

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 px-6 sm:px-8 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            ضاعف كفاءة سير عملك
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            جميع الأدوات لإدارة الإستراتيجية والأداء والمبادرات في لوحة قيادة متكاملة.
          </p>
        </div>

        {/* 2x2 Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
