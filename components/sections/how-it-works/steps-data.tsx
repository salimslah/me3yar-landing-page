import React from 'react'
import { StrategicHubVisual, BalancedScorecardVisual, PerformanceChartVisual } from './step-visuals'

export interface Step {
  number: string
  label: string
  title: string
  description: string
  visual: React.ReactNode
}

export const stepsData: Step[] = [
  {
    number: '٠١',
    label: 'الخطوة الأولى',
    title: 'بناء القاعدة الاستراتيجية المتكاملة',
    description: 'أضف أهدافك ومبادراتك ومؤشراتك بسهولة لبناء قاعدة بيانات إستراتيجية موحدة في دقائق مع دعم كامل لجميع المنظورات.',
    visual: <StrategicHubVisual />
  },
  {
    number: '٠٢',
    label: 'الخطوة الثانية',
    title: 'صياغة الأهداف وبناء بطاقات الأداء',
    description: 'حدد مؤشرات قياس الأداء الرئيسية (KPIs)، واربط الأهداف الإستراتيجية بالمبادرات التشغيلية ووزع المسؤوليات على فريقك بوضوح تام.',
    visual: <BalancedScorecardVisual />
  },
  {
    number: '٠٣',
    label: 'الخطوة الثالثة',
    title: 'المتابعة المباشرة وإدارة المخاطر',
    description: 'احصل على لوحات قياس وتقارير أداء فورية حية، تتبع مستويات التقدم والإنذارات المبكرة للمخاطر لتعديل مسار خطتك بمرونة.',
    visual: <PerformanceChartVisual />
  }
]
