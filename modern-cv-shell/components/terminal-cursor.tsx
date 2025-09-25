"use client"

import { useEffect, useState } from "react"

interface TerminalCursorProps {
  text: string
  className?: string
}

export function TerminalCursor({ text, className = "" }: TerminalCursorProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="text-primary">_</span>}
    </span>
  )
}
