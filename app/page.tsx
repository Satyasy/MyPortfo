"use client"

import {
  FaGolang
} from "react-icons/fa6"
import {
  FaVuejs, FaLaravel, FaAws, FaReact,
} from "react-icons/fa";
import {
  BiLogoMongodb, BiLogoPostgresql
} from "react-icons/bi";
import {
  RiNextjsLine, RiTailwindCssFill
} from "react-icons/ri";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  // Mengganti tema terang/gelap
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Mengganti bagian aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Beranda", icon: <Code size={18} /> },
    { id: "about", label: "Tentang Saya", icon: <User size={18} /> },
    { id: "projects", label: "Proyek", icon: <Briefcase size={18} /> },
    { id: "education", label: "Pendidikan", icon: <GraduationCap size={18} /> },
  ]

  const skills = [
    {
      category: "Hard Skills",
      items: [
        "Cloud Computing (Juara 1 LKS Kabupaten & Techfest tingkat sekolah)",
        "Linux Dasar (Sertifikasi Aguna Course)",
        "Basic Cloud Practitioner (Sertifikasi Dicoding)"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Kepemimpinan Organisasi Siswa (Ketua MPK (2024/2025) & DPK(2023/2024) SMK Telkom Sidoarjo)",
        "Manajemen Acara (Sie Sponsor Dies Natalis sekolah)",
        "Kerja Sama Tim & Penyelesaian Masalah"
      ]
    },
  ]

  const technologies = [
    { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
    { name: "Golang", icon: <FaGolang className="text-sky-600" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "MongoDB", icon: <BiLogoMongodb className="text-green-700" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-600" /> },
    { name: "Next.js", icon: <RiNextjsLine className="text-black dark:text-white" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-400" /> },
  ];

  // const projects = [
  //   {
  //     title: "Aplikasi E-commerce",
  //     description: "Aplikasi e-commerce dengan keranjang belanja dan gateway pembayaran.",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     image: "/placeholder.svg?height=200&width=350",
  //     github: "#",
  //     demo: "#",
  //   },
  //   {
  //     title: "Task Manager",
  //     description: "Aplikasi untuk mengelola tugas harian dengan fungsionalitas drag and drop.",
  //     technologies: ["JavaScript", "HTML", "CSS"],
  //     image: "/placeholder.svg?height=200&width=350",
  //     github: "#",
  //     demo: "#",
  //   },
  //   {
  //     title: "Aplikasi Cuaca",
  //     description: "Aplikasi yang menampilkan cuaca saat ini dan perkiraan menggunakan API eksternal.",
  //     technologies: ["React", "API REST", "Tailwind CSS"],
  //     image: "/placeholder.svg?height=200&width=350",
  //     github: "#",
  //     demo: "#",
  //   },
  // ]

  const education = [
    {
      period: "2020-2023",
      title: "SMP Al-Kautsar",
      institution: "Yayasan Askandariyah",
      description: "Belajar Ilmu Rohani dan Dasar-dasar Teknologi"
    },
    {
      period: "2023-2027",
      title: "SMK Telkom Sidoarjo",
      institution: "Sistem Informasi Jaringan & Aplikasi",
      description: "Fokus pada pengembangan software, Jaringan serta pada peminatan bidang Cloud Computing.",
    },
    {
      period: "2027-????",
      title: "Coming Soon...",
      institution: "N/A",
      description: "Semoga Mimpi yang di diinginkan bisa tercapai.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/0 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              <img src="/images/icon-nav.svg" alt="icon-navbar" />
            </div>
            <span className="font text-xl hidden sm:block">Revano</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${activeSection === item.id
                  ? "bg-gray-100 dark:bg-gray-800 text-purple-500 dark:text-purple-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun size={25} /> : <Moon size={25} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {/* <Button className="hidden md:flex bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-0">
              Contack Me!
            </Button> */}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400 hover:bg-purple-500/20 dark:hover:bg-purple-400/20">
                  Cloud Engineer & Web Developer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Halo, Saya{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Revano!
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Seorang siswa yang gemar di bidang cloud dan web dan bersemangat untuk menciptakan pengalaman digital yang menarik dan fungsional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/Satyasy">
                    <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-0">
                      Lihat proyek <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="mt-12 flex gap-4">
                  <a
                    href="https://github.com/Satyasy" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/restyand1011" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:revanosatya123@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4"></div>
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
                    <img
                      src="/images/profile.jpg?height=400&width=400"
                      alt="Foto profil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                About Me!
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Kenali Saya Lebih Baik</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Saya adalah seorang Siswa yang memiliki minat di bidang cloud dengan passion untuk mempelajari teknologi baru dan menciptakan solusi inovatif.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Kolom Kiri */}
              <div className="h-full">
                <h3 className="text-2xl font-semibold mb-4">Perjalanan Saya</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Saya adalah pengembang cloud dengan keahlian di berbagai teknologi web. Saya telah memenangkan berbagai kompetisi di bidang Cloud Computing termasuk Juara 1 LKS Kabupaten dan Techfest tingkat sekolah.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Saya memiliki pengalaman dalam kepemimpinan organisasi sebagai Ketua MPK & DPK di SMK Telkom Sidoarjo. Saya juga mendapatkan sertifikasi Linux Dasar dan Dasar-Dasar Cloud Practitioner.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-1">550/990</div>
                    <div className="text-gray-600 dark:text-gray-300">Skor TOEIC (B1 Intermediate)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">594/800</div>
                    <div className="text-gray-600 dark:text-gray-300">Skor UKBI (Unggul)</div>
                  </div>
                </div>
              </div>

              {/* Kolom Kanan */}
              <motion.div layout className="h-full">
                <h3 className="text-2xl font-semibold mb-6">Keterampilan Saya</h3>

                <Tabs defaultValue="Hard Skills" className="w-full">
                  {/* Tombol Tab */}
                  <TabsList className="grid grid-cols-2 mb-6">
                    {skills.map((skill) => (
                      <TabsTrigger key={skill.category} value={skill.category}>
                        {skill.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Isi Tab */}
                  {skills.map((skill) => (
                    <TabsContent key={skill.category} value={skill.category} className="mt-0">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {skill.items.map((item, idx) => (
                          <motion.div
                            key={typeof item === 'string' ? item : item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                            {typeof item === "string" ? (
                              <span className="text-sm">{item}</span>
                            ) : (
                              <>
                                <div className="text-xl">{item.icon}</div>
                                <span className="text-sm">{item.name}</span>
                              </>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              </motion.div>

            </div>
          </div>
        </section>


        {/* Projects Section
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Proyek
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Karya Terbaru Saya</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Berikut adalah beberapa proyek yang telah saya kerjakan baru-baru ini.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <Github size={18} className="text-white" />
                          </a>
                          <a
                            href={project.demo}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                Lihat lebih banyak proyek
              </Button>
            </div>
          </div>
        </section> */}

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Pendidikan
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Latar Belakang Pendidikan</h2>
              <p className="text-gray-600 dark:text-gray-300">Perjalanan pendidikan.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                        {item.period}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">{item.institution}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Arch
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Tentang Teknologi yang Saya Pelajari</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Dalam Project yang telah saya buat, saya mempelajari dan menguasai Services maupun Bahas Pemrograman yang relevan.
              </p>
            </div>
          </div>
          <section className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center text-center gap-2 p-4 "
                >
                  <div className="text-5xl">{tech.icon}</div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </section>

      </main>
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                <img src="/images/icon-nav.svg" alt="" />
              </div>
              <span className="font">Revano</span>
            </div>

            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Revano. All Right Reserved.
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/Satyasy" target="_blank" rel="noopener nopreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/restyand1011" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:revanosatya123@gmail.com" target="_blank" rel="noopener nopreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

