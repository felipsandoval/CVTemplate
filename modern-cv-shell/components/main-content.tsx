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
              I'm passionate about software development, and I have worked with multiple programming
              languages throughout my career, with a strong affinity for Python and recent experience in C++
              and Ruby. My work focuses on building scalable, secure, and high-performance applications, with
              an eye for both user experience (UX/UI) and technical efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Python
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                C++
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Ruby
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Go
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Linux
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                Docker
              </Badge>
              <Badge variant="secondary" className="text-xs px-2 py-1 bg-secondary text-secondary-foreground">
                MySQL
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Terminal Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border p-6 terminal-border">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4" />
              <span className="text-xs text-muted-foreground">felipe@cv:~$ cat skills.json</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Languages</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Python</div>
                  <div>C++</div>
                  <div>Ruby</div>
                  <div>JavaScript</div>
                  <div>TypeScript</div>
                  <div>Go</div>
                  <div>PHP</div>
                  <div>SQL</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Frameworks & Libraries</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>React</div>
                  <div>Next.js</div>
                  <div>Node.js</div>
                  <div>FastAPI</div>
                  <div>Django</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Tools & Technologies</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Docker</div>
                  <div>Git</div>
                  <div>Linux</div>
                  <div>MySQL</div>
                  <div>PostgreSQL</div>
                  <div>Redis</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Networking & Infrastructure</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>FTTH/GPON</div>
                  <div>SNMP</div>
                  <div>OTT/IPTV</div>
                  <div>Network Automation</div>
                  <div>System Administration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {/* DIGI Experience */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Developer – FTTH Engineering Department</h3>
                  <p className="text-primary font-medium">DIGI</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2024 - Present</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Responsible for developing scripts and tools for network environments, including OLT, ONT, HGU, and CPE devices.</li>
                <li>• Manage and maintain GPON projects focused on provisioning and control.</li>
                <li>• Processes automation through scripting in network protocols like SNMP.</li>
                <li>• Linux Systems Administrator.</li>
              </ul>
            </Card>

            {/* Axians Application Developer */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Application Developer</h3>
                  <p className="text-primary font-medium">AXIANS SPAIN</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2023 - 2024</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Performed full-stack development using Python, JavaScript, PHP, Go, MySQL, and other languages.</li>
                <li>• Designed software architecture and integrated solutions into existing systems.</li>
                <li>• Diagnosed and solved technical and performance issues.</li>
                <li>• Managed configuration and deployment of applications in development and production environments.</li>
                <li>• Automation of repetitive processes and validated REST APIs using Postman.</li>
              </ul>
            </Card>

            {/* Axians Engineering Technician */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Engineering Technician – Video Support Department</h3>
                  <p className="text-primary font-medium">AXIANS SPAIN</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2019 - 2024</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Provided level 2/3 support on OTT and IPTV projects for major clients.</li>
                <li>• Managed platform operations, Head-End, and VSPP.</li>
                <li>• Delivered advanced technical support for video and multimedia systems.</li>
                <li>• Developed scripts to automate routine tasks and collaborated with key technology providers such as Harmonic, Ericsson, Infoblox, and Logi.</li>
                <li>• Offered technical consultancy to end clients.</li>
              </ul>
            </Card>

            {/* E-commerce Developer */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">E-commerce Creation and Full Stack Developer</h3>
                  <p className="text-primary font-medium">Freelance</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2015 - 2016</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Shopify Liquid language programmer.</li>
                <li>• Implemented SEO/SEM strategies and digital marketing campaigns.</li>
              </ul>
            </Card>

            {/* Volunteer Work */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Volunteer Partnership</h3>
                  <p className="text-primary font-medium">Best Buddies International Foundation</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2012 - 2013</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Education & Certifications</h2>
          </div>

          <div className="space-y-6">
            {/* Enterprise Security Nanodegree */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Enterprise Security Nanodegree</h3>
                  <p className="text-primary font-medium mb-2">BERTELSMANN Tech Booster by Udacity</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2024</span>
                </div>
              </div>
            </Card>

            {/* BSc Audiovisual */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">BSc. Audiovisual and Multimedia Systems Engineering</h3>
                  <p className="text-primary font-medium mb-2">Rey Juan Carlos University. Madrid, Spain</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2014 - 2020</span>
                </div>
              </div>
            </Card>

            {/* Cybersecurity MOOCs */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Cybersecurity MOOCs</h3>
                  <p className="text-primary font-medium mb-2">Rey Juan Carlos University. Madrid, Spain</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2016 - 2017</span>
                </div>
              </div>
            </Card>

            {/* Digital Marketing */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Digital Marketing MOOCs</h3>
                  <p className="text-primary font-medium mb-2">IAB SPAIN. Madrid, Spain</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2016</span>
                </div>
              </div>
            </Card>

            {/* Mobile Applications Development */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Mobile Applications Development MOOCs</h3>
                  <p className="text-primary font-medium mb-2">Complutense University of Madrid. Madrid, Spain</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2016</span>
                </div>
              </div>
            </Card>

            {/* Materials Engineering */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Science Degree in Materials Engineering</h3>
                  <p className="text-primary font-medium mb-2">Simón Bolívar University. Caracas, Venezuela</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>2012 - 2014</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 group bg-card border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Network Automation Suite
                </h3>
                <p className="text-sm text-muted-foreground">
                  Python-based automation tools for FTTH network management and GPON provisioning.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs">Python</Badge>
                <Badge variant="outline" className="text-xs">SNMP</Badge>
                <Badge variant="outline" className="text-xs">Linux</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 group bg-card border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  OTT/IPTV Management Platform
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full-stack application for video streaming platform management and monitoring.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs">JavaScript</Badge>
                <Badge variant="outline" className="text-xs">PHP</Badge>
                <Badge variant="outline" className="text-xs">MySQL</Badge>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 group bg-card border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  E-commerce Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Custom Shopify themes and e-commerce platforms with integrated SEO/SEM strategies.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs">Shopify Liquid</Badge>
                <Badge variant="outline" className="text-xs">SEO</Badge>
                <Badge variant="outline" className="text-xs">Digital Marketing</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border p-8 terminal-border">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Terminal className="w-5 h-5" />
              <span className="text-sm text-muted-foreground">felipe@cv:~$ echo "Let's connect"</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, and challenging problems in software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@felipsandoval.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
