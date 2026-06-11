/**
 * ZA ERP — Platform updates / news (CMS-ready static content)
 */
(function (global) {
  "use strict";

  global.UPDATES_CONTENT = {
    seo: {
      ar: {
        title: "تحديثات ZA ERP | آخر تطويرات المنصة",
        description:
          "تابع آخر تحديثات وتطويرات ZA ERP، من تحسينات الموقع وتجربة المستخدم إلى تطويرات المنصة والخدمات."
      },
      en: {
        title: "ZA ERP Updates | Latest Platform Improvements",
        description:
          "Follow the latest ZA ERP updates, improvements, and platform enhancements."
      }
    },

    page: {
      ar: {
        title: "تحديثات المنصة",
        subtitle: "آخر التحسينات والتطويرات على منصة ZA ERP والموقع الرسمي."
      },
      en: {
        title: "Platform Updates",
        subtitle: "The latest improvements to the ZA ERP platform and public website."
      }
    },

    homepage: {
      ar: {
        title: "آخر تحديثات ZA ERP",
        subtitle:
          "تابع أهم التطويرات والتحسينات التي يتم إضافتها إلى المنصة والموقع الرئيسي.",
        cta: "عرض جميع التحديثات"
      },
      en: {
        title: "Latest ZA ERP Updates",
        subtitle:
          "Follow the latest improvements and enhancements added to the platform and public website.",
        cta: "View All Updates"
      }
    },

    categories: {
      website: { ar: "الموقع", en: "Website" },
      platform: { ar: "المنصة", en: "Platform" },
      security: { ar: "الأمان", en: "Security" },
      experience: { ar: "التجربة", en: "Experience" }
    },

    items: [
      {
        id: "public-website-launch",
        visible: true,
        date: "2026-06-01",
        category: "website",
        ar: {
          title: "إطلاق الموقع الرئيسي الجديد",
          description:
            "تم إطلاق الواجهة الجديدة لموقع ZA ERP بتصميم احترافي يدعم اللغة العربية والإنكليزية."
        },
        en: {
          title: "New Public Website Launched",
          description:
            "ZA ERP’s new public website has been launched with a premium bilingual experience."
        }
      },
      {
        id: "mobile-experience",
        visible: true,
        date: "2026-06-05",
        category: "experience",
        ar: {
          title: "تحسين تجربة الموبايل",
          description:
            "تم تحسين عرض الموقع على الهواتف لضمان تجربة استخدام واضحة وسلسة."
        },
        en: {
          title: "Mobile Experience Improved",
          description:
            "The mobile layout has been improved for a smoother and clearer browsing experience."
        }
      },
      {
        id: "privacy-terms-pages",
        visible: true,
        date: "2026-06-08",
        category: "security",
        ar: {
          title: "إضافة صفحات الخصوصية والشروط",
          description:
            "تمت إضافة صفحات سياسة الخصوصية وشروط الاستخدام لتعزيز الوضوح والثقة."
        },
        en: {
          title: "Privacy and Terms Pages Added",
          description:
            "Privacy Policy and Terms of Use pages were added to improve transparency and trust."
        }
      },
      {
        id: "cloudflare-analytics",
        visible: true,
        date: "2026-06-10",
        category: "website",
        ar: {
          title: "تفعيل تحليلات الزوار عبر Cloudflare",
          description:
            "تم تفعيل Cloudflare Web Analytics لفهم استخدام الموقع بشكل مجمّع وتحسين الأداء — دون بيع بيانات الزوار."
        },
        en: {
          title: "Cloudflare Web Analytics Enabled",
          description:
            "Cloudflare Web Analytics is now active to understand aggregate site usage and improve performance — without selling visitor data."
        }
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
