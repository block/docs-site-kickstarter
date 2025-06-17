import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const defaultTheme = {
  background: '0 0% 100%',
  foreground: '222.2 47.4% 11.2%',
  primary: '222.2 47.4% 11.2%',
  'primary-foreground': '210 40% 98%',
  secondary: '210 40% 96.1%',
  'secondary-foreground': '222.2 47.4% 11.2%',
  muted: '210 40% 96.1%',
  'muted-foreground': '215.4 16.3% 46.9%',
  accent: '210 40% 96.1%',
  'accent-foreground': '222.2 47.4% 11.2%',
  border: '214.3 31.8% 91.4%',
  input: '214.3 31.8% 91.4%',
  ring: '222.2 84% 4.9%',
};

export function ThemeCustomizer() {
  const [theme, setTheme] = React.useState(defaultTheme);
  const [activePreview, setActivePreview] = React.useState('button');

  const updateThemeValue = (key: string, value: string) => {
    setTheme((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Update CSS variables
    document.documentElement.style.setProperty(`--${key}`, value);
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    Object.entries(defaultTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  const exportTheme = () => {
    const cssVariables = Object.entries(theme)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join('\n');

    const themeCSS = `:root {\n${cssVariables}\n}`;
    
    // Create and trigger download
    const blob = new Blob([themeCSS], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'custom-theme.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Theme Customization</h3>
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetTheme}>Reset</Button>
            <Button onClick={exportTheme}>Export Theme</Button>
          </div>
        </div>
        
        <Card className="p-4">
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label>Preview Component</Label>
                <Select value={activePreview} onValueChange={setActivePreview}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="button">Button</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="form">Form</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-background text-foreground">
              {activePreview === 'button' && (
                <div className="flex gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              )}
              {activePreview === 'card' && (
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Sample Card</h4>
                  <p className="text-muted-foreground">This is a preview of the card component with your custom theme.</p>
                </Card>
              )}
              {activePreview === 'form' && (
                <div className="grid gap-4 max-w-sm">
                  <div>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>
                  <Button>Submit</Button>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="grid gap-4">
            {Object.entries(theme).map(([key, value]) => (
              <div key={key} className="grid gap-2">
                <Label className="capitalize">
                  {key.replace(/-/g, ' ')}
                </Label>
                <div className="flex gap-2">
                  <Input
                    value={value}
                    onChange={(e) => updateThemeValue(key, e.target.value)}
                    placeholder={`Enter ${key} value`}
                  />
                  <div
                    className="w-10 h-10 rounded border"
                    style={{ background: `hsl(${value})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}