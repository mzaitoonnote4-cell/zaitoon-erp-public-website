/**
 * ZA ERP — Public homepage content (single source of truth)
 * Edit this file to change marketing copy until the Website Admin CMS is built.
 * Type definitions: src/content/public-homepage.ts
 */
(function (global) {
  "use strict";

  /** @type {import('../src/content/public-homepage').PublicHomepageContent} */
  var HOMEPAGE_CONTENT = {
    version: "1.0.0",

    settings: {
      erpLoginUrl: "https://erpv1.zaitoonerp.com/",
      whatsappNumber: "9647808500591",
      copyrightYear: 2026,
      copyrightText: "© 2026 ZA ERP. جميع الحقوق محفوظة.",
      market: {
        primaryCountry: "IQ",
        primaryCountryNameAr: "العراق",
        cityAr: "بغداد"
      }
    },

    seo: {
      title: "ZA ERP | نظام عربي متكامل لإدارة الأعمال",
      description:
        "ZA ERP منصة عربية سحابية لإدارة المبيعات، المخزون، المشتريات، المالية، العملاء، الموظفين، الصيانة، العمليات والتقارير من مكان واحد.",
      ogImage: null
    },

    brand: {
      monogram: "ZA",
      name: "ZA",
      accent: "ERP",
      ariaLabel: "ZA ERP الرئيسية"
    },

    nav: [
      { id: "home", label: "الرئيسية", href: "#hero", section: "hero" },
      { id: "product", label: "المنتج", href: "#product", section: "features" },
      { id: "features", label: "المميزات", href: "#features", section: "features" },
      { id: "sectors", label: "القطاعات", href: "#sectors", section: "sectors" },
      { id: "pricing", label: "الأسعار", href: "#pricing", section: "pricing" },
      { id: "resources", label: "الموارد", href: "#resources", section: "resources" },
      { id: "about", label: "من نحن", href: "#about", section: "about" }
    ],

    headerCtas: [
      {
        label: "تسجيل الدخول",
        href: "https://erpv1.zaitoonerp.com/",
        variant: "ghost",
        external: true
      },
      {
        label: "احجز عرضاً تجريبياً",
        href: "#contact",
        variant: "gold"
      }
    ],

    sectionOrder: [
      "hero",
      "modules",
      "why",
      "industries",
      "howItWorks",
      "security",
      "pricing",
      "pilot",
      "faq",
      "cta",
      "whatsappCta",
      "news",
      "video",
      "contact"
    ],

    sections: {
      showHero: true,
      showModules: true,
      showWhy: true,
      showSectors: false,
      showIndustries: true,
      showHowItWorks: true,
      showSecurity: true,
      showPricing: true,
      showPilot: true,
      showFaq: true,
      showCta: true,
      showWhatsappCta: true,
      showNews: false,
      showVideo: false,
      showContact: true
    },

    hero: {
      eyebrow: "نظام متكامل لإدارة أعمالك",
      headlineBefore: "تحكّم في كل تفاصيل أعمالك مع",
      headlineHighlight: "ZA ERP",
      subtitle:
        "منصة سحابية ذكية تجمع جميع أقسام أعمالك في نظام واحد متكامل، لتمكينك من اتخاذ قرارات أسرع، زيادة الكفاءة، وتحقيق نمو مستدام.",
      ctas: [
        { label: "احجز عرضاً تجريبياً", href: "#contact", variant: "gold" },
        { label: "استكشف المميزات", href: "#features", variant: "outline" }
      ],
      trustBadges: [
        { icon: "shield", label: "سحابي وآمن" },
        { icon: "refresh", label: "تحديثات مستمرة" },
        { icon: "chat", label: "دعم فني متخصص" }
      ],
      mockup: {
        mode: "composed",
        image: null,
        imageAlt: "لوحة تحكم ZA ERP",
        sidebarNav: ["الرئيسية", "المبيعات", "المخزون", "التقارير"],
        kpis: [
          { label: "إجمالي المبيعات", value: 48750000, animate: true, variant: "gold" },
          { label: "الفواتير", value: 1284, animate: true, variant: "default" },
          { label: "العملاء", value: 342, animate: true, variant: "emerald" }
        ],
        chartLabel: "أداء المبيعات",
        chartBars: [42, 68, 55, 82, 74, 91],
        mobile: {
          title: "لوحة اليوم",
          statLabel: "مبيعات اليوم",
          statValue: "$4,280",
          bars: [60, 80, 45, 70]
        }
      }
    },

    modules: {
      title: "كل ما تحتاجه في نظام واحد",
      subtitle: "إدارة متكاملة لكل أقسام أعمالك",
      items: [
        { id: "customers", icon: "customers", title: "العملاء", description: "إدارة بيانات العملاء، المتابعة، وسجل التعاملات في مكان واحد." },
        { id: "sales", icon: "sales", title: "المبيعات", description: "فواتير المبيعات، العروض، والمتابعة اليومية بسهولة." },
        { id: "purchases", icon: "purchases", title: "المشتريات", description: "طلبات الشراء، الموردين، والتكاليف تحت السيطرة." },
        { id: "inventory", icon: "inventory", title: "المخزون", description: "تتبع الكميات، التنبيهات، والحركات بين المواقع." },
        { id: "finance", icon: "finance", title: "المالية", description: "محاسبة، ذمم، وتقارير مالية واضحة لصاحب العمل." },
        { id: "expenses", icon: "expenses", title: "المصاريف", description: "تسجيل المصروفات وتصنيفها لرؤية أوضح للتكاليف." },
        { id: "employees", icon: "employees", title: "الموظفون", description: "إدارة الفريق، الصلاحيات، والحضور بمرونة." },
        { id: "maintenance", icon: "maintenance", title: "الصيانة والخدمات", description: "طلبات الصيانة، الجدولة، ومتابعة الخدمات." },
        { id: "operations", icon: "operations", title: "العمليات", description: "تنسيق العمليات اليومية والمهام بين الأقسام." },
        { id: "indicators", icon: "indicators", title: "المؤشرات", description: "لوحات معلومات ومؤشرات أداء لحظية لقرارات أذكى." }
      ],
      footerCta: { label: "استكشف جميع المميزات", href: "#features", variant: "outline" }
    },

    why: {
      title: "لماذا تختار",
      titleHighlight: "ZA ERP",
      subtitle: "نحو إدارة أكثر ذكاءً ونجاحاً",
      emblemText: "ZA",
      items: [
        { id: "efficiency", icon: "efficiency", title: "كفاءة أعلى", description: "أتمتة العمليات وتقليل الأخطاء وزيادة الإنتاجية" },
        { id: "decisions", icon: "decisions", title: "قرارات أفضل", description: "تقارير فورية ولوحات تحكم تساعدك على اتخاذ القرار" },
        { id: "flexibility", icon: "flexibility", title: "مرونة وتوسع", description: "نظام قابل للتوسع مع تطور أعمالك" },
        { id: "security", icon: "security", title: "أمان وموثوقية", description: "حماية بياناتك وتنظيم صلاحيات الموظفين" },
        { id: "support", icon: "support", title: "دعم مستمر", description: "فريق دعم متخصص يرافقك في كل خطوة" }
      ]
    },

    sectors: {
      title: "قطاعات نخدمها",
      subtitle: "حلول مرنة للتجارة، الخدمات، التصنيع، والمؤسسات المتنامية",
      items: ["التجزئة", "الجملة", "الخدمات", "التصنيع", "المطاعم", "الصيانة", "التوزيع", "المؤسسات"]
    },

    industries: {
      title: "مصممة لتناسب طبيعة أعمال الشركات والمتاجر",
      items: [
        { id: "trade", icon: "sales", title: "شركات تجارة عامة" },
        { id: "retail", icon: "inventory", title: "متاجر ومخازن" },
        { id: "distribution", icon: "purchases", title: "شركات توزيع" },
        { id: "showrooms", icon: "customers", title: "معارض ومبيعات" },
        { id: "service", icon: "maintenance", title: "شركات صيانة وخدمات" },
        { id: "branches", icon: "operations", title: "فروع متعددة" }
      ]
    },

    howItWorks: {
      title: "من أول عملية بيع إلى التقرير النهائي — كل شيء مترابط",
      steps: [
        { id: "step-1", title: "أضف المنتجات والعملاء" },
        { id: "step-2", title: "أنشئ فاتورة أو طلب" },
        { id: "step-3", title: "يتم تحديث المخزون تلقائياً" },
        { id: "step-4", title: "تابع المدفوعات والصلاحيات" },
        { id: "step-5", title: "احصل على تقارير واضحة لصاحب العمل" }
      ]
    },

    security: {
      title: "تحكم كامل بمن يرى ماذا داخل شركتك",
      points: [
        { id: "roles", icon: "employees", text: "صلاحيات حسب دور الموظف" },
        { id: "isolation", icon: "security", text: "فصل بيانات كل شركة" },
        { id: "access", icon: "shield", text: "منع الوصول غير المصرح" },
        { id: "audit", icon: "indicators", text: "سجل تدقيق للعمليات" },
        { id: "manager", icon: "decisions", text: "تحكم المدير بما يراه كل مستخدم" }
      ]
    },

    pilot: {
      title: "مرحلة الإطلاق التجريبي للشركات المختارة",
      text: "نقبل عدداً محدوداً من الشركات في مرحلة Pilot لضمان التدريب، المتابعة، وتحسين المنصة حسب احتياجات السوق الحقيقي.",
      cta: { label: "احجز مكانك في مرحلة Pilot", href: "#contact", variant: "gold" }
    },

    faq: {
      title: "أسئلة شائعة",
      items: [
        {
          id: "faq-arabic",
          question: "هل المنصة تعمل باللغة العربية؟",
          answer: "نعم، ZA ERP مصممة بواجهة عربية كاملة مع دعم RTL لتناسب فرق العمل المحلية."
        },
        {
          id: "faq-permissions",
          question: "هل يمكن تحديد صلاحيات الموظفين؟",
          answer: "نعم، يمكنك تحديد صلاحيات كل موظف حسب دوره ومسؤولياته داخل الشركة."
        },
        {
          id: "faq-branches",
          question: "هل تدعم أكثر من فرع؟",
          answer: "نعم، يمكن إدارة فروع متعددة ومتابعة العمليات بينها حسب خطة الاشتراك."
        },
        {
          id: "faq-invoices",
          question: "هل يمكن طباعة الفواتير؟",
          answer: "نعم، يمكن إصدار وطباعة الفواتير مع بيانات شركتك وهوية الفاتورة."
        },
        {
          id: "faq-security",
          question: "هل البيانات آمنة؟",
          answer: "نعم، نطبق ضوابط وصول وصلاحيات لحماية بيانات شركتك وفصلها عن الشركات الأخرى."
        },
        {
          id: "faq-training",
          question: "هل يوجد تدريب عند الاشتراك؟",
          answer: "نعم، شركات مرحلة Pilot تحصل على تدريب وإعداد حسب حجم الفريق واحتياجاتك."
        },
        {
          id: "faq-custom",
          question: "هل يمكن تخصيص المنصة حسب الشركة؟",
          answer: "نعم، خصوصاً في خطط Enterprise ومرحلة Pilot يمكن تخصيص الإعدادات والتقارير حسب نشاطك."
        }
      ]
    },

    whatsappCta: {
      title: "هل تريد رؤية المنصة على عملك الحقيقي؟",
      text: "أرسل لنا نوع نشاطك وعدد المستخدمين، وسنرشح لك الخطة المناسبة ونوضح لك طريقة استخدام ZA ERP داخل شركتك.",
      buttonLabel: "تواصل عبر واتساب",
      message: "مرحباً، أريد معرفة كيف يمكن لـ ZA ERP أن يناسب نشاطي.\n\nنوع النشاط:\nعدد المستخدمين:"
    },

    pricing: {
      title: "اختر الخطة المناسبة لك",
      subtitle: "خطط مرنة تناسب أعمالك",
      note: "الأسعار خاصة بمرحلة الإطلاق التجريبي وقابلة للتعديل حسب حجم الشركة وعدد المستخدمين.",
      currencyNote: "الأسعار معروضة بالدولار الأمريكي (USD) خلال مرحلة Pilot.",
      plans: [
        {
          id: "starter-pilot",
          name: "Starter Pilot",
          price: 19,
          currency: "USD",
          periodLabel: "شهرياً",
          features: [
            "حتى 3 مستخدمين",
            "فرع واحد",
            "المبيعات والفواتير",
            "المنتجات والمخزون",
            "العملاء",
            "تقارير أساسية"
          ],
          cta: { label: "اطلب تجربة المنصة", href: "#contact", variant: "outline" }
        },
        {
          id: "growth-pilot",
          name: "Growth Pilot",
          price: 39,
          currency: "USD",
          periodLabel: "شهرياً",
          featured: true,
          badge: "الأكثر مناسبة",
          features: [
            "حتى 7 مستخدمين",
            "حتى فرعين",
            "كل مميزات Starter",
            "صلاحيات الموظفين",
            "تقارير مبيعات ومخزون",
            "إعدادات الفواتير",
            "دعم أسرع خلال Pilot"
          ],
          cta: { label: "اطلب تجربة المنصة", href: "#contact", variant: "gold" }
        },
        {
          id: "business-pilot",
          name: "Business Pilot",
          price: 69,
          currency: "USD",
          periodLabel: "شهرياً",
          features: [
            "حتى 15 مستخدم",
            "حتى 3 فروع",
            "كل مميزات Growth",
            "تقارير أعمال أوسع",
            "سجل تدقيق Audit",
            "صلاحيات أكثر تقدماً",
            "متابعة الفروع"
          ],
          cta: { label: "اطلب تجربة المنصة", href: "#contact", variant: "outline" }
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: null,
          customLabel: "سعر مخصص",
          features: [
            "عدد مستخدمين حسب الاتفاق",
            "عدد فروع حسب الاتفاق",
            "إعداد خاص للشركة",
            "تدريب فريق العمل",
            "خطة تشغيل مخصصة",
            "دعم متقدم"
          ],
          cta: { label: "تواصل معنا", href: "#contact", variant: "outline" }
        }
      ],
      addons: {
        title: "إضافات وخيارات",
        items: [
          { label: "مستخدم إضافي", price: "$4 / شهر" },
          { label: "فرع إضافي", price: "$10 / شهر" },
          { label: "إعداد وتدريب Pilot", price: "$50–$150 مرة واحدة" },
          { label: "الدفع السنوي", price: "ادفع 10 أشهر واحصل على 12 شهر" }
        ]
      }
    },

    cta: {
      title: "جاهز للارتقاء بأعمالك؟",
      text: "انضم إلى الشركات التي تدير أعمالها بثقة مع ZA ERP",
      buttons: [
        { label: "احجز عرضاً تجريبياً الآن", href: "#contact", variant: "gold" },
        { label: "تواصل معنا", href: "#contact", variant: "outline" }
      ]
    },

    news: {
      title: "آخر الأخبار",
      subtitle: "تحديثات وإعلانات ZA ERP",
      items: [
        {
          id: "pilot-launch",
          title: "إطلاق مرحلة Pilot للشركات الناشئة",
          excerpt: "انضم إلى أوائل العملاء وجرّب المنصة بأسعار تجريبية مرنة.",
          slug: "pilot-launch",
          publishedAt: "2026-01-15",
          coverImage: null,
          href: "#resources"
        },
        {
          id: "modules-update",
          title: "وحدات جديدة قيد التطوير",
          excerpt: "نعمل على توسيع وحدات العمليات والمؤشرات خلال الربع القادم.",
          slug: "modules-update",
          publishedAt: "2026-02-01",
          coverImage: null,
          href: "#resources"
        }
      ]
    },

    video: {
      title: "شاهد ZA ERP في العمل",
      placeholder: "الفيديو التوضيحي قريباً",
      url: null,
      thumbnail: null
    },

    contact: {
      title: "احجز عرضاً تجريبياً",
      subtitle: "املأ النموذج وسنفتح محادثة واتساب مع تفاصيل طلبك.",
      submitLabel: "إرسال عبر واتساب",
      activityOptions: ["تجارة تجزئة", "تجارة جملة", "مطعم / مقهى", "خدمات", "تصنيع", "أخرى"],
      userCountOptions: [
        { label: "1–3", value: "1-3" },
        { label: "4–10", value: "4-10" },
        { label: "11–25", value: "11-25" },
        { label: "26+", value: "26+" }
      ],
      fields: [
        { id: "name", label: "الاسم", type: "text", required: true },
        { id: "company", label: "اسم الشركة", type: "text", required: true },
        { id: "phone", label: "رقم الهاتف", type: "tel", required: true },
        { id: "activity", label: "نوع النشاط", type: "select-activity", required: true },
        { id: "users", label: "عدد المستخدمين المتوقع", type: "select-users", required: true },
        { id: "message", label: "رسالة", type: "textarea", required: true }
      ]
    },

    footer: {
      description: "منصة سحابية متكاملة لإدارة أعمالك بكفاءة، تدعم نموك اليوم وتخطط لمستقبلك.",
      columns: [
        {
          title: "المنتج",
          links: [
            { label: "المميزات", href: "#features" },
            { label: "الوحدات", href: "#features" },
            { label: "التكاملات", href: "#sectors" },
            { label: "الأسعار", href: "#pricing" }
          ]
        },
        {
          title: "الموارد",
          links: [
            { label: "المدونة", href: "#resources" },
            { label: "الأدلة", href: "#resources" },
            { label: "الأسئلة الشائعة", href: "#faq" },
            { label: "مركز الدعم", href: "#contact" }
          ]
        },
        {
          title: "الشركة",
          links: [
            { label: "من نحن", href: "#about" },
            { label: "الوظائف", href: "#about" },
            { label: "الأخبار", href: "#resources" },
            { label: "تواصل معنا", href: "#contact" }
          ]
        }
      ],
      contact: {
        email: "info@zaitoonerp.com",
        phone: "+964 780 850 0591",
        phoneHref: "tel:+9647808500591",
        location: "بغداد، العراق"
      },
      social: [
        { id: "linkedin", label: "LinkedIn", href: "#" },
        { id: "youtube", label: "YouTube", href: "#" },
        { id: "x", label: "X", href: "#" },
        { id: "facebook", label: "Facebook", href: "#" }
      ],
      platformLoginLabel: "تسجيل الدخول للمنصة"
    },

    media: {
      logoDark: "assets/za-erp-logo-dark.png",
      logoLight: "assets/za-erp-logo-light.png",
      logoMonogram: "assets/za-erp-monogram.png",
      heroMockupImage: null,
      whyEmblemImage: null,
      ogImage: "assets/za-erp-logo-dark.png"
    }
  };

  global.HOMEPAGE_CONTENT = HOMEPAGE_CONTENT;
})(typeof window !== "undefined" ? window : globalThis);
