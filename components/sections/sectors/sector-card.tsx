'use client'

import React from 'react'
import { Landmark } from 'lucide-react'
import { SectorItem } from './sectors-data'

interface SectorCardProps {
  item: SectorItem
}

export function SectorCard({ item }: SectorCardProps) {
  const Icon = item.icon

  if (item.type === 'large') {
    return (
      <div className={`${item.gridClass} relative overflow-hidden rounded-[2.5rem] ${item.cardClass}`}>
        {/* Large background Landmark icon decoration */}
        <Landmark className="absolute -left-12 -top-12 w-80 h-80 text-white/5 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-700 ease-out pointer-events-none" />
        <div className="relative z-10 mt-auto text-right w-full">
          <div className={item.iconWrapperClass}>
            <Icon className={item.iconClass} />
          </div>
          <h3 className="text-3xl font-black mb-3">{item.title}</h3>
          <p className="text-emerald-100/90 text-lg max-w-md leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    )
  }

  if (item.type === 'wide-split') {
    return (
      <div className={`${item.gridClass} relative overflow-hidden rounded-[2.5rem] ${item.cardClass}`}>
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="relative z-10 flex items-center justify-between w-full text-right">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100">{item.title}</h3>
            <p className="text-emerald-100/60 text-base max-w-xs sm:max-w-md">{item.description}</p>
          </div>
          <div className={item.iconWrapperClass}>
            <Icon className={item.iconClass} />
          </div>
        </div>
      </div>
    )
  }

  if (item.type === 'square') {
    return (
      <div className={`${item.gridClass} relative overflow-hidden rounded-[2.5rem] ${item.cardClass}`}>
        <div className={item.iconWrapperClass}>
          <Icon className={item.iconClass} />
        </div>
        <h3 className="text-xl font-bold">{item.title}</h3>
      </div>
    )
  }

  // wide-row
  return (
    <div className={`${item.gridClass} relative overflow-hidden rounded-[2.5rem] ${item.cardClass}`}>
      <div className={item.iconWrapperClass}>
        <Icon className={item.iconClass} />
      </div>
      <div className="text-right">
        <h3 className={`text-2xl font-bold mb-2 ${item.textClass || ''}`}>{item.title}</h3>
        <p className={`text-base leading-relaxed ${item.descClass || ''}`}>{item.description}</p>
      </div>
    </div>
  )
}
