import React from 'react'
import { Tabs as BaseTabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface TabsProps extends React.ComponentProps<typeof BaseTabs> {
  items: {
    value: string
    label: string
    content: React.ReactNode
  }[]
}

export function Tabs({ items, ...props }: TabsProps) {
  return (
    <BaseTabs {...props}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-4">
        {items.map((item) => (
          <TabsContent key={item.value} value={item.value}>
            {item.content}
          </TabsContent>
        ))}
      </div>
    </BaseTabs>
  )
}

export { TabsList, TabsTrigger, TabsContent }