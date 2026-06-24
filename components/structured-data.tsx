'use client';

import Script from 'next/script';

const BASE_URL = 'https://meyar.app';

interface StructuredDataProps {
  data: Record<string, any>;
  id: string;
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "معيار | منصة الأداء والإدارة الإستراتيجية",
    "legalName": "منصة معيار لإدارة الأداء والإستراتيجية",
    "alternateName": "Meyar Platform",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.jpeg`,
    "image": `${BASE_URL}/logo.jpeg`,
    "description": "منصة سحابية رائدة ومبتكرة لإدارة الإستراتيجية وقياس الأداء المؤسسي. نهدف إلى مساعدة الجهات الحكومية والشركات الخاصة على ترجمة رؤيتها الكبرى إلى واقع ملموس، من خلال ربط الأهداف الإستراتيجية بالمبادرات التشغيلية، وتتبع مؤشرات القياس (KPIs)، وإدارة المخاطر في لوحة تحكم فورية واحدة ومتكاملة.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "",
        "contactType": "customer support",
        "email": "support@meyar.app",
        "availableLanguage": ["ar", "en"]
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
    }
  };

  return <StructuredData data={organizationData} id="organization-schema" />;
}

export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": "معيار | منصة الأداء والإدارة الإستراتيجية",
    "description": "منصة سحابية رائدة ومبتكرة لإدارة الإستراتيجية وقياس الأداء المؤسسي",
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "inLanguage": [
      {
        "@type": "Language",
        "name": "Arabic",
        "alternateName": "ar"
      }
    ]
  };

  return <StructuredData data={websiteData} id="website-schema" />;
}

export function SoftwareApplicationSchema() {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    "name": "منصة معيار لإدارة الأداء والإستراتيجية",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    },
    "description": "منصة سحابية متكاملة لربط الأهداف الإستراتيجية بالمبادرات التشغيلية وتتبع مؤشرات قياس الأداء وتقييم المخاطر.",
    "featureList": [
      "بطاقة الأداء المتوازن (BSC) ومساحة العمل الإستراتيجية",
      "سجل مؤشرات الأداء (KPI Ledger) ومراقبة المستهدفات",
      "تتبع المبادرات والمشاريع التشغيلية والميزانيات",
      "إدارة المخاطر الإستراتيجية والتشغيلية (Risk Radar)",
      "محرك الاستطلاعات وقياس رضا العملاء والمستفيدين (CSAT)",
      "مصمم التقارير المخصص وتصدير ملفات PDF/Excel",
      "إدارة الاجتماعات الدورية وتوثيق القرارات والمهام"
    ],
    "provider": {
      "@id": `${BASE_URL}/#organization`
    },
    "url": BASE_URL,
    "screenshot": `${BASE_URL}/logo.jpeg`,
    "image": `${BASE_URL}/logo.jpeg`,
    "inLanguage": ["ar"],
    "softwareVersion": "1.0",
    "applicationSubCategory": "إدارة الأداء والاستراتيجية السحابية"
  };

  return <StructuredData data={softwareData} id="software-schema" />;
}

export function FAQSchema() {
  const faqs = [
    {
      question: 'ما هي منصة معيار (Meyar) وكيف تعمل؟',
      answer: 'منصة معيار هي منصة سحابية متكاملة لإدارة وتنفيذ الإستراتيجية وبطاقة الأداء المتوازن (BSC). تمكن الجهات الحكومية والشركات من صياغة رؤيتها، وتحديد مؤشرات قياس الأداء الرئيسية (KPIs)، وربطها بالمبادرات والمشاريع التشغيلية لتتبع التنفيذ والتحقق من جودة المخرجات فورت حدوثها.'
    },
    {
      question: 'هل تدعم منصة معيار ربط الأهداف بالأنشطة والمشاريع اليومية؟',
      answer: 'نعم بكل تأكيد. تم تصميم معيار لتجسير الفجوة الكلاسيكية بين التخطيط والتنفيذ. تتيح لك المنصة ربط كل مشروع أو مهمة داخل مساحة العمل الإستراتيجية بأهداف بطاقة الأداء مباشرة، مما يضمن محاذاة جهود كافة الفرق التنفيذية بنسبة 100% لتحقيق الرؤية المشتركة.'
    },
    {
      question: 'كيف تساعد منصة معيار في إدارة وتخفيف المخاطر الإستراتيجية؟',
      answer: 'توفر المنصة نظاماً متطوراً لإدارة المخاطر؛ حيث يمكنك تحديد التحديات والتهديدات المحتملة، وتقييم احتمالية حدوثها وشدة تأثيرها، ثم ربطها بالخطة الإستراتيجية لوضع خطط استجابة استباقية ومستويات إنذار مبكر قبل تأثر مؤشرات القياس.'
    },
    {
      question: 'هل تدعم المنصة إدارة الاستطلاعات ورضا العملاء؟',
      answer: 'نعم، توفر المنصة محرك استطلاعات متكامل يتيح لك تصميم استطلاعات مخصصة، إرسالها لأصحاب المصلحة، وتتبع نتائج رضا العملاء (CSAT) وربطها تلقائياً بالمنظورات الاستراتيجية الخاصة بك.'
    },
    {
      question: 'هل توجد فترة تجريبية مجانية للمنصة؟',
      answer: 'نعم، يمكنك استكشاف كافة إمكانيات معيار والاستفادة من تجربة كاملة المزايا مجاناً لمدة 14 يوماً. التسجيل فوري وبسيط ولا يتطلب إدخال أي تفاصيل لبطاقة الائتمان لتشغيل حسابك التجريبي.'
    }
  ];

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData data={faqData} id="faq-schema" />;
}
