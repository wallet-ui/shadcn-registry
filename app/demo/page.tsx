'use client'
import * as React from "react"
import { AppHeader } from "@/components/app-header";
import { DemoFeature } from "@/features/demo/demo-feature";

export default function DemoPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <AppHeader />
      <main>
        <DemoFeature />
      </main>
    </div>
  )
}
