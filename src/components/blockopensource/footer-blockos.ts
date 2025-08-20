interface Link {
  title: string;
  href: string;
  external?: boolean;
  icon?: string;
}

interface FooterSection {
  title: string;
  links: Link[];
}

export interface FooterBlockOSData {
  logo: string;
  companyName: string;
  description: string;
  sections: FooterSection[];
  copyright: string;
}

export const footerBlockOSData: FooterBlockOSData = {
  logo: "src/icons/block-open-source/block.svg",
  companyName: "block",
  description: " ",
  sections: [
    {
      title: "Company",
      links: [
        { title: "News", href: "https://block.xyz/news" },
        { title: "Careers", href: "https://block.xyz/careers/jobs" },
        { title: "Open Source", href: "https://block.xyz/open-source" },
        { title: "Investors", href: "https://investors.block.xyz/overview/default.aspx?_gl=1*1ho038u*_ga*MTcxNDUxMjk5Ni4xNzU1NjI2MzM1*_ga_EM11G73CS9*czE3NTU2NDU2MTAkbzMkZzEkdDE3NTU2NDU4NDYkajYwJGwwJGgw"},
        { title: "Media Kit", href: "https://block.xyz/mediakit"},
        { title: "Legal", href: "https://block.xyz/legal"},
        { title: "Privacy", href: "https://block.xyz/legal/privacy-notice"},
      ]
    },
    {
      title: "Brands",
      links: [
        { title: "Square", href: "javascript:void(null);", icon: "block-open-source/brands/square" },
        { title: "Cash App", href: "javascript:void(null);", icon: "block-open-source/brands/cash-app" },
        { title: "Afterpay", href: "javascript:void(null);", icon: "block-open-source/brands/afterpay" },
        { title: "Tidal", href: "javascript:void(null);", icon: "block-open-source/brands/tidal" },
        { title: "Bitkey", href: "javascript:void(null);", icon: "block-open-source/brands/bitkey" },
        { title: "Proto", href: "javascript:void(null);", icon: "block-open-source/proto" },
      ]
    },
    {
      title: "Social",
      links: [
        { title: "X", href: "https://twitter.com/block", external: true, icon: "block-open-source/x-twitter" },
        { title: "GitHub", href: "https://github.com/block", external: true, icon: "octicon-github" },
        { title: "LinkedIn", href: "https://linkedin.com/company/block", external: true, icon: "block-open-source/linkedin" },
      ]
    }
  ],
  copyright: "© 2025 Block, Inc. BLOCK and the Block Logo are trademarks of Block, Inc."
};