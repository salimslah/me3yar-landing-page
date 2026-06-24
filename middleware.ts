import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get('accept') || ''
  
  if (acceptHeader.includes('text/markdown')) {
    const markdownContent = `# معيار | منصة الأداء والإدارة الإستراتيجية المتكاملة

منصة معيار تمكنك من ترجمة إستراتيجيتك إلى واقع ملموس. تتبع مؤشرات الأداء (KPIs)، أدار المبادرات والمشاريع، وقيم المخاطر في لوحة تحكم فورية واحدة لضمان تحقيق أهداف منظمتك.

## الأقسام الرئيسية
1. **القطاعات**: مرونة استثنائية تناسب جميع القطاعات (القطاع الحكومي، الشركات الكبرى، القطاع الصحي، القطاع التعليمي، الموارد البشرية، الخدمات اللوجستية).
2. **المميزات**:
   - ترجمة إستراتيجيتك إلى مؤشرات أداء دقيقة (BSC).
   - ربط المبادرات والمشاريع بالنتائج مباشرة.
   - إدارة المخاطر الإستراتيجية.
   - مراقبة وتحليلات الأداء بوجبات تحكم فورية.
3. **كيف تعمل**:
   - الخطوة الأولى: بناء القاعدة الاستراتيجية المتكاملة.
   - الخطوة الثانية: صياغة الأهداف وبناء بطاقات الأداء.
   - الخطوة الثالثة: المتابعة المباشرة وإدارة المخاطر.
4. **الأسئلة الشائعة**: أجوبة حول منصة معيار والتخطيط الإستراتيجي.
5. **ابدأ الآن**: سجل بياناتك للحصول على عرض تجريبي.

بإدارة وتطوير Growth Side. support@meyar.app
`

    // Approximate token count based on characters
    const tokenCount = Math.round(markdownContent.length / 4)

    return new NextResponse(markdownContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'x-markdown-tokens': tokenCount.toString(),
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
