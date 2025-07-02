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
  // Early return if no items
  if (!items || items.length === 0) {
    return null;
  }

  // Create unique values for each tab using index to avoid duplicates
  const tabsWithUniqueValues = items.map((item, index) => ({
    ...item,
    uniqueValue: `tab-${index}` // Simplified unique value
  }));

  // Find default tab or use first tab
  const defaultTab = defaultValue 
    ? tabsWithUniqueValues.find(item => item.language === defaultValue)?.uniqueValue || tabsWithUniqueValues[0].uniqueValue
    : tabsWithUniqueValues[0].uniqueValue;

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {tabsWithUniqueValues.map((item) => (
          <TabsTrigger 
            key={item.uniqueValue} 
            value={item.uniqueValue}
            className="text-sm"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-4">
        {tabsWithUniqueValues.map((item) => (
          <TabsContent key={item.uniqueValue} value={item.uniqueValue} className="mt-0">
            <pre className="rounded-lg bg-slate-950 p-4 overflow-x-auto text-slate-50 border border-slate-800">
              <code className={`language-${item.language} text-sm leading-relaxed`}>
                {item.code}
              </code>
            </pre>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}