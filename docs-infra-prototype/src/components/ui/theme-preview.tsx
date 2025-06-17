import React from 'react';
import { Card } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

export function ThemePreview() {
  return (
    <Tabs defaultValue="light" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="light">Light</TabsTrigger>
        <TabsTrigger value="dark">Dark</TabsTrigger>
      </TabsList>
      
      <TabsContent value="light" className="space-y-4">
        <PreviewContent />
      </TabsContent>
      
      <TabsContent value="dark" className="space-y-4 bg-slate-950 p-4 rounded-lg">
        <PreviewContent />
      </TabsContent>
    </Tabs>
  );
}

function PreviewContent() {
  return (
    <div className="grid gap-4">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Theme Preview</h3>
        
        <div className="grid gap-6">
          {/* Typography */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Typography</h4>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-semibold">Heading 2</h2>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <p className="text-base">Regular paragraph text</p>
              <p className="text-sm text-muted-foreground">Muted text</p>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Buttons</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Form Elements</h4>
            <div className="grid gap-4 max-w-sm">
              <div>
                <Label>Input Field</Label>
                <Input placeholder="Enter text..." />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="check" className="rounded border-input" />
                <Label htmlFor="check">Checkbox</Label>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Colors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="flex flex-col gap-1">
                <div className="w-full h-10 rounded bg-primary" />
                <span className="text-xs">Primary</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-10 rounded bg-secondary" />
                <span className="text-xs">Secondary</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-10 rounded bg-accent" />
                <span className="text-xs">Accent</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-full h-10 rounded bg-muted" />
                <span className="text-xs">Muted</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Card Title</h3>
              <p className="text-sm text-muted-foreground">
                This is a sample card with some content to demonstrate the theme.
              </p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">Interactive Card</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This card includes interactive elements.
              </p>
              <Button variant="secondary" size="sm">Action</Button>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}