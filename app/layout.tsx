import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt A/B Test Tracker — Optimize AI Prompts with Conversion Tracking',
  description: 'Run multiple prompt variations simultaneously and track which generates better responses based on your success metrics. Built for AI-powered SaaS founders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="639ef0bf-d428-4b91-b054-24e9cca1e191"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
