import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { Card } from "./card";

export function ThemeVariants() {
  return (
    <Tabs defaultValue="light" className="w-full">
      <TabsList>
        <TabsTrigger value="light">Light Theme</TabsTrigger>
        <TabsTrigger value="dark">Dark Theme</TabsTrigger>
        <TabsTrigger value="system">System Theme</TabsTrigger>
      </TabsList>
      
      <TabsContent value="light">
        <Card className="p-4">
          <div className="prose dark:prose-invert">
            <ul className="list-disc pl-4 space-y-2">
              <li>Clean, minimal design</li>
              <li>High contrast for readability</li>
              <li>Professional color scheme</li>
              <li>Subtle shadows and borders</li>
            </ul>
          </div>
        </Card>
      </TabsContent>
      
      <TabsContent value="dark">
        <Card className="p-4">
          <div className="prose dark:prose-invert">
            <ul className="list-disc pl-4 space-y-2">
              <li>Dark background with light text</li>
              <li>Reduced eye strain</li>
              <li>Maintained contrast ratios</li>
              <li>Subtle accent colors</li>
            </ul>
          </div>
        </Card>
      </TabsContent>
      
      <TabsContent value="system">
        <Card className="p-4">
          <div className="prose dark:prose-invert">
            <p>The system theme automatically matches the user's system preferences:</p>
            <pre className="bg-muted p-2 rounded-md">
              <code>
                {`// Detect system theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}`}
              </code>
            </pre>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}