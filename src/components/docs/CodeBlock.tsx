import React from 'react'
import { Card } from "@/components/ui/card"

type CodeBlockProps = {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "css", className = "" }: CodeBlockProps) {
  return (
    <Card className={`p-4 ${className}`}>
      <pre className={`language-${language}`}>
        <code>{code.trim()}</code>
      </pre>
    </Card>
  )
}