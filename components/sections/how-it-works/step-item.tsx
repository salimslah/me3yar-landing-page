'use client'

import React from 'react'
import { Step } from './steps-data'

interface StepItemProps {
  step: Step
  index: number
  isActive: boolean
  onClick: () => void
  isLast: boolean
}

export function StepItem({ step, index, isActive, onClick, isLast }: StepItemProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative text-right cursor-pointer p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
        isActive
          ? 'bg-white border-primary/30 shadow-xl'
          : 'bg-transparent border-transparent hover:bg-white/40 hover:border-border'
      }`}
    >
      <div className="flex gap-6 items-start">
        {/* Step number / Indicator */}
        <div className="flex flex-col items-center">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-300 ${
              isActive
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-muted/80 text-muted-foreground group-hover:bg-muted group-hover:text-foreground'
            }`}
          >
            {step.number}
          </div>
          {/* Connection line between nodes */}
          {!isLast && (
            <div
              className={`w-0.5 h-16 my-2 border-l border-dashed transition-colors duration-300 ${
                isActive ? 'border-primary/40' : 'border-border'
              }`}
            ></div>
          )}
        </div>

        {/* Step details */}
        <div className="flex-1 space-y-2 pt-1">
          <span className={`text-xs font-bold transition-colors ${isActive ? 'text-secondary' : 'text-muted-foreground'}`}>
            {step.label}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}
