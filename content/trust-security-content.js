/**
 * ZA ERP — Trust & Security Center (CMS-ready static content)
 */
(function (global) {
  "use strict";

  global.TRUST_SECURITY_CONTENT = {
    seo: {
      ar: {
        title: "مركز الثقة والأمان | ZA ERP",
        description:
          "تعرف على طريقة تعامل ZA ERP مع الخصوصية، الصلاحيات، فصل بيانات الشركات، وحماية الموقع الرئيسي."
      },
      en: {
        title: "Trust & Security Center | ZA ERP",
        description:
          "Learn how ZA ERP approaches privacy, role-based permissions, company data separation, and public website protection."
      }
    },

    page: {
      ar: {
        title: "مركز الثقة والأمان",
        subtitle:
          "نوضح في هذه الصفحة كيف نتعامل مع الثقة، الخصوصية، الصلاحيات، وتجربة الدخول في ZA ERP، حتى يكون لدى أصحاب الأعمال صورة أوضح قبل طلب التجربة."
      },
      en: {
        title: "Trust & Security Center",
        subtitle:
          "This page explains how ZA ERP approaches trust, privacy, permissions, and platform access so business owners can have a clearer view before requesting a demo."
      }
    },

    sections: [
      {
        id: "data-separation",
        type: "text",
        ar: {
          title: "فصل بيانات الشركات",
          text:
            "تم تصميم ZA ERP على أساس أن تكون بيانات كل شركة منفصلة عن الشركات الأخرى، مع اعتماد الصلاحيات المناسبة لكل مستخدم حسب دوره داخل الشركة."
        },
        en: {
          title: "Company data separation",
          text:
            "ZA ERP is designed around separating each company's data from other companies, with user permissions assigned based on each person's role inside the company."
        }
      },
      {
        id: "permissions",
        type: "bullets",
        ar: {
          title: "صلاحيات حسب دور الموظف",
          items: [
            "يمكن تحديد ما يراه كل موظف حسب مسؤولياته",
            "ليس كل مستخدم يحتاج رؤية المبيعات أو الأرباح أو التقارير",
            "الصلاحيات تساعد صاحب العمل على تنظيم الوصول للمعلومات",
            "الهدف هو تقليل الفوضى وحماية تفاصيل العمل الداخلية"
          ]
        },
        en: {
          title: "Role-based permissions",
          items: [
            "Each employee can be limited to what they need for their responsibility",
            "Not every user needs access to sales, profits, or reports",
            "Permissions help business owners organize access to information",
            "The goal is to reduce confusion and protect internal business details"
          ]
        }
      },
      {
        id: "website-privacy",
        type: "bullets",
        ar: {
          title: "خصوصية زوار الموقع",
          items: [
            "نموذج التواصل لا يرسل البيانات إلى قاعدة بيانات من الموقع",
            "يتم فقط تجهيز رسالة واتساب أو بريد إلكتروني بالمعلومات التي يدخلها الزائر",
            "نستخدم تحليلات الزيارات لفهم أداء الموقع وتحسينه",
            "لا يتم بيع بيانات الزوار للمعلنين"
          ]
        },
        en: {
          title: "Website visitor privacy",
          items: [
            "The contact form does not send data to a website database",
            "It only prepares a WhatsApp message or email using the visitor's entered information",
            "Website analytics are used to understand and improve site performance",
            "Visitor data is not sold to advertisers"
          ]
        }
      },
      {
        id: "platform-access",
        type: "platform",
        platformUrl: "https://erpv1.zaitoonerp.com/",
        ar: {
          title: "دخول المنصة عبر نطاق منفصل",
          textBefore:
            "يتم الدخول إلى منصة ZA ERP من خلال نطاق منفصل مخصص للتطبيق:",
          textAfter:
            "هذا يساعد على فصل الموقع التعريفي عن بيئة تشغيل المنصة."
        },
        en: {
          title: "Separate platform access",
          textBefore:
            "ZA ERP platform login is handled through a separate application domain:",
          textAfter:
            "This helps separate the public marketing website from the platform operating environment."
        }
      },
      {
        id: "website-protection",
        type: "bullets",
        ar: {
          title: "حماية الموقع الرئيسي",
          items: [
            "الموقع يعمل عبر HTTPS",
            "روابط الدخول والتواصل واضحة ومباشرة",
            "لا يتم عرض مفاتيح API أو أسرار داخل الموقع",
            "توجد صفحات سياسة الخصوصية وشروط الاستخدام",
            "يمكن إضافة إعدادات أمان متقدمة من Cloudflare تدريجياً بعد الاختبار"
          ]
        },
        en: {
          title: "Public website protection",
          items: [
            "The website runs over HTTPS",
            "Login and contact links are clear and direct",
            "No API keys or secrets are exposed on the public website",
            "Privacy Policy and Terms of Use pages are available",
            "Advanced Cloudflare security headers can be added gradually after testing"
          ]
        }
      },
      {
        id: "no-claims",
        type: "bullets",
        variant: "muted",
        ar: {
          title: "ما الذي لا ندّعيه؟",
          items: [
            "لا ندّعي وجود شهادات أمان غير موثقة",
            "لا نعرض عملاء أو نتائج غير حقيقية",
            "لا نعد بنتائج مالية مضمونة",
            "لا نستخدم شهادات أو تقييمات وهمية"
          ]
        },
        en: {
          title: "What we do not claim",
          items: [
            "We do not claim unverified security certifications",
            "We do not show fake customers or fake results",
            "We do not promise guaranteed financial results",
            "We do not use fake testimonials or ratings"
          ]
        }
      }
    ],

    cta: {
      ar: {
        text: "هل تريد معرفة كيف يمكن ضبط الصلاحيات حسب طريقة عمل شركتك؟",
        button: {
          label: "اطلب تقييم أولي لنشاطك",
          href: "index.html#contact",
          variant: "gold"
        }
      },
      en: {
        text: "Want to understand how permissions can fit your company workflow?",
        button: {
          label: "Request an Initial Review",
          href: "index.html#contact",
          variant: "gold"
        }
      }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
