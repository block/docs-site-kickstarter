import type { NavGroup } from "@/components/docs/Navbar.astro";

// Navigation items configuration
export const mainNavigation: NavGroup[] = [
  {
    title: "Main Navigation",
    items: [ 
      {
        title: "Documentation",
        href: "/docs",
        iconName: "layers",
      },
      {
        title: "Components", 
        href: "/components",
        iconName: "blocks"
      },
      {
        title: "Examples",
        href: "/examples",
        iconName: "images",
      },
      {
        title: "Blog",
        href: "/blog",
        iconName: "newspaper"
      },
      {
        title: "Open Source",
        href: "/block-open-source",
      }
    ],
  }
];

export const docsNavigation: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Configuration",
        href: "/docs/configuration",
      },
      {
        title: "Deploy your Doc Site",
        href: "/docs/deployment",
      },
    ],
  },
  {
    title: "Create Content",
    items: [
      {
        title: "Create a Page",
        href: "/docs/create-page",
      },
      {
        title: "Create a Doc Page",
        href: "/docs/create-doc",
      },
      {
        title: "Create a Blog Post",
        href: "/docs/create-blog",
      },
    ],
  },
  {
    title: "Layouts",
    items: [
      {
        title: "Documentation Layout",
        href: "/docs/documentation-layout",
      },
      {
        title: "Tutorial Layout",
        href: "/docs/tutorial-layout",
      },
      {
        title: "Landing Layout",
        href: "/docs/landing-layout",
      },
    ],
  },
  {
    title: "Styling",
    items: [
      {
        title: "Typography",
        href: "/docs/typography-styling",
      },
      {
        title: "Icons",
        href: "/docs/icons-styling",
      },
      {
        title: "Theme Customization",
        href: "/docs/theme-customization",
      },
    ],
  },
];

export const componentsNavigation: NavGroup[] = [
  {
    title: "Reusable Components",
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
    ],
  },
  {
    title: "Layout Components",
    items: [
      {
        title: "Bento Grid",
        href: "/components/bento-grid",
      },
      {
        title: "Header Section",
        href: "/components/header-section",
      },
      {
        title: "Feature Section",
        href: "/components/feature-section",
      },
      {
        title: "Footer",
        href: "/components/footer",
      },
      {
        title: "CTA Section",
        href: "/components/cta-section",
      },
      {
        title: "Blog Section",
        href: "/components/blog-section",
      },
      {
        title: "FAQ Section",
        href: "/components/faq-section",
      },
      {
        title: "Logo Section",
        href: "/components/logo-section",
      },
    ],
  },
  {
    title: "Block Components",
    items: [
      {
        title: "Accordion",
        href: "/components/accordion",
      },
      {
        title: "Tabs",
        href: "/components/tabs",
      },
      {
        title: "Hero",
        href: "/components/hero",
      },
      {
        title: "Checklist",
        href: "/components/checklist",
      },
    ],
  },
  {
    title: "UI Components",
    items: [
      {
        title: "Button",
        href: "/components/button",
      },
      {
        title: "Card Group",
        href: "/components/card-group",
      },
      {
        title: "Code Snippet",
        href: "/components/code-snippet",
      },
      {
        title: "Divider",
        href: "/components/divider",
      },
      {
        title: "Inline Code",
        href: "/components/inline-code",
      },
      {
        title: "Sidebar",
        href: "/components/sidebar",
      },
      {
        title: "Table",
        href: "/components/table",
      },
    ],
  },
  {
    title: "GitHub Components",
    items: [
      {
        title: "Stars",
        href: "/components/github-stars",
      },
    ],
  },
];
