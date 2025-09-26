"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Terminal, GraduationCap, ExternalLink } from "lucide-react"
import { useParallax } from "./parallax-provider"

export function MainContent() {
  const { scrollY } = useParallax()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 p-4 bg-muted border border-border terminal-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-destructive"></div>
              <div className="w-3 h-3 bg-accent"></div>
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-xs text-muted-foreground ml-2">felipe@cv:~$ ./introduce.sh</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Software <span className="text-primary">Engineer</span>
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto leading-relaxed">
              Especializado en plataformas OTT e IPTV, desarrollo de scripts y gestión de infraestructuras tecnológicas.
              Experiencia en proyectos para Vodafone, Orange TV, BBVA y más.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Python
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                OTT/IPTV
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                CDN
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Automatización
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="flex items-center gap-3 mb-8 lg:mb-12"
            style={{ transform: `translateY(${Math.max(0, (scrollY - 800) * 0.1)}px)` }}
          >
            <Terminal className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            <div className="terminal-prompt text-2xl lg:text-4xl font-bold">cat experience.log</div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* Current Position */}
            <Card
              className="p-4 lg:p-8 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 1000) * 0.05)}px)` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-xs lg:text-sm text-muted-foreground">2019 - Presente</span>
                    <Badge className="bg-primary text-primary-foreground text-xs">ACTIVO</Badge>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">
                    Técnico de Ingeniería para{" "}
                    <a
                      href="https://www.axians.es"
                      target="_blank"
                      className="text-primary hover:text-accent underline inline-flex items-center gap-1"
                      rel="noreferrer"
                    >
                      Axians España
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                    </a>
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Nivel 2/3 OTT e IPTV para proyectos de Vodafone, Andorra Telecom, Mapfre, Orange TV, BBVA, Iberdrola y
                más clientes.
              </p>
              <ul className="space-y-2 text-xs lg:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Gestión de plataforma, CDN, Head-End y VSPP
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Soporte al departamento de operaciones en el área de vídeo y telepresencia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Desarrollo de scripts y tareas de automatización
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Contacto con proveedores como Harmonic, Ericsson, Edgeware, Infoblox, Viaccess-Orca, Cisco
                </li>
              </ul>
            </Card>

            {/* Art Merchant */}
            <Card
              className="p-4 lg:p-8 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.05)}px)` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-xs lg:text-sm text-muted-foreground">2014 - Presente</span>
                    <Badge className="bg-primary text-primary-foreground text-xs">ACTIVO</Badge>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">Marchante de arte</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Ayudante multitarea en atelier de arte para el artista neoexpresionista abstracto{" "}
                <a
                  href="https://www.pedrosandoval.com"
                  target="_blank"
                  className="text-primary hover:text-accent underline inline-flex items-center gap-1"
                  rel="noreferrer"
                >
                  Pedro Sandoval
                  <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                </a>
              </p>
              <ul className="space-y-2 text-xs lg:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Definición y consecución de estrategias digitales para consolidar presencia online
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Desarrollo de modelo negocio para comercializar NFTs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Creación y desarrollo de comunidades digitales
                </li>
              </ul>
            </Card>

            {/* Full Stack Developer */}
            <Card
              className="p-4 lg:p-8 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 1400) * 0.05)}px)` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-xs lg:text-sm text-muted-foreground">2017</span>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">Desarrollador Full Stack</h3>
                </div>
              </div>
              <ul className="space-y-2 text-xs lg:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Programador Full Stack en{" "}
                  <a
                    href="https://shopify.dev/api/liquid"
                    target="_blank"
                    className="text-primary hover:text-accent underline"
                    rel="noreferrer"
                  >
                    Liquid de Shopify
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Desarrollo de estrategias SEO y SEM para e-commerce{" "}
                  <a
                    href="https://www.avrileevans.com"
                    target="_blank"
                    className="text-primary hover:text-accent underline"
                    rel="noreferrer"
                  >
                    Avrile Evans
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 lg:py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div
            className="flex items-center gap-3 mb-8 lg:mb-12"
            style={{ transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.1)}px)` }}
          >
            <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            <div className="terminal-prompt text-2xl lg:text-4xl font-bold">grep -r education /var/log/</div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* University Degree */}
            <Card
              className="p-4 lg:p-8 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 2200) * 0.05)}px)` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-muted-foreground">2014 - 2020</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                Grado en Ingeniería de Sistemas Audiovisuales y Multimedia
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base">Universidad Rey Juan Carlos - Madrid, España</p>
            </Card>

            {/* Infoblox Certification */}
            <Card
              className="p-4 lg:p-8 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
              style={{ transform: `translateY(${Math.max(0, (scrollY - 2400) * 0.05)}px)` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-xs lg:text-sm text-muted-foreground">2021 - 2022</span>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                Certificación profesional DDI de{" "}
                <a
                  href="https://edu.infoblox.com/DDI-Professional.html"
                  target="_blank"
                  className="text-primary hover:text-accent underline inline-flex items-center gap-1"
                  rel="noreferrer"
                >
                  Infoblox, Inc.
                  <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                </a>
              </h3>
              <p className="text-muted-foreground mb-2 text-sm lg:text-base">Infoblox Online Academy</p>
              <ul className="space-y-1 text-xs lg:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Enseñanza sobre protocolos DNS, DHCP e IP Management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&gt;</span>
                  Troubleshooting en solución comercial F-GRID de Infoblox
                </li>
              </ul>
            </Card>

            {/* Additional Courses */}
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <Card
                className="p-4 lg:p-6 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
                style={{ transform: `translateY(${Math.max(0, (scrollY - 2600) * 0.05)}px)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs lg:text-sm text-muted-foreground">2016 - 2017</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm lg:text-base">MOOC de Ciberseguridad</h4>
                <p className="text-xs lg:text-sm text-muted-foreground">Universidad Rey Juan Carlos</p>
              </Card>

              <Card
                className="p-4 lg:p-6 bg-card border-border terminal-border terminal-shadow hover:shadow-lg transition-all duration-300"
                style={{ transform: `translateY(${Math.max(0, (scrollY - 2600) * 0.05)}px)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs lg:text-sm text-muted-foreground">2016</span>
                </div>
                <h4 className="font-semibold mb-2 text-sm lg:text-base">SAP Desarrollo de Aplicaciones Móviles</h4>
                <p className="text-xs lg:text-sm text-muted-foreground">Universidad Complutense de Madrid</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 lg:py-12 px-4 text-center border-t border-border">
        <div className="terminal-prompt text-sm lg:text-base">
          <a
            href="http://www.felipsandoval.com"
            target="_blank"
            className="text-primary hover:text-accent underline"
            rel="noreferrer"
          >
            felipe sandoval ©2025
          </a>
        </div>
      </footer>
    </div>
  )
}
