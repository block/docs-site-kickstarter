import React from 'react'
import { Card } from "@/components/ui/card"

export function ThemeVariablesReference() {
  const variables = [
    ["background", "Base background color"],
    ["foreground", "Primary text color"],
    ["card", "Card background color"],
    ["card-foreground", "Card text color"],
    ["primary", "Primary accent color"],
    ["primary-foreground", "Text on primary color"],
    ["secondary", "Secondary accent color"],
    ["secondary-foreground", "Text on secondary color"],
    ["muted", "Muted/subtle background"],
    ["muted-foreground", "Muted text color"],
    ["accent", "Accent highlight color"],
    ["accent-foreground", "Text on accent color"],
    ["destructive", "Destructive action color"],
    ["destructive-foreground", "Text on destructive color"],
    ["border", "Border color"],
    ["input", "Form input border color"],
    ["ring", "Focus ring color"]
  ]

  return (
    <Card className="p-6 my-6">
      <div className="grid gap-4">
        {variables.map(([name, description]) => (
          <div key={name} className="flex items-center gap-4">
            <code className="text-sm px-2 py-1 bg-muted rounded">{`--${name}`}</code>
            <span className="text-muted-foreground text-sm">{description}</span>
            <div 
              className="ml-auto w-6 h-6 rounded-full border"
              style={{ background: `hsl(var(--${name}))` }}
            />
          </div>
        ))}
      </div>
    </Card>
  )
}