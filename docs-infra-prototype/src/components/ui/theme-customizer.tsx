import React from 'react';
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';
import { Card } from './card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { Slider } from './slider';
import { Textarea } from './textarea';

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

const defaultContent = {
  button: {
    primary: 'Primary Button',
    secondary: 'Secondary Button',
    outline: 'Outline Button',
  },
  card: {
    title: 'Sample Card',
    description: 'This is a preview of the card component with your custom theme.',
  },
  form: {
    title: 'Contact Form',
    nameLabel: 'Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    submitText: 'Submit',
  },
};

interface HSLColor {
  h: number;
  s: number;
  l: number;
}

function parseHSL(hslString: string): HSLColor {
  const [h, s, l] = hslString.split(' ').map(val => parseFloat(val));
  return { h, s, l };
}

function formatHSL(hsl: HSLColor): string {
  return `${hsl.h} ${hsl.s}% ${hsl.l}%`;
}

export function ThemeCustomizer() {
  const [theme, setTheme] = React.useState(defaultTheme);
  const [content, setContent] = React.useState(defaultContent);
  const [activePreview, setActivePreview] = React.useState('button');
  const [isEditingContent, setIsEditingContent] = React.useState(false);
  const previewRef = React.useRef<HTMLDivElement>(null);

  const updateThemeValue = (key: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      [key]: value,
    }));

    if (previewRef.current) {
      // Update the style property
      previewRef.current.style.setProperty(`--${key}`, value);
      
      // Also update CSS custom properties on the :root for the preview container
      const style = document.createElement('style');
      style.textContent = `
        #preview-container {
          --${key}: ${value};
        }
        #preview-container * {
          --${key}: ${value};
        }
      `;
      document.head.appendChild(style);
    }
  };

  const updateHSLValue = (key: string, hslValues: HSLColor) => {
    const newValue = formatHSL(hslValues);
    updateThemeValue(key, newValue);
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
    setContent(defaultContent);
    if (previewRef.current) {
      Object.entries(defaultTheme).forEach(([key, value]) => {
        previewRef.current?.style.setProperty(`--${key}`, value);
      });
    }
  };

  const exportTheme = () => {
    const cssVariables = Object.entries(theme)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join('\n');

    const themeCSS = `:root {\n${cssVariables}\n}`;
    
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

  const updateContent = (section: keyof typeof content, key: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  React.useEffect(() => {
    if (previewRef.current) {
      Object.entries(theme).forEach(([key, value]) => {
        previewRef.current?.style.setProperty(`--${key}`, value);
      });
    }
  }, []);

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
            <div className="flex gap-4 justify-between items-center">
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditingContent(!isEditingContent)}
              >
                {isEditingContent ? 'Preview' : 'Edit Content'}
              </Button>
            </div>

            <div 
              id="preview-container"
              ref={previewRef}
              className="border rounded-lg p-4 flex items-center justify-center min-h-[200px] bg-background"
              style={{
                isolation: 'isolate',
                ...Object.fromEntries(
                  Object.entries(theme).map(([key, value]) => [
                    `--${key}`,
                    value
                  ])
                )
              }}
            >
              {!isEditingContent ? (
                <>
                  {activePreview === 'button' && (
                    <div className="flex gap-2">
                      <Button>{content.button.primary}</Button>
                      <Button variant="secondary">{content.button.secondary}</Button>
                      <Button variant="outline">{content.button.outline}</Button>
                    </div>
                  )}

                  {activePreview === 'card' && (
                    <Card className="p-4 w-full max-w-md">
                      <h4 className="font-semibold mb-2">{content.card.title}</h4>
                      <p className="text-muted-foreground">{content.card.description}</p>
                    </Card>
                  )}

                  {activePreview === 'form' && (
                    <div className="grid gap-4 w-full max-w-sm">
                      <div>
                        <Label>{content.form.nameLabel}</Label>
                        <Input placeholder={content.form.namePlaceholder} />
                      </div>
                      <div>
                        <Label>{content.form.emailLabel}</Label>
                        <Input type="email" placeholder={content.form.emailPlaceholder} />
                      </div>
                      <Button>{content.form.submitText}</Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full max-w-md space-y-4">
                  {activePreview === 'button' && (
                    <>
                      <div>
                        <Label>Primary Button Text</Label>
                        <Input
                          value={content.button.primary}
                          onChange={(e) => updateContent('button', 'primary', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Secondary Button Text</Label>
                        <Input
                          value={content.button.secondary}
                          onChange={(e) => updateContent('button', 'secondary', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Outline Button Text</Label>
                        <Input
                          value={content.button.outline}
                          onChange={(e) => updateContent('button', 'outline', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {activePreview === 'card' && (
                    <>
                      <div>
                        <Label>Card Title</Label>
                        <Input
                          value={content.card.title}
                          onChange={(e) => updateContent('card', 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Card Description</Label>
                        <Textarea
                          value={content.card.description}
                          onChange={(e) => updateContent('card', 'description', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {activePreview === 'form' && (
                    <>
                      <div>
                        <Label>Name Label</Label>
                        <Input
                          value={content.form.nameLabel}
                          onChange={(e) => updateContent('form', 'nameLabel', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Name Placeholder</Label>
                        <Input
                          value={content.form.namePlaceholder}
                          onChange={(e) => updateContent('form', 'namePlaceholder', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Email Label</Label>
                        <Input
                          value={content.form.emailLabel}
                          onChange={(e) => updateContent('form', 'emailLabel', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Email Placeholder</Label>
                        <Input
                          value={content.form.emailPlaceholder}
                          onChange={(e) => updateContent('form', 'emailPlaceholder', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Submit Button Text</Label>
                        <Input
                          value={content.form.submitText}
                          onChange={(e) => updateContent('form', 'submitText', e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="grid gap-6">
            {Object.entries(theme).map(([key, value]) => {
              const hsl = parseHSL(value);
              return (
                <div key={key} className="grid gap-2">
                  <Label className="capitalize">
                    {key.replace(/-/g, ' ')}
                  </Label>
                  <div className="grid gap-4">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-xs text-muted-foreground">Hue</Label>
                        <Slider
                          value={[hsl.h]}
                          min={0}
                          max={360}
                          step={0.1}
                          onValueChange={([h]) => updateHSLValue(key, { ...hsl, h })}
                          className="mt-1"
                        />
                      </div>
                      <Input
                        type="number"
                        value={hsl.h}
                        onChange={(e) => updateHSLValue(key, { ...hsl, h: parseFloat(e.target.value) || 0 })}
                        className="w-20"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-xs text-muted-foreground">Saturation</Label>
                        <Slider
                          value={[hsl.s]}
                          min={0}
                          max={100}
                          step={0.1}
                          onValueChange={([s]) => updateHSLValue(key, { ...hsl, s })}
                          className="mt-1"
                        />
                      </div>
                      <Input
                        type="number"
                        value={hsl.s}
                        onChange={(e) => updateHSLValue(key, { ...hsl, s: parseFloat(e.target.value) || 0 })}
                        className="w-20"
                      />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-xs text-muted-foreground">Lightness</Label>
                        <Slider
                          value={[hsl.l]}
                          min={0}
                          max={100}
                          step={0.1}
                          onValueChange={([l]) => updateHSLValue(key, { ...hsl, l })}
                          className="mt-1"
                        />
                      </div>
                      <Input
                        type="number"
                        value={hsl.l}
                        onChange={(e) => updateHSLValue(key, { ...hsl, l: parseFloat(e.target.value) || 0 })}
                        className="w-20"
                      />
                    </div>
                    <div
                      className="h-6 w-full rounded border"
                      style={{ background: `hsl(${value})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}