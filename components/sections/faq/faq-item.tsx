'use client'

import React from 'react'
import { FaqItem as FaqItemType } from './faq-data'

interface FaqItemProps {
  faq: FaqItemType
  isOpen: boolean
  onClick: () => void
}

export function FaqItem({ faq, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="group rounded-2xl bg-white border border-border/50 hover:border-primary/20 shadow-sm transition-all duration-300 overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={onClick}
        className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-right gap-4 focus:outline-none"
      >
        <span className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        
        {/* Modern Animated Icon Toggle */}
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
            isOpen
              ? 'bg-primary text-white border-primary rotate-180'
              : 'bg-muted/40 text-muted-foreground border-border/40 group-hover:bg-muted group-hover:text-foreground'
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <line x1="5" y1="12" x2="19" y2="12" />
            ) : (
              <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </>
            )}
          </svg>
        </div>
      </button>

      {/* Accordion Content Panel with Smooth Slide Animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[300px] opacity-100 border-t border-border/20' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-6 px-6 sm:px-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
          {faq.answer}
        </div>
      </div>
    </div>
  )
}
