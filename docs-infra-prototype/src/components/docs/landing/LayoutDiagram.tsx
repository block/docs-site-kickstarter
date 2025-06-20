import React from 'react'
import { Card } from "@/components/ui/card"

export function LayoutDiagram() {
  return (
    <Card className="p-6 my-6">
      <pre className="text-sm font-mono whitespace-pre leading-relaxed">
{`┌──────────────────────────────┐
│           Header             │
├──────────────────────────────┤
│            Hero              │
│   • Title & Description      │
│   • Call-to-action Buttons   │
│   • Search Bar               │
├──────────────────────────────┤
│         Features Grid        │
│   • Feature Cards            │
│   • Icons & Descriptions     │
├──────────────────────────────┤
│       Quick Links Grid       │
│   • Navigation Cards         │
│   • Section Previews         │
├──────────────────────────────┤
│      Custom Content          │
│   • MDX Content              │
│   • Custom Components        │
└──────────────────────────────┘`}
      </pre>
    </Card>
  )
}