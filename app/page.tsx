"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowDown, Code, Palette, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"

// 3D Floating Sphere Component
function FloatingSphere() {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.3} speed={1.5} roughness={0} />
      </Sphere>
    </Float>
  )
}

// 3D Background Component
function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <FloatingSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "ALzheimer Detection",
      description:
        "A full-stack AI-ML project which detects the present of alzheimer using medical info and brain mri scan image.",
      image: "/project1.png",
      technologies: ["Next.js", "Tensorflow", "Python", "Numpy","Pandas","etc"],
      github: "https://github.com/PremChaurasiya07/Alzheimer-frontend",
      live: "https://alzheimerfrontend-premchaurasiya07-prems-projects-629da43d.vercel.app/",
    },
    {
      title: "AI Powered Interview Platform",
      description:
        "Aplatform for interview preperation based on user domain and position with voice and camera enabled along with review of the interview.",
      image: "/project2.png?height=200&width=300",
      technologies: ["React", "Node.js", "Gemini api", "Drizzle ORM"],
      github: "https://github.com/PremChaurasiya07/AI-Mock-Interviewer",
      live: "https://ai-mock-interviewer-snowy.vercel.app/",
    },
    {
      title: "Brief.ai",
      description:
        "A unified platfrom for messaging apps. It include whatsapp, Gmail and Calender along which chat interface for solving user query and provide daily summary.",
      image: "/project3.png?height=200&width=300",
      technologies: ["Baileys", "Next js", "Tailwind CSS", "Supabase","Gemini api","Google Auth"],
      github: "https://github.com/PremChaurasiya07/cloudbrief_frontend",
      live: "https://www.loom.com/share/4450b444f3c94ce1b401fa42c3169bd6?sid=380ad23e-2990-478a-97bb-d1c8ccfcc82e",
    },
    // {
    //   title: "AI Content Generator",
    //   description:
    //     "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy.",
    //   image: "/project3.png?height=200&width=300",
    //   technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    //   github: "#",
    //   live: "#",
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section ? "text-purple-400" : "text-white hover:text-purple-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 mt-4">
                {["home", "about", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-white hover:text-purple-300 transition-colors duration-300 text-left"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <ThreeBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse">Prem Chaurasiya</h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in-up animation-delay-300">
              Full Stack Developer & Automation Engineer
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
              I'm a passionate Full-Stack Developer with over 5 years of experience, specializing in modern web technologies. I thrive on creating impactful digital solutions, including automation and AI products, by transforming complex challenges into simple, elegant designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-700">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">About Me</h2>

            <div className="max-w-3xl mx-auto">
              <div className="animate-fade-in-up text-center">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                  make a difference. I specialize in modern web technologies and love turning complex problems into
                  simple, beautiful designs.
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, creating new  projects,
                  or sharing knowledge with the developer community.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <Code className="text-purple-400 mx-auto mb-2" size={32} />
                    <h3 className="text-white font-semibold">Development</h3>
                    <p className="text-gray-400 text-sm">Full Stack</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <Palette className="text-purple-400 mx-auto mb-2" size={32} />
                    <h3 className="text-white font-semibold">Design</h3>
                    <p className="text-gray-400 text-sm">UI/UX</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
                    <Zap className="text-purple-400 mx-auto mb-2" size={32} />
                    <h3 className="text-white font-semibold">Performance</h3>
                    <p className="text-gray-400 text-sm">Optimization</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB","Langflow"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-up group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </Link>
                    <Link
                      href={project.live}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">
              Get In Touch
            </h2>

            <div className="max-w-2xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-4">
                    <Mail className="text-purple-400" size={20} />
                    <span className="text-gray-300">premchaurasiya2006@gmail.com</span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Link
                    href="https://github.com/PremChaurasiya07/"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <Mail size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Prem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
