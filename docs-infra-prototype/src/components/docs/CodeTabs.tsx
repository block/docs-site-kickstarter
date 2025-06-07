import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface CodeTabsProps {
  items: {
    language: string;
    label: string;
    code: string;
  }[];
  defaultValue?: string;
}

export function CodeTabs({ items, defaultValue }: CodeTabsProps) {
  return (
    <Tabs defaultValue={defaultValue ?? items[0].language} className="w-full">
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.language} value={item.language}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-4">
        {items.map((item) => (
          <TabsContent key={item.language} value={item.language}>
            <pre className="rounded-lg bg-slate-950 p-4">
              <code className={`language-${item.language}`}>
                {item.code}
              </code>
            </pre>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}