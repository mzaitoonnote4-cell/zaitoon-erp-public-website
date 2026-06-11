/**
 * ZA ERP — Public roadmap (CMS-ready static content)
 */
(function (global) {
  "use strict";

  global.ROADMAP_CONTENT = {
    seo: {
      ar: {
        title: "خطة تطوير ZA ERP",
        description:
          "تعرف على خطة تطوير ZA ERP واتجاهات التحسين القادمة للموقع والمنصة، مع تركيز على الاستقرار وتجربة المستخدم واحتياجات العملاء."
      },
      en: {
        title: "ZA ERP Roadmap",
        description:
          "Explore the ZA ERP roadmap and upcoming improvement directions for the public website and platform, focused on stability, usability, and customer needs."
      }
    },

    page: {
      ar: { title: "خطة تطوير ZA ERP" },
      en: { title: "ZA ERP Roadmap" }
    },

    intro: {
      ar:
        "نحن نطوّر ZA ERP بشكل تدريجي بناءً على احتياجات السوق والعملاء، مع التركيز على الاستقرار، سهولة الاستخدام، والصلاحيات الواضحة قبل إضافة أي توسع جديد.",
      en:
        "ZA ERP is being developed gradually based on market and customer needs, with a focus on stability, usability, and clear permissions before adding larger expansions."
    },

    disclaimer: {
      ar:
        "هذه الخطة توضح اتجاهات التطوير العامة، وقد تتغير الأولويات حسب احتياج العملاء والاستقرار الفني.",
      en:
        "This roadmap shows the general development direction. Priorities may change based on customer needs and technical stability."
    },

    sections: [
      {
        id: "completed",
        tone: "completed",
        ar: {
          title: "تم إنجازه في الموقع الرئيسي",
          items: [
            "تصميم جديد للصفحة الرئيسية",
            "دعم اللغة العربية والإنكليزية",
            "الوضع الليلي والنهاري",
            "تحسين تجربة الموبايل",
            "صفحات سياسة الخصوصية وشروط الاستخدام",
            "صفحة تحديثات المنصة",
            "صورة مشاركة للرابط و favicon",
            "Cloudflare Web Analytics",
            "نموذج طلب تجربة عبر واتساب"
          ]
        },
        en: {
          title: "Completed on the public website",
          items: [
            "New public homepage design",
            "Arabic and English support",
            "Dark and light mode",
            "Improved mobile experience",
            "Privacy Policy and Terms pages",
            "Platform Updates page",
            "Social sharing image and favicon",
            "Cloudflare Web Analytics",
            "WhatsApp demo request form"
          ]
        }
      },
      {
        id: "near-term",
        tone: "near",
        ar: {
          title: "تحسينات قريبة",
          items: [
            "تحسين تجربة Pilot للشركات المختارة",
            "تقوية صفحات الشرح والتسويق",
            "تحسين تجربة طلب التجربة والتواصل",
            "إضافة أمثلة تطبيقية أوضح لطريقة استخدام المنصة",
            "تحسين محتوى الأسئلة الشائعة حسب أسئلة العملاء"
          ]
        },
        en: {
          title: "Near-term improvements",
          items: [
            "Improving the Pilot experience for selected companies",
            "Strengthening product explanation and marketing pages",
            "Improving the demo request and contact experience",
            "Adding clearer practical examples of platform usage",
            "Improving FAQ content based on customer questions"
          ]
        }
      },
      {
        id: "future",
        tone: "future",
        ar: {
          title: "مراحل مستقبلية",
          items: [
            "لوحة تحكم للموقع الرئيسي CMS",
            "إدارة أخبار وتحديثات المنصة من لوحة تحكم",
            "إدارة محتوى الصفحة الرئيسية بدون تعديل الكود",
            "إدارة الأسعار والصور وروابط التواصل",
            "تحسينات SEO وتسويق المحتوى",
            "صفحات Case Study عند توفر عملاء فعليين"
          ]
        },
        en: {
          title: "Future phases",
          items: [
            "Website Admin / CMS panel",
            "Manage platform updates from an admin panel",
            "Edit homepage content without changing code",
            "Manage pricing, images, and contact links",
            "SEO and content marketing improvements",
            "Real case study pages when actual customers are available"
          ]
        }
      }
    ],

    cta: {
      ar: {
        text: "هل لديك احتياج مهم تريد أن نأخذه بالحسبان؟",
        button: {
          label: "شاركنا احتياج شركتك",
          href: "index.html#contact"
        }
      },
      en: {
        text: "Do you have an important need we should consider?",
        button: {
          label: "Share Your Business Need",
          href: "index.html#contact"
        }
      }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
