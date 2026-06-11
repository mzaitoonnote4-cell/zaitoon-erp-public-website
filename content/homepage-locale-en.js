/**
 * English locale for the public ZA ERP homepage.
 * Loaded before homepage-content.js
 */
(function (global) {
  "use strict";

  global.HOMEPAGE_LOCALE_EN = {
    settings: {
      copyrightText: "© 2026 ZA ERP. All rights reserved."
    },

    seo: {
      title: "ZA ERP | Cloud ERP Platform for Business Management",
      description:
        "ZA ERP is a cloud-based ERP platform for managing sales, inventory, purchases, finance, customers, employees, service operations, permissions, and business reports.",
      ogImage: "https://zaitoonerp.com/assets/og-image.png"
    },

    brand: {
      monogram: "ZA",
      name: "ZA",
      accent: "ERP",
      ariaLabel: "ZA ERP Home"
    },

    nav: [
      { id: "home", label: "Home", href: "#hero", section: "hero" },
      { id: "product", label: "Product", href: "#product", section: "features" },
      { id: "features", label: "Features", href: "#features", section: "features" },
      { id: "sectors", label: "Industries", href: "#industries", section: "industries" },
      { id: "pricing", label: "Pricing", href: "#pricing", section: "pricing" },
      { id: "resources", label: "Resources", href: "#resources", section: "resources" },
      { id: "about", label: "About", href: "#about", section: "about" }
    ],

    headerCtas: [
      {
        label: "Login",
        href: "https://erpv1.zaitoonerp.com/",
        variant: "ghost",
        external: true
      },
      {
        label: "Book a Demo",
        href: "#contact",
        variant: "gold"
      }
    ],

    hero: {
      eyebrow: "Enter the world of professional company management",
      headlineBefore: "Turn your business management into a clear command center with",
      headlineHighlight: "ZA ERP",
      subtitle:
        "A cloud-based Arabic ERP platform that helps connect sales, inventory, customers, employees, permissions, and reports in one organized experience.",
      ctas: [
        { label: "Request a Demo", href: "#contact", variant: "gold" },
        { label: "See How It Works", href: "#getting-started", variant: "outline" }
      ],
      trustBadges: [
        { icon: "decisions", label: "Structured Pilot Experience" },
        { icon: "flexibility", label: "Arabic & English Interface" },
        { icon: "shield", label: "Role-Based Permissions" },
        { icon: "indicators", label: "Clearer Owner Reports" }
      ],
      mockup: {
        mode: "composed",
        image: null,
        imageAlt: "ZA ERP dashboard",
        sidebarNav: ["Home", "Sales", "Inventory", "Reports"],
        kpis: [
          { label: "Total Sales", value: 48750000, animate: true, variant: "gold" },
          { label: "Invoices", value: 1284, animate: true, variant: "default" },
          { label: "Customers", value: 342, animate: true, variant: "emerald" }
        ],
        chartLabel: "Sales performance",
        chartBars: [42, 68, 55, 82, 74, 91],
        mobile: {
          title: "Today's board",
          statLabel: "Sales today",
          statValue: "$4,280",
          bars: [60, 80, 45, 70]
        }
      },
      dataChips: [
        { id: "sales", label: "Live sales", position: "top-start" },
        { id: "stock", label: "Updated stock", position: "top-end" },
        { id: "perms", label: "Secure permissions", position: "bottom-start" },
        { id: "reports", label: "Instant reports", position: "bottom-end" }
      ]
    },

    whyNow: {
      title: "Why now?",
      text:
        "As invoices, products, employees, and branches increase, relying only on notebooks and Excel becomes harder. ZA ERP helps you move gradually toward clearer management before daily confusion becomes costly.",
      cards: [
        { icon: "flexibility", title: "Growth needs a clearer system" },
        { icon: "efficiency", title: "Small errors can become costly" },
        { icon: "indicators", title: "Decisions need faster data" }
      ]
    },

    whatYouGain: {
      title: "What do you gain by organizing your business with ZA ERP?",
      cards: [
        { icon: "sales", title: "Clearer sales visibility" },
        { icon: "inventory", title: "Better inventory follow-up" },
        { icon: "employees", title: "Organized employee permissions" },
        { icon: "indicators", title: "Reports for better decisions" },
        { icon: "decisions", title: "A suitable Pilot experience" },
        { icon: "operations", title: "Scalability as your business grows" }
      ]
    },

    intelligenceStrip: {
      label: "Platform status",
      items: [
        "Real-time updates",
        "Role-based permissions",
        "Live reports",
        "Branch monitoring",
        "Audit trail",
        "Built to scale"
      ]
    },

    beforeAfter: {
      title: "Before ZA ERP vs. After ZA ERP",
      before: {
        label: "Before",
        items: [
          "Scattered invoices",
          "Unclear inventory",
          "Unstructured permissions",
          "Delayed reports",
          "Decisions based on guesswork"
        ]
      },
      after: {
        label: "After",
        items: [
          "Clear sales visibility",
          "Updated inventory",
          "Precise permissions",
          "Real-time reports",
          "Data-driven decisions"
        ]
      }
    },

    commandCenter: {
      title: "Your company command center in one screen",
      text:
        "Imagine every department in your business in front of you: sales, inventory, customers, employees, expenses, reports, and permissions. Everything connected, clear, and ready for action.",
      hubLabel: "ZA ERP",
      nodes: [
        { id: "customers", label: "Customers", position: "n" },
        { id: "sales", label: "Sales", position: "ne" },
        { id: "inventory", label: "Inventory", position: "e" },
        { id: "finance", label: "Finance", position: "se" },
        { id: "employees", label: "Employees", position: "s" },
        { id: "reports", label: "Reports", position: "sw" },
        { id: "permissions", label: "Permissions", position: "w" }
      ]
    },

    productTeaser: {
      title: "A glimpse inside the platform",
      subtitle: "Explore what you will see in ZA ERP — an interactive preview with no system connection",
      tabs: [
        {
          id: "sales",
          label: "Sales",
          headline: "Sales and collections at a glance",
          description: "Track invoices, payments, outstanding balances, and the status of every sale.",
          highlights: ["Today's invoices", "Customer balances", "Collection status"]
        },
        {
          id: "inventory",
          label: "Inventory",
          headline: "Live inventory visibility",
          description: "Monitor quantities, alerts, stock movements, and branches.",
          highlights: ["Quantities by branch", "Low-stock alerts", "Stock in/out movements"]
        },
        {
          id: "customers",
          label: "Customers",
          headline: "Complete customer profile",
          description: "See transaction history, invoices, and payments for each customer in one place.",
          highlights: ["Invoice history", "Outstanding balance", "Last activity"]
        },
        {
          id: "permissions",
          label: "Permissions",
          headline: "Control by role",
          description: "Define who sees what based on each employee's role and responsibility.",
          highlights: ["Custom roles", "Access restrictions", "Change audit trail"]
        },
        {
          id: "reports",
          label: "Reports",
          headline: "Reports for business owners",
          description: "Dashboards and KPIs that help you understand performance without drowning in detail.",
          highlights: ["Period sales", "Branch performance", "Financial summary"]
        }
      ]
    },

    ownerView: {
      title: "Built for the business owner first",
      points: [
        "Know where your money goes",
        "Know who sold, received, and edited",
        "Monitor inventory before problems appear",
        "Track team performance without complexity",
        "See the full picture instead of scattered details"
      ],
      cta: {
        label: "See how your company could look inside ZA ERP",
        href: "#contact",
        variant: "gold"
      }
    },

    pilotUrgencyCta: {
      title: "Don't wait until chaos grows inside your company",
      text:
        "Start with the Pilot phase and see how ZA ERP can organize your daily operations, reduce errors, and give you clearer visibility for decision-making.",
      note: "A limited number of companies are accepted during the pilot launch to ensure onboarding, training, and follow-up.",
      buttons: [
        { label: "Book a Demo Now", href: "#contact", variant: "gold" },
        { label: "Chat on WhatsApp", href: "#whatsapp-cta", variant: "outline" }
      ]
    },

    modules: {
      title: "Everything you need in one system",
      subtitle: "Integrated management for every part of your business",
      items: [
        { id: "customers", icon: "customers", title: "Customers", description: "Manage customer data, follow-ups, and transaction history in one place.", hoverHint: "Connected to invoices and customer history" },
        { id: "sales", icon: "sales", title: "Sales", description: "Sales invoices, quotes, and daily follow-up with ease.", hoverHint: "Connected to invoices and reports" },
        { id: "purchases", icon: "purchases", title: "Purchases", description: "Purchase orders, suppliers, and costs under control.", hoverHint: "Linked to inventory and costs" },
        { id: "inventory", icon: "inventory", title: "Inventory", description: "Track quantities, alerts, and movements across locations.", hoverHint: "Linked to stock and permissions" },
        { id: "finance", icon: "finance", title: "Finance", description: "Accounting, receivables, and clear financial reports for owners.", hoverHint: "Connected to collections and reports" },
        { id: "expenses", icon: "expenses", title: "Expenses", description: "Record and categorize expenses for clearer cost visibility.", hoverHint: "Linked to finance and reports" },
        { id: "employees", icon: "employees", title: "Employees", description: "Manage your team, permissions, and attendance flexibly.", hoverHint: "Linked to permissions and branches" },
        { id: "maintenance", icon: "maintenance", title: "Service & Maintenance", description: "Maintenance requests, scheduling, and service follow-up.", hoverHint: "Connected to operations and customers" },
        { id: "operations", icon: "operations", title: "Operations", description: "Coordinate daily operations and tasks across departments.", hoverHint: "Connects departments in one workflow" },
        { id: "indicators", icon: "indicators", title: "Insights", description: "Dashboards and live KPIs for smarter decisions.", hoverHint: "Connected to every module" }
      ],
      footerCta: { label: "Explore all features", href: "#features", variant: "outline" }
    },

    why: {
      title: "Why choose",
      titleHighlight: "ZA ERP",
      titleSuffix: "?",
      subtitle: "Toward smarter management and sustainable growth",
      emblemText: "ZA",
      items: [
        { id: "efficiency", icon: "efficiency", title: "Higher efficiency", description: "Automate workflows, reduce errors, and increase productivity" },
        { id: "decisions", icon: "decisions", title: "Better decisions", description: "Real-time reports and dashboards that support confident action" },
        { id: "flexibility", icon: "flexibility", title: "Flexibility and scale", description: "A platform that grows with your business" },
        { id: "security", icon: "security", title: "Security and reliability", description: "Protect your data and structure employee permissions" },
        { id: "support", icon: "support", title: "Ongoing support", description: "A dedicated team beside you at every step" }
      ]
    },

    sectors: {
      title: "Industries we serve",
      subtitle: "Flexible solutions for retail, services, manufacturing, and growing organizations",
      items: ["Retail", "Wholesale", "Services", "Manufacturing", "Restaurants", "Maintenance", "Distribution", "Enterprises"]
    },

    industries: {
      title: "Who is ZA ERP built for?",
      subtitle:
        "A flexible business management platform for companies and stores that need clearer control over sales, inventory, customers, employees, and permissions.",
      categories: [
        { id: "trade-sales", label: "Trade & Sales" },
        { id: "inventory-distribution", label: "Inventory & Distribution" },
        { id: "service-maintenance", label: "Service & Maintenance" },
        { id: "management-permissions", label: "Management & Permissions" }
      ],
      items: [
        {
          id: "trading",
          icon: "sales",
          category: "trade-sales",
          visible: true,
          title: "Trading Companies",
          description:
            "Manage sales, customers, invoices, inventory, and collections from one place."
        },
        {
          id: "stores",
          icon: "inventory",
          category: "inventory-distribution",
          visible: true,
          title: "Stores and Warehouses",
          description:
            "Track products, quantities, stock alerts, and inventory movements more clearly."
        },
        {
          id: "distribution",
          icon: "purchases",
          category: "inventory-distribution",
          visible: true,
          title: "Distribution Businesses",
          description:
            "Organize orders, customers, branches, delivery, and payment follow-up."
        },
        {
          id: "showrooms",
          icon: "customers",
          category: "trade-sales",
          visible: true,
          title: "Showrooms and Sales Centers",
          description:
            "Manage daily sales, invoices, customers, and staff with a clear workflow."
        },
        {
          id: "service",
          icon: "maintenance",
          category: "service-maintenance",
          visible: true,
          title: "Service and Maintenance Companies",
          description:
            "Organize service requests, spare parts, technicians, invoicing, and job status."
        },
        {
          id: "multi-branch",
          icon: "operations",
          category: "management-permissions",
          visible: true,
          title: "Multi-Branch Companies",
          description:
            "Monitor sales, inventory, and permissions across branches from one dashboard."
        },
        {
          id: "smb",
          icon: "flexibility",
          category: "management-permissions",
          visible: true,
          title: "Small and Medium Businesses",
          description:
            "A practical step from notebooks and Excel into a structured business system."
        },
        {
          id: "permissions",
          icon: "security",
          category: "management-permissions",
          visible: true,
          title: "Companies Requiring Strict Permissions",
          description:
            "Control who can see what inside the company based on roles and responsibilities."
        }
      ],
      cta: {
        text: "Want to know if ZA ERP fits your business?",
        button: {
          label: "Request an initial review",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    gettingStarted: {
      title: "How do you get started with ZA ERP?",
      subtitle:
        "A simple process to help your business move from scattered work to a clear, organized system.",
      steps: [
        {
          id: "contact",
          title: "Contact us",
          description:
            "Tell us about your business type, expected users, and branches."
        },
        {
          id: "understand",
          title: "We understand your workflow",
          description:
            "We review your key needs in sales, inventory, customers, permissions, and reports."
        },
        {
          id: "pilot",
          title: "We prepare a Pilot experience",
          description:
            "We help you test the platform based on your company size and business type."
        },
        {
          id: "train",
          title: "We train your team",
          description:
            "We explain how each role can use the system according to responsibilities."
        },
        {
          id: "manage",
          title: "You start managing clearly",
          description:
            "You begin tracking sales, inventory, customers, and permissions from one dashboard."
        }
      ],
      cta: {
        text: "Request an initial review",
        button: {
          label: "Start with a structured Pilot",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    useCaseTeaser: {
      title: "See a practical example of ZA ERP in use",
      text:
        "Explore an illustrative scenario showing how sales, inventory, customers, and permissions can be organized inside the platform.",
      button: {
        label: "View Practical Use Case",
        href: "use-case.html",
        variant: "gold"
      }
    },

    roadmapTeaser: {
      title: "Continuous Development Roadmap",
      text: "See the upcoming direction for ZA ERP and the public website.",
      button: {
        label: "View Roadmap",
        href: "roadmap.html",
        variant: "gold"
      }
    },

    traditionalVsZaerp: {
      title: "Why move from Excel and notebooks to ZA ERP?",
      subtitle:
        "As daily operations grow, notebooks and spreadsheets alone become harder to manage for sales, inventory, customers, and permissions.",
      before: {
        label: "Traditional Management",
        items: [
          "Data scattered between notebooks and Excel",
          "Difficulty knowing actual inventory",
          "Repeated errors in invoices or updates",
          "No clear employee permissions",
          "Harder customer balance follow-up",
          "Reports require time and effort",
          "Branch follow-up becomes more complex"
        ]
      },
      after: {
        label: "With ZA ERP",
        items: [
          "Organized data in one place",
          "Clearer connection between invoices and inventory",
          "Better customer and payment follow-up",
          "Permissions based on employee roles",
          "Reports that help owners monitor the business",
          "Clearer visibility over sales and inventory",
          "Scalable as the company grows"
        ]
      },
      signs: {
        title: "When do you know your business needs a clearer system?",
        items: [
          "When actual inventory is hard to know quickly",
          "When daily or monthly reports are delayed",
          "When work depends on one person knowing all details",
          "When you cannot track who edited, sold, or collected",
          "When branches or employees start increasing",
          "When repeated errors become costly"
        ]
      },
      cta: {
        text: "If notebooks and spreadsheets no longer feel enough, it may be time to explore ZA ERP.",
        button: {
          label: "See how ZA ERP can organize your work",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    howItWorks: {
      title: "From the first sale to the final report — everything connected",
      steps: [
        { id: "step-1", title: "Add products and customers" },
        { id: "step-2", title: "Create an invoice or order" },
        { id: "step-3", title: "Inventory updates automatically" },
        { id: "step-4", title: "Track payments and permissions" },
        { id: "step-5", title: "Get clear owner-level reports" }
      ]
    },

    systemFlow: {
      title: "From sales to inventory to collections to reports",
      subtitle: "One connected workflow inside a single platform",
      nodes: [
        { id: "customer", label: "Customer" },
        { id: "invoice", label: "Invoice" },
        { id: "inventory", label: "Inventory" },
        { id: "collection", label: "Collection" },
        { id: "report", label: "Report" },
        { id: "decision", label: "Management decision" }
      ]
    },

    productDepth: {
      title: "Not just a website — a scalable business platform",
      items: [
        { id: "saas", icon: "operations", title: "Scalable SaaS architecture" },
        { id: "perms", icon: "shield", title: "Multi-level permissions" },
        { id: "rtl", icon: "flexibility", title: "Arabic RTL interface" },
        { id: "live", icon: "indicators", title: "Real-time reporting" },
        { id: "cms-ready", icon: "decisions", title: "Future-ready website admin layer" },
        { id: "future", icon: "efficiency", title: "Future integrations with management and analytics tools" }
      ]
    },

    security: {
      title: "Trust, security, and organized permissions",
      matrixTitle: "Security and permissions built for businesses",
      showMatrix: true,
      points: [
        { id: "isolation", icon: "security", text: "Company data separation" },
        { id: "roles", icon: "employees", text: "Permissions based on employee roles" },
        { id: "domain", icon: "shield", text: "Platform login through a separate domain" },
        { id: "legal", icon: "decisions", text: "Clear Privacy and Terms pages" },
        { id: "analytics", icon: "indicators", text: "Website analytics without selling visitor data" },
        { id: "scaling", icon: "flexibility", text: "Designed for gradual scaling" }
      ],
      matrix: {
        columns: ["Sales", "Inventory", "Reports", "Settings"],
        rows: [
          { role: "Manager", access: ["full", "full", "full", "full"] },
          { role: "Sales", access: ["full", "view", "view", "lock"] },
          { role: "Inventory", access: ["view", "full", "view", "lock"] },
          { role: "Accounting", access: ["view", "view", "full", "lock"] },
          { role: "Delivery", access: ["view", "view", "lock", "lock"] }
        ]
      }
    },

    pilot: {
      title: "Pilot Program for Selected Companies",
      subtitle:
        "Start your ZA ERP experience through a structured pilot phase that helps us understand your workflow and prepare the platform around your real needs.",
      valueCards: [
        {
          id: "understand",
          title: "Understand your business first",
          description:
            "We start by reviewing your business type, users, branches, and daily team workflow."
        },
        {
          id: "setup",
          title: "Prepare a suitable pilot",
          description:
            "We help you test the platform based on your key needs in sales, inventory, customers, permissions, or reports."
        },
        {
          id: "train",
          title: "Train your team",
          description:
            "We guide your team based on their roles so the pilot is not just system access, but a clear working experience."
        },
        {
          id: "followup",
          title: "Initial follow-up",
          description:
            "We review early feedback and help you understand how ZA ERP can improve daily operations."
        },
        {
          id: "decide",
          title: "Clearer expansion decision",
          description:
            "After the pilot, you can evaluate whether ZA ERP fits your company before expanding users or branches."
        }
      ],
      whatYouGet: {
        title: "What do you get during the Pilot?",
        items: [
          "Initial review of your business workflow",
          "Suggested plan based on your needs",
          "Pilot setup suitable for your business size",
          "Guidance on how to use the platform",
          "Feedback review before expansion"
        ]
      },
      whoItFits: {
        title: "Who is the Pilot suitable for?",
        items: [
          "Businesses moving from notebooks or Excel to a clearer system",
          "Owners who want better visibility over sales and inventory",
          "Teams that need organized role-based permissions",
          "Companies that want to test before expanding",
          "Businesses with branches or staff needing clearer control"
        ]
      },
      cta: {
        text: "Start with a structured Pilot",
        button: {
          label: "Request an initial review",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    faq: {
      title: "Common Questions Before Trying ZA ERP",
      subtitle:
        "Clear answers to the most common questions before requesting a demo.",
      categories: [
        { id: "pilot-subscription", label: "Pilot & Subscription" },
        { id: "features-permissions", label: "Features & Permissions" },
        { id: "branches-operations", label: "Branches & Operations" },
        { id: "security-support", label: "Security & Support" }
      ],
      items: [
        {
          id: "faq-suitability",
          category: "pilot-subscription",
          visible: true,
          question: "Is ZA ERP suitable for my company?",
          answer:
            "Yes, if your business needs clearer control over sales, inventory, customers, employees, permissions, and reports. Suitability is reviewed based on your business type and workflow before the pilot starts."
        },
        {
          id: "faq-pilot",
          category: "pilot-subscription",
          visible: true,
          question: "Can I try the platform before subscribing?",
          answer:
            "Yes. Selected companies can start with a Pilot phase to understand the workflow and test the platform before expanding."
        },
        {
          id: "faq-arabic",
          category: "features-permissions",
          visible: true,
          question: "Does ZA ERP support Arabic?",
          answer:
            "Yes. ZA ERP is designed with an Arabic RTL interface, and the public website supports both Arabic and English."
        },
        {
          id: "faq-permissions",
          category: "features-permissions",
          visible: true,
          question: "Can employee permissions be controlled?",
          answer:
            "Yes. Permissions can be organized by employee role and responsibility, such as sales, inventory, management, reporting, or delivery."
        },
        {
          id: "faq-branches",
          category: "branches-operations",
          visible: true,
          question: "Does the platform support multiple branches?",
          answer:
            "Yes. ZA ERP can support businesses with more than one branch, with sales, inventory, and permissions managed according to the required structure."
        },
        {
          id: "faq-training",
          category: "branches-operations",
          visible: true,
          question: "Is training provided when we start?",
          answer:
            "Yes. During the pilot or onboarding phase, the team can be guided on how to use the system based on roles and responsibilities."
        },
        {
          id: "faq-pricing",
          category: "pilot-subscription",
          visible: true,
          question: "Are the prices fixed?",
          answer:
            "Current prices are for the pilot launch phase and may vary depending on users, branches, company size, and operating requirements."
        },
        {
          id: "faq-custom",
          category: "features-permissions",
          visible: true,
          question: "Can the platform be customized for our company?",
          answer:
            "Specific needs can be reviewed, but customizations are handled gradually based on technical and business priority, not randomly."
        },
        {
          id: "faq-security",
          category: "security-support",
          visible: true,
          question: "Is company data secure?",
          answer:
            "The platform is designed around company data separation and organized permissions. Data privacy is treated as a core part of the system."
        },
        {
          id: "faq-after-demo",
          category: "pilot-subscription",
          visible: true,
          question: "What happens after requesting a demo?",
          answer:
            "We contact you to understand your business type, users, and branches, then explain the suitable plan for testing ZA ERP."
        },
        {
          id: "faq-technical",
          category: "branches-operations",
          visible: true,
          question: "Do I need technical experience to use ZA ERP?",
          answer:
            "No. The goal is to make the platform clear for daily business users. Each team member can be guided based on their role."
        },
        {
          id: "faq-mobile",
          category: "branches-operations",
          visible: true,
          question: "Can ZA ERP be used from mobile?",
          answer:
            "The platform and website are designed with modern responsive usage in mind, but larger management tasks are usually better from a desktop or tablet."
        }
      ],
      cta: {
        text: "Want to know if ZA ERP fits your business?",
        button: {
          label: "Request an initial review",
          href: "#contact",
          variant: "gold"
        }
      }
    },

    whatsappCta: {
      title: "Want to see the platform on your real business?",
      text: "Send us your business type and expected number of users. We will recommend the right plan and show how ZA ERP fits your company.",
      buttonLabel: "Chat on WhatsApp",
      message: "Hello, I would like to learn how ZA ERP can fit my business.\n\nBusiness type:\nNumber of users:"
    },

    pricing: {
      title: "Choose the right Pilot plan",
      subtitle:
        "Start with the plan closest to your business size, then adjust based on users, branches, and operating needs.",
      note: "Pricing applies to the pilot launch phase and may vary by company size and number of users.",
      pilotPlansNote: "Pilot launch plans — customizable by company size",
      pilotTrustNote:
        "Pilot launch pricing may be adjusted based on company size and operating requirements.",
      subscriptionTrustNote:
        "Subscribing is not just buying software — it is the start of real operational structure for your company.",
      currencyNote: "Prices are shown in US Dollars (USD) during the Pilot phase.",
      helper: {
        title: "Not sure which plan fits?",
        text: "Share your business type, users, and branches, and we’ll help you choose the most suitable Pilot plan.",
        button: {
          label: "Help me choose a plan",
          href: "#contact",
          variant: "gold"
        }
      },
      cta: {
        text: "Want to know if ZA ERP fits your business?",
        button: {
          label: "Request an initial review",
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
          periodLabel: "month",
          suitableFor: {
            label: "Suitable for:",
            items: [
              "Small businesses or first pilot",
              "One branch",
              "Small team",
              "Basic sales and inventory"
            ]
          },
          features: [
            "Up to 3 users",
            "1 branch",
            "Sales and invoices",
            "Products and inventory",
            "Customers",
            "Basic reports"
          ],
          cta: { label: "Request platform trial", href: "#contact", variant: "outline" }
        },
        {
          id: "growth-pilot",
          name: "Growth Pilot",
          price: 39,
          currency: "USD",
          periodLabel: "month",
          featured: true,
          badge: "Recommended",
          suitableFor: {
            label: "Suitable for:",
            items: [
              "Businesses with daily team activity",
              "Multiple users",
              "Employee permissions",
              "Reports and inventory follow-up"
            ]
          },
          features: [
            "Up to 7 users",
            "Up to 2 branches",
            "Everything in Starter",
            "Employee permissions",
            "Sales and inventory reports",
            "Invoice settings",
            "Faster Pilot support"
          ],
          cta: { label: "Request platform trial", href: "#contact", variant: "gold" }
        },
        {
          id: "business-pilot",
          name: "Business Pilot",
          price: 69,
          currency: "USD",
          periodLabel: "month",
          suitableFor: {
            label: "Suitable for:",
            items: [
              "Businesses needing wider control",
              "Multiple branches",
              "Deeper permissions and reports",
              "Clearer operational management"
            ]
          },
          features: [
            "Up to 15 users",
            "Up to 3 branches",
            "Everything in Growth",
            "Broader business reports",
            "Audit trail",
            "Advanced permissions",
            "Branch monitoring"
          ],
          cta: { label: "Request platform trial", href: "#contact", variant: "outline" }
        },
        {
          id: "enterprise",
          name: "Enterprise",
          price: null,
          customLabel: "Custom pricing",
          suitableFor: {
            label: "Suitable for:",
            items: [
              "Companies requiring special setup",
              "Larger users or branches",
              "Advanced operating requirements",
              "Dedicated support and follow-up"
            ]
          },
          features: [
            "Users based on agreement",
            "Branches based on agreement",
            "Company-specific setup",
            "Team training",
            "Custom rollout plan",
            "Advanced support"
          ],
          cta: { label: "Contact us", href: "#contact", variant: "outline" }
        }
      ],
      addons: {
        title: "Add-ons and options",
        items: [
          { label: "Additional user", price: "$4 / month" },
          { label: "Additional branch", price: "$10 / month" },
          { label: "Pilot setup and training", price: "$50–$150 one-time" },
          { label: "Annual billing", price: "Pay for 10 months, get 12 months" }
        ]
      }
    },

    cta: {
      title: "Ready to elevate your business?",
      text: "Join companies that run with confidence on ZA ERP",
      buttons: [
        { label: "Book a Demo Now", href: "#contact", variant: "gold" },
        { label: "Contact us", href: "#contact", variant: "outline" }
      ]
    },

    news: {
      title: "Latest news",
      subtitle: "ZA ERP updates and announcements",
      items: [
        {
          id: "pilot-launch",
          title: "Pilot launch for growing companies",
          excerpt: "Join early customers and try the platform with flexible pilot pricing.",
          slug: "pilot-launch",
          publishedAt: "2026-01-15",
          coverImage: null,
          href: "#resources"
        },
        {
          id: "modules-update",
          title: "New modules in development",
          excerpt: "We are expanding operations and insights modules in the coming quarter.",
          slug: "modules-update",
          publishedAt: "2026-02-01",
          coverImage: null,
          href: "#resources"
        }
      ]
    },

    video: {
      title: "See ZA ERP in action",
      placeholder: "Product video coming soon",
      url: null,
      thumbnail: null
    },

    contact: {
      title: "Start with an initial business review",
      subtitle:
        "Share your business details and we’ll help you understand the suitable plan and how to begin a Pilot experience.",
      submitLabel: "Send Request via WhatsApp",
      submitHelper: "We’ll review the details and suggest the suitable next step.",
      privacyNote:
        "This form does not send your data to a database. It opens a prepared WhatsApp message using the information you entered.",
      businessTypeOptions: [
        "Trading",
        "Store or Warehouse",
        "Distribution",
        "Showroom or Sales Center",
        "Service and Maintenance",
        "Multi-Branch Company",
        "Other"
      ],
      problemOptions: [
        "Sales and invoices",
        "Inventory tracking",
        "Employee permissions",
        "Reports and management",
        "Customer follow-up",
        "Delivery and collections",
        "Service and maintenance",
        "Other"
      ],
      branchOptions: [
        { value: "one", label: "No, one branch" },
        { value: "two", label: "Yes, two branches" },
        { value: "three-plus", label: "Yes, 3 or more branches" },
        { value: "unsure", label: "Not sure" }
      ],
      userCountOptions: [
        { value: "1-3", label: "1 to 3 users" },
        { value: "4-7", label: "4 to 7 users" },
        { value: "8-15", label: "8 to 15 users" },
        { value: "15-plus", label: "More than 15 users" },
        { value: "unsure", label: "Not sure" }
      ],
      placeholders: {
        businessType: "Select business type",
        users: "Select expected users",
        problem: "Select main problem",
        branches: "Select branch status"
      },
      validation: {
        nameRequired: "Please enter your name",
        phoneRequired: "Please enter your phone or WhatsApp number",
        businessTypeRequired: "Please select your business type",
        usersRequired: "Please select expected users",
        branchesRequired: "Please select branch status",
        problemRequired: "Please select the main problem"
      },
      whatsappMessage: {
        intro: "Hello, I would like to request a ZA ERP demo.",
        sectionTitle: "Request details:",
        bulletPrefix: "* ",
        name: "Name",
        phone: "Phone / WhatsApp",
        company: "Company Name",
        businessType: "Business Type",
        users: "Expected Users",
        branches: "Branches",
        problem: "Main Problem",
        notes: "Additional Notes",
        outro:
          "I would like to understand how ZA ERP can fit my business workflow and which Pilot plan may be suitable.",
        emptyValue: "—"
      },
      fields: [
        { id: "name", label: "Name", type: "text", required: true },
        { id: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
        { id: "company", label: "Company Name", type: "text", required: false },
        { id: "business-type", label: "Business Type", type: "select-business", required: true },
        { id: "users", label: "Expected Users", type: "select-users", required: true },
        { id: "branches", label: "Do you have more than one branch?", type: "select-branches", required: true },
        { id: "problem", label: "Main problem you want to solve", type: "select-problem", required: true },
        { id: "notes", label: "Additional Notes", type: "textarea", required: false }
      ]
    },

    footer: {
      description: "An integrated cloud platform to run your business efficiently — built for today and ready for what comes next.",
      columns: [
        {
          title: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Modules", href: "#features" },
            { label: "Integrations", href: "#industries" },
            { label: "Pricing", href: "#pricing" }
          ]
        },
        {
          title: "Resources",
          links: [
            { label: "Blog", href: "#resources" },
            { label: "Guides", href: "#resources" },
            { label: "Platform Updates", href: "updates.html" },
            { label: "Use Case", href: "use-case.html" },
            { label: "Roadmap", href: "roadmap.html" },
            { label: "FAQ", href: "#faq" },
            { label: "Support center", href: "#contact" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About ZA ERP", href: "about.html" },
            { label: "Careers", href: "#about" },
            { label: "News", href: "#resources" },
            { label: "Contact", href: "#contact" },
            { label: "Privacy Policy", href: "privacy.html" },
            { label: "Terms of Use", href: "terms.html" }
          ]
        }
      ],
      contact: {
        email: "info@zaitoonerp.com",
        phone: "+964 780 850 0591",
        phoneHref: "tel:+9647808500591",
        location: "Baghdad, Iraq"
      },
      social: [
        { id: "linkedin", label: "LinkedIn", href: "#" },
        { id: "youtube", label: "YouTube", href: "#" },
        { id: "x", label: "X", href: "#" },
        { id: "facebook", label: "Facebook", href: "#" }
      ],
      platformLoginLabel: "Login to platform"
    },

    ui: {
      openMenu: "Open menu",
      mainNav: "Main navigation",
      modeToggle: "Toggle day/night mode",
      langToggle: "Choose language",
      langAr: "العربية",
      langEn: "English",
      trustAria: "Trust highlights",
      platformStatusAria: "Platform indicators",
      teaserLive: "Live",
      teaserTablist: "Platform module preview",
      selectActivity: "Select business type",
      selectUsers: "Select count",
      footerContact: "Contact us",
      counterZero: "0",
      cmdSales: "Sales",
      cmdInventory: "Stock",
      cmdCollection: "Collection",
      cmdUpdated: "Updated",
      ownerCashFlow: "Cash flow",
      ownerClear: "Clear",
      ownerStockAlerts: "Critical stock",
      ownerAlertsCount: "3 alerts",
      ownerSalesToday: "Sales today",
      permFullAria: "Allowed",
      permViewAria: "View",
      permLockAria: "Locked",
      afterZaErpSuffix: " ZA ERP",
      whatsappForm: {
        title: "ZA ERP demo request",
        name: "Name",
        company: "Company",
        phone: "Phone / WhatsApp",
        businessType: "Business type",
        users: "Expected users",
        branches: "More than one branch",
        problem: "Main problem",
        notes: "Notes"
      }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
