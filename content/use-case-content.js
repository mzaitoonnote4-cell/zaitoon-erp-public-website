/**
 * ZA ERP — Practical use case page (CMS-ready static content)
 */
(function (global) {
  "use strict";

  global.USE_CASE_CONTENT = {
    seo: {
      ar: {
        title: "مثال تطبيقي لاستخدام ZA ERP",
        description:
          "شاهد مثالاً توضيحياً لطريقة استخدام ZA ERP في تنظيم المبيعات، المخزون، العملاء، الصلاحيات، والتقارير داخل نشاط تجاري."
      },
      en: {
        title: "ZA ERP Practical Use Case",
        description:
          "See an illustrative example of how ZA ERP can help organize sales, inventory, customers, permissions, and reports in a business workflow."
      }
    },

    page: {
      ar: {
        title: "مثال تطبيقي لاستخدام ZA ERP"
      },
      en: {
        title: "ZA ERP Practical Use Case"
      }
    },

    disclaimer: {
      ar:
        "هذا المثال توضيحي لشرح طريقة استخدام ZA ERP داخل نشاط تجاري، وليس دراسة حالة لعميل فعلي.",
      en:
        "This is an illustrative example to explain how ZA ERP can be used in a business workflow. It is not a real customer case study."
    },

    scenario: {
      ar: {
        title: "مثال: شركة تجارة لديها مخزون وفواتير وموظفون",
        text:
          "لنفترض أن شركة تجارة صغيرة أو متوسطة لديها منتجات، عملاء، موظفون، فواتير يومية، ومخزون يحتاج إلى متابعة مستمرة."
      },
      en: {
        title: "Example: A trading company with inventory, invoices, and staff",
        text:
          "Assume a small or medium trading company has products, customers, employees, daily invoices, and inventory that needs regular follow-up."
      }
    },

    beforeAfter: {
      before: {
        ar: {
          label: "قبل ZA ERP",
          items: [
            "الفواتير موزعة بين الدفاتر أو Excel",
            "المخزون لا يتم تحديثه بشكل واضح",
            "صعوبة معرفة المتبقي على العملاء",
            "لا توجد صلاحيات دقيقة للموظفين",
            "التقارير تحتاج وقتاً وجهداً"
          ]
        },
        en: {
          label: "Before ZA ERP",
          items: [
            "Invoices are scattered between notebooks or Excel",
            "Inventory is not clearly updated",
            "Customer balances are difficult to follow",
            "Employee permissions are not well organized",
            "Reports take time and effort"
          ]
        }
      },
      after: {
        ar: {
          label: "بعد تنظيم العمل داخل ZA ERP",
          items: [
            "فواتير مرتبة داخل النظام",
            "تحديث أوضح للمخزون",
            "متابعة العملاء والمدفوعات",
            "صلاحيات حسب دور الموظف",
            "تقارير تساعد صاحب العمل على المتابعة"
          ]
        },
        en: {
          label: "After organizing work with ZA ERP",
          items: [
            "Invoices are managed inside the system",
            "Inventory is followed more clearly",
            "Customers and payments can be tracked",
            "Permissions are organized by employee role",
            "Reports help the owner follow the business"
          ]
        }
      }
    },

    workflow: {
      ar: {
        title: "كيف تسير العملية داخل ZA ERP؟",
        steps: [
          "يتم إضافة المنتجات والعملاء",
          "يتم إنشاء فاتورة بيع",
          "يتم تحديث المخزون حسب العملية",
          "يتم متابعة المتبقي أو التحصيل",
          "تظهر البيانات في التقارير ولوحة التحكم"
        ]
      },
      en: {
        title: "How does the workflow run inside ZA ERP?",
        steps: [
          "Products and customers are added",
          "A sales invoice is created",
          "Inventory is updated based on the transaction",
          "Remaining balances or collections are followed",
          "Data appears in reports and dashboards"
        ]
      }
    },

    ownerGains: {
      ar: {
        title: "ماذا يستفيد صاحب العمل؟",
        items: [
          "رؤية أوضح للمبيعات اليومية",
          "متابعة أفضل للمخزون",
          "تنظيم صلاحيات الموظفين",
          "تقليل الاعتماد على الدفاتر المتفرقة",
          "اتخاذ قرارات بناءً على بيانات أوضح"
        ]
      },
      en: {
        title: "What does the business owner gain?",
        items: [
          "Clearer visibility over daily sales",
          "Better inventory follow-up",
          "More organized employee permissions",
          "Less dependency on scattered notebooks",
          "Better decisions based on clearer data"
        ]
      }
    },

    cta: {
      ar: {
        text: "هل تريد رؤية مثال قريب من نشاطك؟",
        button: {
          label: "اطلب تجربة حسب نوع نشاطك",
          href: "index.html#contact"
        }
      },
      en: {
        text: "Want to see an example closer to your business?",
        button: {
          label: "Request a Demo for Your Business Type",
          href: "index.html#contact"
        }
      }
    },

    homepage: {
      ar: {
        title: "شاهد مثالاً عملياً لطريقة استخدام ZA ERP",
        text:
          "تعرف على سيناريو توضيحي يشرح كيف يمكن تنظيم المبيعات، المخزون، العملاء، والصلاحيات داخل المنصة.",
        button: {
          label: "عرض المثال التطبيقي",
          href: "use-case.html"
        }
      },
      en: {
        title: "See a practical example of ZA ERP in use",
        text:
          "Explore an illustrative scenario showing how sales, inventory, customers, and permissions can be organized inside the platform.",
        button: {
          label: "View Practical Use Case",
          href: "use-case.html"
        }
      }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
