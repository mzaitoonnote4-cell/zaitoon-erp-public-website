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
      ogImage: null
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
      headlineBefore: "Control every detail of your business with",
      headlineHighlight: "ZA ERP",
      subtitle:
        "ZA ERP is a cloud-based business management platform that connects sales, inventory, customers, employees, permissions, payments, and reports in one clear system.",
      ctas: [
        { label: "Book a Demo", href: "#contact", variant: "gold" },
        { label: "Explore Features", href: "#features", variant: "outline" }
      ],
      trustBadges: [
        { icon: "shield", label: "Secure Cloud Platform" },
        { icon: "refresh", label: "Continuous Updates" },
        { icon: "chat", label: "Dedicated Support" }
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
      title: "Built for how companies and stores actually work",
      items: [
        { id: "trade", icon: "sales", title: "General trading companies" },
        { id: "retail", icon: "inventory", title: "Stores and warehouses" },
        { id: "distribution", icon: "purchases", title: "Distribution companies" },
        { id: "showrooms", icon: "customers", title: "Showrooms and sales floors" },
        { id: "service", icon: "maintenance", title: "Service and maintenance firms" },
        { id: "branches", icon: "operations", title: "Multi-branch operations" }
      ]
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
      title: "Full control over who sees what inside your company",
      matrixTitle: "Security and permissions built for businesses",
      points: [
        { id: "roles", icon: "employees", text: "Permissions by employee role" },
        { id: "isolation", icon: "security", text: "Isolated data per company" },
        { id: "access", icon: "shield", text: "Block unauthorized access" },
        { id: "audit", icon: "indicators", text: "Operational audit trail" },
        { id: "manager", icon: "decisions", text: "Manager control over user visibility" }
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
      title: "Pilot launch for selected companies",
      text: "We onboard a limited number of companies during Pilot to ensure training, follow-up, and product refinement based on real market needs.",
      cta: { label: "Reserve your Pilot spot", href: "#contact", variant: "gold" }
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          id: "faq-arabic",
          question: "Does the platform support Arabic?",
          answer: "Yes. ZA ERP includes a full Arabic interface with RTL support for local teams."
        },
        {
          id: "faq-permissions",
          question: "Can I control employee permissions?",
          answer: "Yes. You can define what each employee can see and do based on their role and responsibilities."
        },
        {
          id: "faq-branches",
          question: "Does it support multiple branches?",
          answer: "Yes. You can manage multiple branches and monitor operations between them depending on your plan."
        },
        {
          id: "faq-invoices",
          question: "Can I print invoices?",
          answer: "Yes. You can issue and print invoices with your company details and invoice branding."
        },
        {
          id: "faq-security",
          question: "Is my data secure?",
          answer: "Yes. We apply access controls and permissions to protect your company data and isolate it from other tenants."
        },
        {
          id: "faq-training",
          question: "Is training included?",
          answer: "Yes. Pilot companies receive onboarding and training based on team size and business needs."
        },
        {
          id: "faq-custom",
          question: "Can the platform be customized?",
          answer: "Yes. Especially on Enterprise and Pilot plans, settings and reports can be tailored to your business."
        }
      ]
    },

    whatsappCta: {
      title: "Want to see the platform on your real business?",
      text: "Send us your business type and expected number of users. We will recommend the right plan and show how ZA ERP fits your company.",
      buttonLabel: "Chat on WhatsApp",
      message: "Hello, I would like to learn how ZA ERP can fit my business.\n\nBusiness type:\nNumber of users:"
    },

    pricing: {
      title: "Choose the plan that fits you",
      subtitle: "Flexible plans for growing businesses",
      note: "Pricing applies to the pilot launch phase and may vary by company size and number of users.",
      pilotPlansNote: "Pilot launch plans — customizable by company size",
      subscriptionTrustNote:
        "Subscribing is not just buying software — it is the start of real operational structure for your company.",
      currencyNote: "Prices are shown in US Dollars (USD) during the Pilot phase.",
      plans: [
        {
          id: "starter-pilot",
          name: "Starter Pilot",
          price: 19,
          currency: "USD",
          periodLabel: "month",
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
      title: "Book a demo",
      subtitle: "Fill out the form and we will open a WhatsApp conversation with your request details.",
      submitLabel: "Send via WhatsApp",
      activityOptions: ["Retail", "Wholesale", "Restaurant / Café", "Services", "Manufacturing", "Other"],
      userCountOptions: [
        { label: "1–3", value: "1-3" },
        { label: "4–10", value: "4-10" },
        { label: "11–25", value: "11-25" },
        { label: "26+", value: "26+" }
      ],
      fields: [
        { id: "name", label: "Name", type: "text", required: true },
        { id: "company", label: "Company name", type: "text", required: true },
        { id: "phone", label: "Phone number", type: "tel", required: true },
        { id: "activity", label: "Business type", type: "select-activity", required: true },
        { id: "users", label: "Expected number of users", type: "select-users", required: true },
        { id: "message", label: "Message", type: "textarea", required: true }
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
            { label: "FAQ", href: "#faq" },
            { label: "Support center", href: "#contact" }
          ]
        },
        {
          title: "Company",
          links: [
            { label: "About", href: "#about" },
            { label: "Careers", href: "#about" },
            { label: "News", href: "#resources" },
            { label: "Contact", href: "#contact" }
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
        title: "Demo request — ZA ERP",
        name: "Name",
        company: "Company name",
        phone: "Phone number",
        activity: "Business type",
        users: "Expected number of users",
        message: "Message"
      }
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
