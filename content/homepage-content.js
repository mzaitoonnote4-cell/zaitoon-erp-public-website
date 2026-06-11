/**
 * ZA ERP — Public homepage content (single source of truth)
 * Edit this file to change marketing copy until the Website Admin CMS is built.
 * Type definitions: src/content/public-homepage.ts
 */
(function (global) {
  "use strict";

  var LOCALE_AR = {
    settings: {
      copyrightText: "© 2026 ZA ERP. جميع الحقوق محفوظة."
    },

    seo: {
      title: "ZA ERP | نظام عربي متكامل لإدارة الأعمال",
      description:
        "ZA ERP منصة عربية سحابية لإدارة المبيعات، المخزون، المشتريات، المالية، العملاء، الموظفين، الصيانة، العمليات والتقارير من مكان واحد.",
      ogImage: "https://zaitoonerp.com/assets/og-image.png"
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
      { id: "sectors", label: "القطاعات", href: "#industries", section: "industries" },
      { id: "pricing", label: "الأسعار", href: "#pricing", section: "pricing" },
      { id: "resources", label: "الموارد", href: "#resources", section: "resources" },
      { id: "about", label: "من نحن", href: "about.html", section: "about" }
    ],

    headerCtas: [
      {
        label: "تسجيل الدخول",
        href: "https://erpv1.zaitoonerp.com/",
        variant: "ghost",
        external: true
      },
      {
        label: "اطلب تجربة الآن",
        href: "#contact",
        variant: "gold"
      }
    ],

    hero: {
      eyebrow: "ادخل إلى عالم إدارة شركتك باحترافية",
      headlineBefore: "حوّل إدارة شركتك إلى مركز قيادة واضح مع",
      headlineHighlight: "ZA ERP",
      subtitle:
        "منصة عربية سحابية تساعدك على ربط المبيعات، المخزون، العملاء، الموظفين، الصلاحيات، والتقارير في تجربة واحدة منظمة.",
      ctas: [
        { label: "اطلب تجربة الآن", href: "#contact", variant: "gold" },
        { label: "شاهد كيف تعمل المنصة", href: "#getting-started", variant: "outline" }
      ],
      trustBadges: [
        { icon: "decisions", label: "تجربة Pilot منظمة" },
        { icon: "flexibility", label: "واجهة عربية وإنكليزية" },
        { icon: "shield", label: "صلاحيات حسب الدور" },
        { icon: "indicators", label: "تقارير أوضح لصاحب العمل" }
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
      },
      dataChips: [
        { id: "sales", label: "مبيعات مباشرة", position: "top-start" },
        { id: "stock", label: "مخزون محدث", position: "top-end" },
        { id: "perms", label: "صلاحيات آمنة", position: "bottom-start" },
        { id: "reports", label: "تقارير فورية", position: "bottom-end" }
      ]
    },

    whyNow: {
      title: "لماذا الآن؟",
      text:
        "كلما زادت الفواتير، المنتجات، الموظفون، والفروع، يصبح الاعتماد على الدفاتر و Excel وحده أصعب. ZA ERP يساعدك على الانتقال تدريجياً إلى إدارة أوضح قبل أن تصبح الفوضى مكلفة.",
      cards: [
        { icon: "flexibility", title: "نمو العمل يحتاج نظاماً أوضح" },
        { icon: "efficiency", title: "الأخطاء الصغيرة قد تصبح مكلفة" },
        { icon: "indicators", title: "القرارات تحتاج بيانات أسرع" }
      ]
    },

    interactiveProductTour: {
      title: "اختر نوع نشاطك وشاهد كيف تساعدك ZA ERP",
      subtitle:
        "تعرّف على طريقة استخدام ZA ERP حسب طبيعة عملك، من المبيعات والمخزون إلى الصلاحيات والتقارير.",
      labels: {
        challenge: "التحدي",
        helps: "كيف تساعد ZA ERP",
        result: "النتيجة"
      },
      workflowDefault: ["البيع / الطلب", "المخزون", "العملاء", "التقارير"],
      businessTypes: [
        {
          id: "trading",
          label: "تجارة عامة",
          scenario: {
            challenge:
              "متابعة الفواتير، العملاء، والمخزون قد تصبح متفرقة بين الدفاتر و Excel.",
            helps: "تنظيم المبيعات، العملاء، المنتجات، والمدفوعات داخل تجربة واحدة.",
            result: "رؤية أوضح للمبيعات والمتبقي والمخزون."
          }
        },
        {
          id: "store",
          label: "متجر أو مخزن",
          scenario: {
            challenge: "صعوبة معرفة الكمية المتوفرة وتحديث المخزون بعد كل عملية.",
            helps: "ربط الفواتير بحركة المخزون ومتابعة المنتجات بشكل أوضح.",
            result: "تقليل الفوضى وتحسين متابعة المخزون اليومي."
          }
        },
        {
          id: "distribution",
          label: "توزيع",
          scenario: {
            challenge:
              "متابعة العملاء، التحصيل، والطلبيات تصبح أصعب مع كثرة الحركة اليومية.",
            helps: "تنظيم بيانات العملاء والفواتير والمتبقي بطريقة أوضح.",
            result: "متابعة أفضل للعملاء والتحصيل والمبيعات."
          }
        },
        {
          id: "service",
          label: "صيانة وخدمات",
          scenario: {
            challenge:
              "تداخل طلبات الخدمة، قطع الغيار، والفوترة قد يسبب تأخيراً أو ضياع تفاصيل.",
            helps: "تنظيم أوامر الخدمة وربط العمل بالفواتير والمواد المستخدمة.",
            result: "تجربة أوضح بين الاستلام، الصيانة، والفوترة."
          },
          workflow: ["طلب الخدمة", "التشخيص", "المواد / العمل", "الفوترة"]
        },
        {
          id: "multi-branch",
          label: "شركة متعددة الفروع",
          scenario: {
            challenge:
              "متابعة أكثر من فرع وموظف بدون صلاحيات واضحة قد يضعف السيطرة.",
            helps: "توزيع الصلاحيات حسب الدور ومتابعة العمل من مكان واحد.",
            result: "رؤية إدارية أوضح بين الفروع والمستخدمين."
          }
        }
      ],
      cta: {
        text: "هل تريد رؤية طريقة أقرب لنشاطك؟",
        button: {
          label: "اطلب تجربة حسب نوع نشاطك",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    whatYouGain: {
      title: "ماذا تكسب عند تنظيم عملك داخل ZA ERP؟",
      cards: [
        { icon: "sales", title: "رؤية أوضح للمبيعات" },
        { icon: "inventory", title: "متابعة أفضل للمخزون" },
        { icon: "employees", title: "صلاحيات منظمة للموظفين" },
        { icon: "indicators", title: "تقارير تساعد صاحب القرار" },
        { icon: "decisions", title: "تجربة مناسبة لمرحلة Pilot" },
        { icon: "operations", title: "قابلية للتوسع مع نمو الشركة" }
      ]
    },

    intelligenceStrip: {
      label: "حالة المنصة",
      items: [
        "تحديثات فورية",
        "صلاحيات حسب الدور",
        "تقارير لحظية",
        "متابعة الفروع",
        "سجل تدقيق",
        "جاهز للتوسع"
      ]
    },

    beforeAfter: {
      title: "قبل ZA ERP وبعد ZA ERP",
      before: {
        label: "قبل",
        items: [
          "فواتير متفرقة",
          "مخزون غير واضح",
          "صلاحيات غير منظمة",
          "تقارير متأخرة",
          "قرارات تعتمد على التخمين"
        ]
      },
      after: {
        label: "بعد",
        items: [
          "مبيعات واضحة",
          "مخزون محدث",
          "صلاحيات دقيقة",
          "تقارير لحظية",
          "قرارات مبنية على بيانات"
        ]
      }
    },

    commandCenter: {
      title: "مركز قيادة شركتك في شاشة واحدة",
      text:
        "تخيل أن كل قسم في شركتك أمامك الآن: المبيعات، المخزون، العملاء، الموظفون، المصاريف، التقارير، والصلاحيات. كل شيء مترابط، واضح، وجاهز لاتخاذ القرار.",
      hubLabel: "ZA ERP",
      nodes: [
        { id: "customers", label: "العملاء", position: "n" },
        { id: "sales", label: "المبيعات", position: "ne" },
        { id: "inventory", label: "المخزون", position: "e" },
        { id: "finance", label: "المالية", position: "se" },
        { id: "employees", label: "الموظفون", position: "s" },
        { id: "reports", label: "التقارير", position: "sw" },
        { id: "permissions", label: "الصلاحيات", position: "w" }
      ]
    },

    productTeaser: {
      title: "لمحة من داخل المنصة",
      subtitle: "استكشف ما ستراه داخل ZA ERP — معاينة تفاعلية بدون اتصال بالنظام",
      tabs: [
        {
          id: "sales",
          label: "المبيعات",
          headline: "متابعة المبيعات والتحصيل",
          description: "تابع الفواتير، المدفوعات، المتبقي، وحالة كل عملية بيع.",
          highlights: ["فواتير اليوم", "المتبقي على العملاء", "حالة التحصيل"]
        },
        {
          id: "inventory",
          label: "المخزون",
          headline: "رؤية المخزون لحظياً",
          description: "راقب الكميات، التنبيهات، حركة المخزون، والفروع.",
          highlights: ["كميات حسب الفرع", "تنبيهات النقص", "حركات الدخول والخروج"]
        },
        {
          id: "customers",
          label: "العملاء",
          headline: "ملف العميل الكامل",
          description: "اعرف سجل التعاملات، الفواتير، والمدفوعات لكل عميل في مكان واحد.",
          highlights: ["سجل الفواتير", "الرصيد المتبقي", "آخر تعامل"]
        },
        {
          id: "permissions",
          label: "الصلاحيات",
          headline: "تحكم حسب الدور",
          description: "حدد من يرى ماذا حسب دور الموظف ومسؤوليته.",
          highlights: ["أدوار مخصصة", "منع الوصول", "سجل التعديلات"]
        },
        {
          id: "reports",
          label: "التقارير",
          headline: "تقارير لصاحب العمل",
          description: "لوحات ومؤشرات تساعدك على فهم الأداء دون الغرق في التفاصيل.",
          highlights: ["مبيعات الفترة", "أداء الفروع", "ملخص مالي"]
        }
      ]
    },

    ownerView: {
      title: "مصمم لصاحب العمل قبل أي شخص آخر",
      points: [
        "تعرف أين تذهب أموالك",
        "تعرف من باع ومن استلم ومن عدّل",
        "تراقب المخزون قبل حصول المشكلة",
        "تتابع أداء الموظفين بدون تعقيد",
        "ترى الصورة الكاملة بدل التفاصيل المتفرقة"
      ],
      cta: {
        label: "شاهد كيف يمكن أن تبدو شركتك داخل ZA ERP",
        href: "#contact",
        variant: "gold"
      }
    },

    pilotUrgencyCta: {
      title: "لا تنتظر حتى تكبر الفوضى داخل شركتك",
      text:
        "ابدأ بمرحلة Pilot وشاهد كيف يمكن لـ ZA ERP أن ينظم عملك اليومي، يقلل الأخطاء، ويمنحك رؤية أوضح لاتخاذ القرار.",
      note: "عدد محدود من الشركات في مرحلة الإطلاق التجريبي لضمان المتابعة والتدريب.",
      buttons: [
        { label: "احجز عرضاً تجريبياً الآن", href: "#contact", variant: "gold" },
        { label: "تواصل عبر واتساب", href: "#whatsapp-cta", variant: "outline" }
      ]
    },

    modules: {
      title: "كل ما تحتاجه في نظام واحد",
      subtitle: "إدارة متكاملة لكل أقسام أعمالك",
      items: [
        { id: "customers", icon: "customers", title: "العملاء", description: "إدارة بيانات العملاء، المتابعة، وسجل التعاملات في مكان واحد.", hoverHint: "متصل بالفواتير وسجل التعاملات" },
        { id: "sales", icon: "sales", title: "المبيعات", description: "فواتير المبيعات، العروض، والمتابعة اليومية بسهولة.", hoverHint: "متصل بالفواتير والتقارير" },
        { id: "purchases", icon: "purchases", title: "المشتريات", description: "طلبات الشراء، الموردين، والتكاليف تحت السيطرة.", hoverHint: "مرتبط بالمخزون والتكاليف" },
        { id: "inventory", icon: "inventory", title: "المخزون", description: "تتبع الكميات، التنبيهات، والحركات بين المواقع.", hoverHint: "مرتبط بالمخزون والصلاحيات" },
        { id: "finance", icon: "finance", title: "المالية", description: "محاسبة، ذمم، وتقارير مالية واضحة لصاحب العمل.", hoverHint: "متصل بالتحصيل والتقارير" },
        { id: "expenses", icon: "expenses", title: "المصاريف", description: "تسجيل المصروفات وتصنيفها لرؤية أوضح للتكاليف.", hoverHint: "مرتبط بالمالية والتقارير" },
        { id: "employees", icon: "employees", title: "الموظفون", description: "إدارة الفريق، الصلاحيات، والحضور بمرونة.", hoverHint: "مرتبط بالصلاحيات والفروع" },
        { id: "maintenance", icon: "maintenance", title: "الصيانة والخدمات", description: "طلبات الصيانة، الجدولة، ومتابعة الخدمات.", hoverHint: "متصل بالعمليات والعملاء" },
        { id: "operations", icon: "operations", title: "العمليات", description: "تنسيق العمليات اليومية والمهام بين الأقسام.", hoverHint: "يربط الأقسام في مسار واحد" },
        { id: "indicators", icon: "indicators", title: "المؤشرات", description: "لوحات معلومات ومؤشرات أداء لحظية لقرارات أذكى.", hoverHint: "متصل بكل وحدات النظام" }
      ],
      footerCta: { label: "استكشف جميع المميزات", href: "#features", variant: "outline" }
    },

    why: {
      title: "لماذا تختار",
      titleHighlight: "ZA ERP",
      titleSuffix: "؟",
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
      title: "لمن صُممت ZA ERP؟",
      subtitle:
        "منصة مرنة تناسب الشركات والمتاجر التي تحتاج إلى إدارة أوضح للمبيعات، المخزون، العملاء، الموظفين، والصلاحيات.",
      categories: [
        { id: "trade-sales", label: "تجارة ومبيعات" },
        { id: "inventory-distribution", label: "مخزون وتوزيع" },
        { id: "service-maintenance", label: "خدمات وصيانة" },
        { id: "management-permissions", label: "إدارة وصلاحيات" }
      ],
      items: [
        {
          id: "trading",
          icon: "sales",
          category: "trade-sales",
          visible: true,
          title: "شركات التجارة العامة",
          description:
            "إدارة المبيعات، العملاء، الفواتير، المخزون، والتحصيل من مكان واحد."
        },
        {
          id: "stores",
          icon: "inventory",
          category: "inventory-distribution",
          visible: true,
          title: "المتاجر والمخازن",
          description:
            "متابعة المنتجات والكميات والتنبيهات وحركة المخزون بشكل أوضح."
        },
        {
          id: "distribution",
          icon: "purchases",
          category: "inventory-distribution",
          visible: true,
          title: "شركات التوزيع",
          description:
            "تنظيم الطلبات، العملاء، الفروع، التوصيل، ومتابعة التحصيل."
        },
        {
          id: "showrooms",
          icon: "customers",
          category: "trade-sales",
          visible: true,
          title: "معارض ومراكز البيع",
          description:
            "إدارة عمليات البيع اليومية، الفواتير، العملاء، والموظفين بسهولة."
        },
        {
          id: "service",
          icon: "maintenance",
          category: "service-maintenance",
          visible: true,
          title: "شركات الصيانة والخدمات",
          description:
            "تنظيم طلبات الخدمة، قطع الغيار، الفنيين، الفوترة، ومتابعة الحالة."
        },
        {
          id: "multi-branch",
          icon: "operations",
          category: "management-permissions",
          visible: true,
          title: "الشركات متعددة الفروع",
          description:
            "متابعة المبيعات والمخزون والصلاحيات لكل فرع من لوحة واحدة."
        },
        {
          id: "smb",
          icon: "flexibility",
          category: "management-permissions",
          visible: true,
          title: "المشاريع الصغيرة والمتوسطة",
          description:
            "حل عملي للشركات التي تريد الانتقال من الدفاتر و Excel إلى نظام واضح."
        },
        {
          id: "permissions",
          icon: "security",
          category: "management-permissions",
          visible: true,
          title: "الشركات التي تحتاج صلاحيات دقيقة",
          description:
            "تحديد من يرى ماذا داخل الشركة حسب الدور والمسؤولية."
        }
      ],
      cta: {
        text: "هل تريد معرفة هل المنصة مناسبة لنشاطك؟",
        button: {
          label: "اطلب تقييم أولي لنشاطك",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    gettingStarted: {
      title: "كيف تبدأ مع ZA ERP؟",
      subtitle:
        "خطوات بسيطة تساعدك على الانتقال من الإدارة التقليدية إلى نظام واضح ومنظم.",
      steps: [
        {
          id: "contact",
          title: "تواصل معنا",
          description:
            "أرسل لنا نوع نشاطك وعدد المستخدمين والفروع المتوقعة."
        },
        {
          id: "understand",
          title: "نفهم طريقة عملك",
          description:
            "نراجع احتياجاتك الأساسية في المبيعات، المخزون، العملاء، الصلاحيات، والتقارير."
        },
        {
          id: "pilot",
          title: "نجهز تجربة Pilot",
          description:
            "نساعدك على تجربة المنصة بشكل مناسب لحجم شركتك وطبيعة نشاطك."
        },
        {
          id: "train",
          title: "ندرب فريقك",
          description:
            "نوضح طريقة استخدام النظام للموظفين حسب أدوارهم ومسؤولياتهم."
        },
        {
          id: "manage",
          title: "تبدأ الإدارة الفعلية",
          description:
            "تبدأ بمتابعة المبيعات، المخزون، العملاء، والصلاحيات من لوحة واحدة."
        }
      ],
      cta: {
        text: "اطلب تقييم أولي لنشاطك",
        button: {
          label: "ابدأ بتجربة Pilot منظمة",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    useCaseTeaser: {
      title: "شاهد مثالاً عملياً لطريقة استخدام ZA ERP",
      text:
        "تعرف على سيناريو توضيحي يشرح كيف يمكن تنظيم المبيعات، المخزون، العملاء، والصلاحيات داخل المنصة.",
      button: {
        label: "عرض المثال التطبيقي",
        href: "use-case.html",
        variant: "gold"
      }
    },

    roadmapTeaser: {
      title: "خطة تطوير مستمرة",
      text: "تعرف على الاتجاهات القادمة لتطوير ZA ERP والموقع الرئيسي.",
      button: {
        label: "عرض خطة التطوير",
        href: "roadmap.html",
        variant: "gold"
      }
    },

    trustSecurity: {
      title: "الثقة والأمان في ZA ERP",
      text: "تعرف على طريقة تعامل ZA ERP مع الخصوصية، الصلاحيات، وفصل بيانات الشركات.",
      button: {
        label: "عرض مركز الثقة والأمان",
        href: "trust-security.html",
        variant: "gold"
      }
    },

    traditionalVsZaerp: {
      title: "لماذا تنتقل من Excel والدفاتر إلى ZA ERP؟",
      subtitle:
        "عندما تكبر العمليات اليومية، تصبح الدفاتر والجداول وحدها غير كافية لمتابعة المبيعات، المخزون، العملاء، والصلاحيات بوضوح.",
      before: {
        label: "الإدارة التقليدية",
        items: [
          "بيانات متفرقة بين الدفاتر و Excel",
          "صعوبة معرفة المخزون الحقيقي",
          "أخطاء متكررة في الفواتير أو التحديثات",
          "لا توجد صلاحيات واضحة للموظفين",
          "صعوبة متابعة المتبقي على العملاء",
          "التقارير تحتاج وقتاً وجهداً",
          "متابعة الفروع تصبح أكثر تعقيداً"
        ]
      },
      after: {
        label: "مع ZA ERP",
        items: [
          "بيانات منظمة في مكان واحد",
          "ربط أوضح بين الفواتير والمخزون",
          "متابعة العملاء والمدفوعات بشكل أفضل",
          "صلاحيات حسب دور الموظف",
          "تقارير تساعد صاحب العمل على المتابعة",
          "رؤية أوضح للمبيعات والمخزون",
          "قابلية للتوسع مع نمو الشركة"
        ]
      },
      signs: {
        title: "متى تعرف أن شركتك تحتاج نظاماً أوضح؟",
        items: [
          "عندما يصعب معرفة المخزون الحقيقي بسرعة",
          "عندما تتأخر التقارير اليومية أو الشهرية",
          "عندما يعتمد العمل على شخص واحد يعرف كل التفاصيل",
          "عندما لا تعرف من عدّل أو باع أو استلم",
          "عندما تبدأ الفروع أو الموظفون بالزيادة",
          "عندما تصبح الأخطاء المتكررة مكلفة"
        ]
      },
      cta: {
        text: "إذا بدأت تشعر أن الدفاتر والجداول لم تعد كافية، فقد يكون الوقت مناسباً لتجربة ZA ERP.",
        button: {
          label: "اكتشف كيف يمكن تنظيم عملك",
          href: "#contact",
          variant: "gold"
        }
      }
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

    systemFlow: {
      title: "من البيع إلى المخزون إلى التحصيل إلى التقارير",
      subtitle: "مسار عمليات مترابط داخل منصة واحدة",
      nodes: [
        { id: "customer", label: "عميل" },
        { id: "invoice", label: "فاتورة" },
        { id: "inventory", label: "مخزون" },
        { id: "collection", label: "تحصيل" },
        { id: "report", label: "تقرير" },
        { id: "decision", label: "قرار إداري" }
      ]
    },

    productDepth: {
      title: "ليست صفحة فقط — منصة أعمال قابلة للتوسع",
      items: [
        { id: "saas", icon: "operations", title: "بنية SaaS قابلة للتوسع" },
        { id: "perms", icon: "shield", title: "صلاحيات متعددة المستويات" },
        { id: "rtl", icon: "flexibility", title: "واجهة عربية RTL" },
        { id: "live", icon: "indicators", title: "تقارير لحظية" },
        { id: "cms-ready", icon: "decisions", title: "جاهزية مستقبلية للوحة تحكم الموقع" },
        { id: "future", icon: "efficiency", title: "ربط مستقبلي مع أدوات الإدارة والتحليلات" }
      ]
    },

    security: {
      title: "ثقة وأمان وتنظيم صلاحيات",
      matrixTitle: "أمان وصلاحيات مصممة للشركات",
      showMatrix: true,
      points: [
        { id: "isolation", icon: "security", text: "فصل بيانات كل شركة" },
        { id: "roles", icon: "employees", text: "صلاحيات حسب دور الموظف" },
        { id: "domain", icon: "shield", text: "دخول المنصة عبر نطاق منفصل" },
        { id: "legal", icon: "decisions", text: "صفحات خصوصية وشروط واضحة" },
        { id: "analytics", icon: "indicators", text: "تحليلات زيارات بدون بيع بيانات الزوار" },
        { id: "scaling", icon: "flexibility", text: "تصميم يراعي التوسع التدريجي" }
      ],
      matrix: {
        columns: ["المبيعات", "المخزون", "التقارير", "الإعدادات"],
        rows: [
          { role: "المدير", access: ["full", "full", "full", "full"] },
          { role: "المبيعات", access: ["full", "view", "view", "lock"] },
          { role: "المخزون", access: ["view", "full", "view", "lock"] },
          { role: "المحاسبة", access: ["view", "view", "full", "lock"] },
          { role: "التوصيل", access: ["view", "view", "lock", "lock"] }
        ]
      }
    },

    pilot: {
      title: "مرحلة Pilot للشركات المختارة",
      subtitle:
        "ابدأ تجربة ZA ERP بطريقة منظمة تساعدنا على فهم نشاطك وتجهيز المنصة بما يناسب احتياجك الفعلي.",
      valueCards: [
        {
          id: "understand",
          title: "فهم نشاطك أولاً",
          description:
            "نبدأ بمراجعة نوع نشاطك، عدد المستخدمين، الفروع، وطريقة عمل الفريق اليومية."
        },
        {
          id: "setup",
          title: "تجهيز تجربة مناسبة",
          description:
            "نساعدك على تجربة المنصة بناءً على احتياجك الأساسي في المبيعات، المخزون، العملاء، الصلاحيات، أو التقارير."
        },
        {
          id: "train",
          title: "تدريب الفريق",
          description:
            "نوضح طريقة استخدام النظام للموظفين حسب أدوارهم، حتى لا تكون التجربة مجرد دخول للنظام بدون فهم."
        },
        {
          id: "followup",
          title: "متابعة أولية",
          description:
            "نراجع الملاحظات الأولى ونساعدك على فهم كيف يمكن تحسين طريقة العمل داخل الشركة."
        },
        {
          id: "decide",
          title: "قرار أوضح للتوسع",
          description:
            "بعد التجربة، تستطيع تقييم مدى ملاءمة ZA ERP قبل التوسع في الاستخدام أو إضافة فروع ومستخدمين."
        }
      ],
      whatYouGet: {
        title: "ماذا تحصل خلال مرحلة Pilot؟",
        items: [
          "مراجعة أولية لطريقة عمل شركتك",
          "اقتراح الباقة أو الخطة الأنسب",
          "تجهيز تجربة مناسبة لحجم العمل",
          "توضيح طريقة استخدام المنصة",
          "متابعة الملاحظات قبل التوسع"
        ]
      },
      whoItFits: {
        title: "لمن تناسب مرحلة Pilot؟",
        items: [
          "شركة تريد الانتقال من الدفاتر أو Excel إلى نظام واضح",
          "صاحب عمل يريد متابعة المبيعات والمخزون بشكل أفضل",
          "فريق يحتاج صلاحيات منظمة حسب المسؤوليات",
          "شركة تريد تجربة المنصة قبل التوسع",
          "نشاط لديه فروع أو موظفون ويريد رؤية أوضح"
        ]
      },
      cta: {
        text: "ابدأ بتجربة Pilot منظمة",
        button: {
          label: "اطلب تقييم أولي لنشاطك",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    faq: {
      title: "أسئلة شائعة قبل تجربة ZA ERP",
      subtitle:
        "إجابات واضحة على أكثر الأسئلة التي قد تساعدك قبل طلب تجربة المنصة.",
      categories: [
        { id: "pilot-subscription", label: "التجربة والاشتراك" },
        { id: "features-permissions", label: "المميزات والصلاحيات" },
        { id: "branches-operations", label: "الفروع والتشغيل" },
        { id: "security-support", label: "الأمان والدعم" }
      ],
      items: [
        {
          id: "faq-suitability",
          category: "pilot-subscription",
          visible: true,
          question: "هل ZA ERP مناسب لشركتي؟",
          answer:
            "نعم، إذا كنت تحتاج إلى إدارة أوضح للمبيعات، المخزون، العملاء، الموظفين، الصلاحيات، والتقارير. يتم تقييم الملاءمة حسب نوع نشاطك وحجم العمل قبل بدء التجربة."
        },
        {
          id: "faq-pilot",
          category: "pilot-subscription",
          visible: true,
          question: "هل يمكن تجربة المنصة قبل الاشتراك؟",
          answer:
            "نعم، يمكن البدء بمرحلة Pilot للشركات المختارة حتى يتم فهم طريقة العمل وتجربة المنصة بشكل عملي قبل التوسع."
        },
        {
          id: "faq-arabic",
          category: "features-permissions",
          visible: true,
          question: "هل المنصة تدعم اللغة العربية؟",
          answer:
            "نعم، ZA ERP مصممة بواجهة عربية RTL، كما يدعم الموقع الرئيسي اللغة العربية والإنكليزية."
        },
        {
          id: "faq-permissions",
          category: "features-permissions",
          visible: true,
          question: "هل يمكن تحديد صلاحيات الموظفين؟",
          answer:
            "نعم، يمكن تنظيم الصلاحيات حسب دور الموظف ومسؤوليته، مثل المبيعات، المخزون، الإدارة، التقارير، أو التوصيل."
        },
        {
          id: "faq-branches",
          category: "branches-operations",
          visible: true,
          question: "هل تدعم المنصة أكثر من فرع؟",
          answer:
            "نعم، يمكن تجهيز المنصة للشركات التي لديها أكثر من فرع، مع متابعة المبيعات والمخزون والصلاحيات حسب الهيكل المطلوب."
        },
        {
          id: "faq-training",
          category: "branches-operations",
          visible: true,
          question: "هل يوجد تدريب عند بدء الاستخدام؟",
          answer:
            "نعم، ضمن مرحلة التجربة أو التشغيل يتم توضيح طريقة استخدام النظام للفريق حسب أدوارهم ومسؤولياتهم."
        },
        {
          id: "faq-pricing",
          category: "pilot-subscription",
          visible: true,
          question: "هل الأسعار ثابتة؟",
          answer:
            "الأسعار الحالية خاصة بمرحلة الإطلاق التجريبي وقد تختلف حسب عدد المستخدمين، الفروع، حجم الشركة، أو متطلبات التشغيل."
        },
        {
          id: "faq-custom",
          category: "features-permissions",
          visible: true,
          question: "هل يمكن تخصيص المنصة حسب احتياج الشركة؟",
          answer:
            "يمكن دراسة بعض الاحتياجات الخاصة، لكن يتم تنفيذ التخصيصات تدريجياً وبحسب الأولوية الفنية والتجارية، وليس بشكل عشوائي."
        },
        {
          id: "faq-security",
          category: "security-support",
          visible: true,
          question: "هل بيانات الشركة آمنة؟",
          answer:
            "تم تصميم المنصة بفكرة فصل بيانات الشركات وتنظيم الصلاحيات. كما يتم التعامل مع خصوصية البيانات كجزء أساسي من تشغيل النظام."
        },
        {
          id: "faq-after-demo",
          category: "pilot-subscription",
          visible: true,
          question: "ماذا يحدث بعد طلب التجربة؟",
          answer:
            "يتم التواصل معك لفهم نوع النشاط وعدد المستخدمين والفروع، ثم يتم توضيح الخطة المناسبة لتجربة المنصة."
        },
        {
          id: "faq-technical",
          category: "branches-operations",
          visible: true,
          question: "هل أحتاج إلى خبرة تقنية لاستخدام ZA ERP؟",
          answer:
            "لا، الهدف أن تكون المنصة واضحة لفريق العمل اليومي. يتم شرح طريقة الاستخدام حسب دور كل موظف."
        },
        {
          id: "faq-mobile",
          category: "branches-operations",
          visible: true,
          question: "هل يمكن استخدام المنصة من الهاتف؟",
          answer:
            "المنصة والموقع يدعمان تجربة استخدام حديثة، ويتم الاهتمام بتحسين العرض على الموبايل، لكن بعض أعمال الإدارة الكبيرة تكون أفضل من الكمبيوتر أو التابلت."
        }
      ],
      cta: {
        text: "هل تريد معرفة هل المنصة مناسبة لنشاطك؟",
        button: {
          label: "اطلب تقييم أولي لنشاطك",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    whatsappCta: {
      title: "هل تريد رؤية المنصة على عملك الحقيقي؟",
      text: "أرسل لنا نوع نشاطك وعدد المستخدمين، وسنرشح لك الخطة المناسبة ونوضح لك طريقة استخدام ZA ERP داخل شركتك.",
      buttonLabel: "تواصل عبر واتساب",
      message: "مرحباً، أريد معرفة كيف يمكن لـ ZA ERP أن يناسب نشاطي.\n\nنوع النشاط:\nعدد المستخدمين:"
    },

    pricing: {
      title: "اختر الباقة المناسبة لمرحلة Pilot",
      subtitle:
        "ابدأ بالباقة الأقرب لحجم شركتك، ويمكن تعديل الخطة حسب عدد المستخدمين والفروع واحتياج التشغيل.",
      note: "الأسعار خاصة بمرحلة الإطلاق التجريبي وقابلة للتعديل حسب حجم الشركة وعدد المستخدمين.",
      pilotPlansNote: "باقات الإطلاق التجريبي — قابلة للتخصيص حسب حجم الشركة",
      pilotTrustNote:
        "الأسعار خاصة بمرحلة الإطلاق التجريبي وقد يتم تعديلها حسب حجم الشركة ومتطلبات التشغيل.",
      subscriptionTrustNote:
        "الاشتراك لا يعني شراء نظام فقط، بل بداية تنظيم حقيقي لطريقة إدارة شركتك.",
      currencyNote: "الأسعار معروضة بالدولار الأمريكي (USD) خلال مرحلة Pilot.",
      helper: {
        title: "غير متأكد من الباقة المناسبة؟",
        text: "أرسل لنا نوع نشاطك وعدد المستخدمين والفروع، وسنساعدك على اختيار الباقة الأنسب لمرحلة Pilot.",
        button: {
          label: "ساعدني في اختيار الباقة",
          href: "#contact",
          variant: "gold"
        }
      },
      cta: {
        text: "هل تريد معرفة هل المنصة مناسبة لنشاطك؟",
        button: {
          label: "اطلب تقييم أولي لنشاطك",
          href: "#contact",
          variant: "gold"
        }
      },
      plans: [
        {
          id: "starter-pilot",
          name: "Starter Pilot",
          price: 19,
          currency: "USD",
          periodLabel: "شهرياً",
          suitableFor: {
            label: "مناسبة لـ:",
            items: [
              "مشروع صغير أو بداية تجربة",
              "فرع واحد",
              "فريق صغير",
              "مبيعات ومخزون أساسي"
            ]
          },
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
          badge: "موصى به",
          suitableFor: {
            label: "مناسبة لـ:",
            items: [
              "شركة لديها فريق يومي",
              "أكثر من مستخدم",
              "صلاحيات موظفين",
              "تقارير ومتابعة مخزون"
            ]
          },
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
          suitableFor: {
            label: "مناسبة لـ:",
            items: [
              "شركة تحتاج متابعة أوسع",
              "أكثر من فرع",
              "صلاحيات وتقارير أعمق",
              "إدارة تشغيل أوضح"
            ]
          },
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
          suitableFor: {
            label: "مناسبة لـ:",
            items: [
              "شركات تحتاج إعداد خاص",
              "عدد مستخدمين أو فروع أكبر",
              "متطلبات تشغيل متقدمة",
              "متابعة ودعم مخصص"
            ]
          },
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
      text: "ابدأ بتقييم أولي لنشاطك واكتشف كيف يمكن أن يساعدك ZA ERP على تنظيم عملك تدريجياً.",
      buttons: [
        { label: "اطلب تجربة الآن", href: "#contact", variant: "gold" },
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
          excerpt: "يمكن للشركات المختارة البدء بتجربة Pilot بأسعار إطلاق مرنة.",
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
      title: "ابدأ الآن بتقييم أولي لنشاطك",
      subtitle:
        "أرسل لنا تفاصيل نشاطك وسنساعدك على فهم الباقة الأنسب وطريقة بدء تجربة Pilot.",
      submitLabel: "إرسال الطلب عبر واتساب",
      submitHelper: "سنراجع المعلومات ونوضح لك الخطوة المناسبة.",
      privacyNote:
        "لن يتم إرسال بياناتك إلى قاعدة بيانات من هذا النموذج. سيتم فتح رسالة واتساب أو بريد إلكتروني جاهز بالمعلومات التي أدخلتها.",
      emailOption: {
        label: "أو راسلنا عبر البريد الرسمي",
        address: "info@zaitoonerp.com"
      },
      emailMessage: {
        subject: "طلب تجربة ZA ERP",
        greeting: "مرحباً،",
        intro: "أرغب بطلب تجربة لمنصة ZA ERP.",
        sectionTitle: "معلومات الطلب:",
        bulletPrefix: "* ",
        name: "الاسم",
        phone: "رقم الهاتف / واتساب",
        company: "اسم الشركة",
        businessType: "نوع النشاط",
        users: "عدد المستخدمين المتوقع",
        branches: "الفروع",
        problem: "المشكلة الأساسية",
        notes: "ملاحظات إضافية",
        outro:
          "أرغب بمعرفة كيف يمكن أن تناسب ZA ERP طريقة عمل شركتي، وما هي الباقة المناسبة لمرحلة Pilot.",
        emptyValue: "—"
      },
      businessTypeOptions: [
        "تجارة عامة",
        "متجر أو مخزن",
        "توزيع",
        "معرض أو مركز بيع",
        "صيانة وخدمات",
        "شركة متعددة الفروع",
        "نشاط آخر"
      ],
      problemOptions: [
        "تنظيم المبيعات والفواتير",
        "متابعة المخزون",
        "صلاحيات الموظفين",
        "التقارير والإدارة",
        "متابعة العملاء",
        "التوصيل والتحصيل",
        "الصيانة والخدمات",
        "أخرى"
      ],
      branchOptions: [
        { value: "one", label: "لا، فرع واحد" },
        { value: "two", label: "نعم، فرعين" },
        { value: "three-plus", label: "نعم، 3 فروع أو أكثر" },
        { value: "unsure", label: "غير متأكد" }
      ],
      userCountOptions: [
        { value: "1-3", label: "1 إلى 3 مستخدمين" },
        { value: "4-7", label: "4 إلى 7 مستخدمين" },
        { value: "8-15", label: "8 إلى 15 مستخدم" },
        { value: "15-plus", label: "أكثر من 15 مستخدم" },
        { value: "unsure", label: "غير متأكد" }
      ],
      placeholders: {
        businessType: "اختر نوع النشاط",
        users: "اختر عدد المستخدمين",
        problem: "اختر المشكلة الأساسية",
        branches: "اختر حالة الفروع"
      },
      validation: {
        nameRequired: "يرجى إدخال الاسم",
        phoneRequired: "يرجى إدخال رقم الهاتف أو الواتساب",
        businessTypeRequired: "يرجى اختيار نوع النشاط",
        usersRequired: "يرجى اختيار عدد المستخدمين المتوقع",
        branchesRequired: "يرجى اختيار حالة الفروع",
        problemRequired: "يرجى اختيار المشكلة الأساسية"
      },
      whatsappMessage: {
        intro: "مرحباً، أرغب بطلب تجربة لمنصة ZA ERP.",
        sectionTitle: "معلومات الطلب:",
        bulletPrefix: "* ",
        name: "الاسم",
        phone: "رقم الهاتف / واتساب",
        company: "اسم الشركة",
        businessType: "نوع النشاط",
        users: "عدد المستخدمين المتوقع",
        branches: "الفروع",
        problem: "المشكلة الأساسية",
        notes: "ملاحظات إضافية",
        outro:
          "أرغب بمعرفة كيف يمكن أن تناسب ZA ERP طريقة عمل شركتي، وما هي الباقة المناسبة لمرحلة Pilot.",
        emptyValue: "—"
      },
      fields: [
        { id: "name", label: "الاسم", type: "text", required: true },
        { id: "phone", label: "رقم الهاتف / واتساب", type: "tel", required: true },
        { id: "company", label: "اسم الشركة", type: "text", required: false },
        { id: "business-type", label: "نوع النشاط", type: "select-business", required: true },
        { id: "users", label: "عدد المستخدمين المتوقع", type: "select-users", required: true },
        { id: "branches", label: "هل لديك أكثر من فرع؟", type: "select-branches", required: true },
        { id: "problem", label: "أكثر مشكلة تريد حلها", type: "select-problem", required: true },
        { id: "notes", label: "ملاحظات إضافية", type: "textarea", required: false }
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
            { label: "التكاملات", href: "#industries" },
            { label: "الأسعار", href: "#pricing" }
          ]
        },
        {
          title: "الموارد",
          links: [
            { label: "تحديثات المنصة", href: "updates.html" },
            { label: "مثال تطبيقي", href: "use-case.html" },
            { label: "خطة التطوير", href: "roadmap.html" },
            { label: "الأسئلة الشائعة", href: "#faq" },
            { label: "مركز الدعم", href: "#contact" }
          ]
        },
        {
          title: "الشركة",
          links: [
            { label: "من نحن", href: "about.html" },
            { label: "الثقة والأمان", href: "trust-security.html" },
            { label: "تواصل معنا", href: "#contact" },
            { label: "سياسة الخصوصية", href: "privacy.html" },
            { label: "شروط الاستخدام", href: "terms.html" }
          ]
        }
      ],
      contact: {
        email: "info@zaitoonerp.com",
        emailLabel: "البريد الرسمي",
        whatsappLabel: "واتساب",
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

    ui: {
      openMenu: "فتح القائمة",
      mainNav: "التنقل الرئيسي",
      modeToggle: "تبديل الوضع النهاري/الليلي",
      langToggle: "اختر اللغة",
      langAr: "العربية",
      langEn: "English",
      trustAria: "نقاط الثقة",
      platformStatusAria: "مؤشرات المنصة",
      teaserLive: "مباشر",
      teaserTablist: "معاينة وحدات المنصة",
      tourTablist: "نوع النشاط التجاري",
      tourWorkflowAria: "مسار العمل المختصر",
      selectActivity: "اختر نوع النشاط",
      selectUsers: "اختر العدد",
      footerContact: "تواصل معنا",
      counterZero: "٠",
      cmdSales: "مبيعات",
      cmdInventory: "مخزون",
      cmdCollection: "تحصيل",
      cmdUpdated: "محدث",
      ownerCashFlow: "التدفق النقدي",
      ownerClear: "واضح",
      ownerStockAlerts: "المخزون الحرج",
      ownerAlertsCount: "3 تنبيهات",
      ownerSalesToday: "مبيعات اليوم",
      permFullAria: "مسموح",
      permViewAria: "عرض",
      permLockAria: "مقفل",
      afterZaErpSuffix: " ZA ERP",
      whatsappForm: {
        title: "طلب تجربة ZA ERP",
        name: "الاسم",
        company: "اسم الشركة",
        phone: "رقم الهاتف / واتساب",
        businessType: "نوع النشاط",
        users: "عدد المستخدمين المتوقع",
        branches: "هل يوجد أكثر من فرع",
        problem: "المشكلة الأساسية",
        notes: "ملاحظات"
      }
    }
  };

  var HOMEPAGE_CONTENT_BASE = {
    version: "1.0.0",

    settings: {
      erpLoginUrl: "https://erpv1.zaitoonerp.com/",
      whatsappNumber: "9647808500591",
      copyrightYear: 2026,
      market: {
        primaryCountry: "IQ",
        primaryCountryNameAr: "العراق",
        cityAr: "بغداد"
      }
    },

    sectionOrder: [
      "hero",
      "interactiveProductTour",
      "whyNow",
      "intelligenceStrip",
      "beforeAfter",
      "commandCenter",
      "modules",
      "productTeaser",
      "systemFlow",
      "ownerView",
      "whatYouGain",
      "why",
      "industries",
      "gettingStarted",
      "useCaseTeaser",
      "traditionalVsZaerp",
      "pilot",
      "productDepth",
      "security",
      "trustSecurityTeaser",
      "pricing",
      "pilotUrgencyCta",
      "platformUpdates",
      "roadmapTeaser",
      "faq",
      "cta",
      "whatsappCta",
      "news",
      "video",
      "contact"
    ],

    sections: {
      showHero: true,
      showInteractiveProductTour: true,
      showWhyNow: true,
      showWhatYouGain: true,
      showIntelligenceStrip: true,
      showBeforeAfter: true,
      showCommandCenter: true,
      showModules: true,
      showProductTeaser: true,
      showSystemFlow: true,
      showOwnerView: true,
      showWhy: true,
      showSectors: false,
      showIndustries: true,
      showGettingStarted: true,
      showUseCaseTeaser: true,
      showTraditionalVsZaerp: true,
      showHowItWorks: false,
      showProductDepth: true,
      showSecurity: true,
      showTrustSecurityTeaser: true,
      showPricing: true,
      showPilotUrgencyCTA: true,
      showPilot: true,
      showPlatformUpdates: true,
      showRoadmapTeaser: true,
      showFaq: true,
      showCta: true,
      showWhatsappCta: true,
      showNews: false,
      showVideo: false,
      showContact: true
    },

    media: {
      logoDark: "assets/za-erp-logo-dark.png",
      logoLight: "assets/za-erp-logo-light.png",
      logoMonogram: "assets/za-erp-monogram.png",
      heroMockupImage: null,
      whyEmblemImage: null,
      ogImage: "assets/za-erp-logo-dark.png"
    },

    locales: {
      ar: LOCALE_AR,
      en: typeof HOMEPAGE_LOCALE_EN !== "undefined" ? HOMEPAGE_LOCALE_EN : LOCALE_AR
    }
  };

  global.HOMEPAGE_CONTENT_BASE = HOMEPAGE_CONTENT_BASE;
})(typeof window !== "undefined" ? window : globalThis);
