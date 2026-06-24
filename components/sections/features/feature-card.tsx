'use client'

import React from 'react'
import { Feature } from './features-data'

interface FeatureCardProps {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <a
      href={process.env.NEXT_PUBLIC_APP_URL || '#'}
      className={`group block relative ${feature.bgClass} rounded-3xl border border-border/60 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[340px] text-right`}
    >
      {/* Graphic container (absolute positioned on the left/start side to prevent overlapping with RTL text) */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2">
        {feature.graphic}
      </div>

      {/* Card Content */}
      <div className="relative z-10 space-y-6 max-w-[75%] sm:max-w-[70%]">
        {/* Tag */}
        <div>
          <span className={`inline-block text-xs font-bold ${feature.tagBgClass} ${feature.tagTextClass} px-3 py-1.5 rounded-full shadow-sm`}>
            {feature.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight tracking-tight">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {/* Link at bottom */}
      <div className="relative z-10 pt-6 mt-auto">
        <div className={`inline-flex items-center gap-1.5 text-sm font-bold ${feature.linkColorClass} transition-colors group/link`}>
          <span>{feature.linkText}</span>
          <span className="inline-block transition-transform group-hover/link:-translate-x-1 duration-200">
            ←
          </span>
        </div>
      </div>
    </a>
  )
}
