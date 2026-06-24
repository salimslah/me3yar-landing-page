import { Landmark, GraduationCap, HeartPulse, Building2, Users, Truck, LucideIcon } from 'lucide-react'

export interface SectorItem {
  id: string
  type: 'large' | 'wide-split' | 'square' | 'wide-row'
  title: string
  description?: string
  icon: LucideIcon
  gridClass: string
  cardClass: string
  iconWrapperClass: string
  iconClass: string
  bgDecor?: 'landmark' | 'glow' | 'none'
  textClass?: string
  descClass?: string
}

export const sectorsData: SectorItem[] = [
  {
    id: 'government',
    type: 'large',
    title: 'القطاع الحكومي',
    description: 'حوكمة متكاملة لتنفيذ المبادرات الوطنية، ومتابعة الأداء المؤسسي للوزارات والهيئات بدقة تامة تتوافق مع رؤية 2030.',
    icon: Landmark,
    gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    cardClass: 'bg-gradient-to-br from-[#2D7D5A] via-[#246749] to-[#174430] p-8 sm:p-10 text-white flex flex-col justify-end group shadow-2xl shadow-primary/20 cursor-default border border-primary/30',
    iconWrapperClass: 'w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-inner',
    iconClass: 'w-8 h-8 text-secondary',
    bgDecor: 'landmark'
  },
  {
    id: 'enterprise',
    type: 'wide-split',
    title: 'الشركات الكبرى',
    description: 'مواءمة إستراتيجية لكافة الإدارات والفروع، وتتبع دقيق للعوائد والمخاطر.',
    icon: Building2,
    gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    cardClass: 'bg-gradient-to-r from-[#1E2724] to-[#121A17] p-8 text-white flex flex-col justify-center group shadow-xl shadow-emerald-950/20 cursor-default border border-primary/20',
    iconWrapperClass: 'w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500',
    iconClass: 'w-8 h-8 text-secondary',
    bgDecor: 'glow'
  },
  {
    id: 'health',
    type: 'square',
    title: 'القطاع الصحي',
    icon: HeartPulse,
    gridClass: 'col-span-1 row-span-1',
    cardClass: 'bg-[#FDF8F7] border border-[#E9D2CD] hover:border-rose-300 shadow-[0_4px_20px_-4px_rgba(201,91,91,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(201,91,91,0.15)] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-default',
    iconWrapperClass: 'w-16 h-16 rounded-2xl bg-[#FFF2F0] shadow-sm flex items-center justify-center mb-4 text-[#C95B5B] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300',
    iconClass: 'w-8 h-8'
  },
  {
    id: 'education',
    type: 'square',
    title: 'القطاع التعليمي',
    icon: GraduationCap,
    gridClass: 'col-span-1 row-span-1',
    cardClass: 'bg-[#F5FAF8] border border-[#CBE2D7] hover:border-emerald-300 shadow-[0_4px_20px_-4px_rgba(45,125,90,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(45,125,90,0.15)] p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-default',
    iconWrapperClass: 'w-16 h-16 rounded-2xl bg-[#EAF5F0] shadow-sm flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300',
    iconClass: 'w-8 h-8'
  },
  {
    id: 'hr',
    type: 'wide-row',
    title: 'الموارد البشرية',
    description: 'إدارة أهداف الموظفين وتقييم الأداء بشكل دوري لضمان ارتباطهم برؤية المنظمة.',
    icon: Users,
    gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    cardClass: 'bg-[#FCFAF5] border border-[#E8DEC8] hover:border-amber-300 shadow-[0_4px_20px_-4px_rgba(212,165,116,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(212,165,116,0.15)] p-8 flex items-center gap-6 group transition-all duration-300 cursor-default',
    iconWrapperClass: 'w-20 h-20 rounded-2xl bg-[#F7F3EA] shadow-sm flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform duration-300',
    iconClass: 'w-10 h-10',
    textClass: 'text-[#3E3420]',
    descClass: 'text-[#6B5E49]'
  },
  {
    id: 'logistics',
    type: 'wide-row',
    title: 'الخدمات اللوجستية',
    description: 'متابعة دقيقة لمؤشرات التشغيل، سلاسل الإمداد، وتحسين كفاءة العمليات اليومية.',
    icon: Truck,
    gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    cardClass: 'bg-[#F4F8FA] border border-[#CADCE2] hover:border-sky-300 shadow-[0_4px_20px_-4px_rgba(74,127,159,0.08)] hover:shadow-[0_8px_30px_-4px_rgba(74,127,159,0.15)] p-8 flex items-center gap-6 group transition-all duration-300 cursor-default',
    iconWrapperClass: 'w-20 h-20 rounded-2xl bg-[#EAF2F6] shadow-sm flex items-center justify-center text-[#4A7F9F] shrink-0 group-hover:translate-x-reverse group-hover:translate-x-2 transition-transform duration-300',
    iconClass: 'w-10 h-10',
    textClass: 'text-[#233540]',
    descClass: 'text-[#4E6270]'
  }
]
