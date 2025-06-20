import React from 'react'
import { Card } from "@/components/ui/card"
import { Hero, FeaturesGrid, QuickLinksGrid } from "./LandingComponents"
import {
  BookOpenIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  PuzzlePieceIcon,
  DocumentTextIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10">{children}</div>
)

export function MinimalLanding() {
  return (
    <Card className="p-6 border-2 border-dashed">
      <div className="max-w-5xl mx-auto space-y-16">
        <Hero
          title="Documentation"
          description="Everything you need to build and deploy your app"
          primaryAction={{
            text: "Get Started",
            href: "/docs/getting-started"
          }}
          secondaryAction={{
            text: "View on GitHub",
            href: "https://github.com/example/repo"
          }}
        />
        
        <FeaturesGrid
          features={[
            {
              title: "Quick Start",
              description: "Get up and running in minutes with our quick start guide",
              icon: <Icon><RocketLaunchIcon /></Icon>
            },
            {
              title: "Guides",
              description: "In-depth tutorials and examples for common use cases",
              icon: <Icon><BookOpenIcon /></Icon>
            },
            {
              title: "API Reference",
              description: "Complete API documentation with live examples",
              icon: <Icon><CommandLineIcon /></Icon>
            }
          ]}
        />
      </div>
    </Card>
  )
}

export function FullLanding() {
  return (
    <Card className="p-6 border-2 border-dashed">
      <div className="max-w-6xl mx-auto space-y-20">
        <Hero
          title="Build Better Documentation"
          description="A complete solution for creating beautiful documentation sites with built-in search, versioning, and more."
          primaryAction={{
            text: "Get Started",
            href: "/docs/getting-started"
          }}
          secondaryAction={{
            text: "Learn More",
            href: "/docs/features"
          }}
        />
        
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Everything You Need</h2>
          <FeaturesGrid
            features={[
              {
                title: "Quick Setup",
                description: "Get your documentation site up and running in minutes",
                icon: <Icon><RocketLaunchIcon /></Icon>
              },
              {
                title: "Component Library",
                description: "Beautiful, accessible components out of the box",
                icon: <Icon><PuzzlePieceIcon /></Icon>
              },
              {
                title: "MDX Support",
                description: "Write documentation in MDX with custom components",
                icon: <Icon><DocumentTextIcon /></Icon>
              },
              {
                title: "Versioning",
                description: "Maintain multiple versions of your documentation",
                icon: <Icon><BookOpenIcon /></Icon>
              },
              {
                title: "API Documentation",
                description: "Auto-generate API documentation from your code",
                icon: <Icon><CommandLineIcon /></Icon>
              },
              {
                title: "Interactive Examples",
                description: "Add live code examples and playgrounds",
                icon: <Icon><BeakerIcon /></Icon>
              }
            ]}
          />
        </div>

        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Quick Links</h2>
          <QuickLinksGrid
            links={[
              {
                title: "Installation",
                description: "Step-by-step guide to install and configure your documentation site",
                href: "/docs/installation"
              },
              {
                title: "Components",
                description: "Explore our library of pre-built components",
                href: "/docs/components"
              },
              {
                title: "Markdown Guide",
                description: "Learn how to write documentation using Markdown and MDX",
                href: "/docs/markdown"
              },
              {
                title: "API Reference",
                description: "Complete API documentation for all features",
                href: "/docs/api"
              }
            ]}
          />
        </div>
      </div>
    </Card>
  )
}