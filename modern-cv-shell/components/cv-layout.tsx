"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "./sidebar"
import { MainContent } from "./main-content"
import { ParallaxProvider } from "./parallax-provider"

export function CVLayout() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-80 lg:z-10 w-full">
            <Sidebar />
          </div>

          <div className="lg:ml-80 flex-1 w-full">
            <MainContent />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}
