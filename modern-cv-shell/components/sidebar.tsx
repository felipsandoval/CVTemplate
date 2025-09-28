"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Briefcase, Github, Linkedin } from "lucide-react"

export function Sidebar() {
  return (
    <div className="h-full bg-card border-r border-border overflow-y-auto">
      <div className="p-4 lg:p-6">
        {/* Terminal Header */}
        <div className="mb-6 p-3 bg-muted border border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-destructive"></div>
            <div className="w-3 h-3 bg-accent"></div>
            <div className="w-3 h-3 bg-primary"></div>
            <span className="text-xs text-muted-foreground ml-2">felipe@cv:~$</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mb-6">
          <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 bg-muted border border-border overflow-hidden">
            <img
              src="/CV-img.jpeg"
              alt="Felipe Sandoval"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
          <div className="text-center">
            <h1 className="text-lg lg:text-xl font-bold text-foreground mb-1 terminal-cursor">Felipe Sandoval</h1>
            <p className="text-xs lg:text-sm text-muted-foreground">Felipe Enmanuel Sandoval Sibada</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <div className="terminal-prompt text-sm mb-2">whoami</div>
          <Card className="p-3 bg-card border-border terminal-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <Briefcase className="w-3 h-3 text-primary flex-shrink-0" />
                <span className="break-words">
                  Software Engineer at{" "}
                  <a
                    href="https://www.digimobil.es"
                    target="_blank"
                    className="text-primary hover:text-accent underline"
                    rel="noreferrer"
                  >
                    DIGI Spain
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                <span>Madrid, Spain</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm">
                <Mail className="w-3 h-3 text-primary flex-shrink-0" />
                <a
                  href="mailto:hola@felipsandoval.com"
                  className="text-primary hover:text-accent underline break-all"
                >
                  hola@felipsandoval.com
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <div className="terminal-prompt text-sm mb-2">cat skills.txt</div>
          <div className="space-y-3">
            <div>
              <p className="text-xs lg:text-sm mb-1">Python [████████░░] 80%</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm mb-1">API integration [███████░░░] 75%</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm mb-1">AI applications [███████░░░] 70%</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-6">
          <div className="terminal-prompt text-sm mb-2">ls -la abilities/</div>
          <div className="space-y-3">
            <div>
              <p className="text-xs lg:text-sm mb-1">Self-learning [█████████░] 95%</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm mb-1">Team Management [█████████░] 90%</p>
            </div>
            <div>
              <p className="text-xs lg:text-sm mb-1">Innovation [████████░░] 85%</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <div className="terminal-prompt text-sm mb-2">locale -a</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs lg:text-sm">Spanish</span>
              <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                Native
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs lg:text-sm">English</span>
              <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                C1
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs lg:text-sm">Deutsch</span>
              <Badge variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                A1.1
              </Badge>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="terminal-prompt text-sm mb-2">find /social -type l</div>
        <div className="flex justify-center gap-3">
          <a
            href="mailto:hola@felipsandoval.com"
            className="p-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipesandovalsibada/"
            target="_blank"
            className="p-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            rel="noreferrer"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/felipsandoval"
            target="_blank"
            className="p-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            rel="noreferrer"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
