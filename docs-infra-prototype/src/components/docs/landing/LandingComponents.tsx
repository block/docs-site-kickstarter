import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type HeroProps = {
  title: string
  description: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

type FeatureCardProps = {
  title: string
  description: string
  icon?: React.ReactNode
}

type QuickLinkProps = {
  title: string
  description: string
  href: string
}

export function Hero({ title, description, primaryAction, secondaryAction }: HeroProps) {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex gap-4 justify-center">
        {primaryAction && (
          <Button size="lg" asChild>
            <a href={primaryAction.href}>{primaryAction.text}</a>
          </Button>
        )}
        {secondaryAction && (
          <Button variant="outline" size="lg" asChild>
            <a href={secondaryAction.href}>{secondaryAction.text}</a>
          </Button>
        )}
      </div>
    </div>
  )
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="p-6">
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  )
}

export function QuickLink({ title, description, href }: QuickLinkProps) {
  return (
    <Card className="p-6 hover:bg-muted/50 transition-colors">
      <a href={href} className="block no-underline">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </a>
    </Card>
  )
}

export function FeaturesGrid({ features }: { features: FeatureCardProps[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <FeatureCard key={i} {...feature} />
      ))}
    </div>
  )
}

export function QuickLinksGrid({ links }: { links: QuickLinkProps[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {links.map((link, i) => (
        <QuickLink key={i} {...link} />
      ))}
    </div>
  )
}