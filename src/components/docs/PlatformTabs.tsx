import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function PlatformTabs() {
  return (
    <Tabs defaultValue="vercel" className="w-full">
      <TabsList>
        <TabsTrigger value="vercel">Vercel</TabsTrigger>
        <TabsTrigger value="netlify">Netlify</TabsTrigger>
        <TabsTrigger value="github">GitHub Pages</TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="vercel">
          <div>
            <p>Set environment variables in Project Settings → Environment Variables</p>
            <ul className="list-disc mt-2 ml-6">
              <li>Navigate to your project in Vercel</li>
              <li>Go to Project Settings</li>
              <li>Find the Environment Variables section</li>
              <li>Add your variables and save</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="netlify">
          <div>
            <p>Set environment variables in Site Settings → Build & Deploy → Environment</p>
            <ul className="list-disc mt-2 ml-6">
              <li>Go to your site&apos;s dashboard in Netlify</li>
              <li>Navigate to Site Settings</li>
              <li>Find Build & Deploy settings</li>
              <li>Add environment variables in the Environment section</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="github">
          <div>
            <p>Set secrets in Repository Settings → Secrets and Variables → Actions</p>
            <ul className="list-disc mt-2 ml-6">
              <li>Go to your repository settings</li>
              <li>Navigate to Secrets and Variables</li>
              <li>Select Actions</li>
              <li>Add your secrets as needed</li>
            </ul>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}