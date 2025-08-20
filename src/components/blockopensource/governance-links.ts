import type { ExternalLink } from '@/components/block/ExternalLinksSection.astro';

export const governanceLinks: ExternalLink[] = [
  {
    name: "Code of Conduct",
    href: "https://github.com/block/.github/blob/main/CODE_OF_CONDUCT.md",
    description: "Ensuring respectful collaboration among all contributors",
  },
  {
    name: "Contribution Guide",
    href: "https://github.com/block/.github/blob/main/CONTRIBUTING.md",
    description: "Providing clear guidelines to help you get started with our projects",
  },
  {
    name: "Governance Model",
    href: "https://github.com/block/ospo/blob/main/GOVERNANCE.md",
    description: "Transparency in decision-making and project leadership",
  },
  {
    name: "Security Policy",
    href: "https://github.com/block/.github/blob/main/SECURITY.md",
    description: "Keeing our projects safe for everyone",
  },
];