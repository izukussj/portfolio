import { Mail, Phone, Linkedin, Download, ExternalLink, Briefcase, GraduationCap, Calendar, Star, Code2, Hammer, Database, Shield, Workflow, MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ====== Portfolio dernier cri – Single-file React (Tailwind) ======
// - 100% statique, prêt pour GitHub Pages/Netlify/Vercel
// - Modifie les constantes ci-dessous pour personnaliser

const PROFILE = {
  name: "Seydina Laye",
  title: "Ingénieur informatique – Back-end, API & DevOps",
  location: "France",
  email: "seydina.laye85@gmail.com",
  phone: "+33 6 12 37 95 13",
  linkedin: "https://www.linkedin.com/in/alassanelayediop/",
  // Met le chemin de ton PDF si tu veux activer le bouton CV
  cvUrl: "",
  about:
    "Ingénieur curieux et pragmatique, j'aime comprendre, automatiser et construire des outils utiles. Je valorise la qualité du code, la collaboration et l'impact utilisateur.",
};

const EXPERIENCES = [
  {
    company: "OCTO Technology",
    role: "Stagiaire Ingénieur Back‑end & DevOps",
    period: "févr. 2025 → août 2025",
    bullets: [
      "Benchmark de solutions d'API Management (performance, coût, gouvernance, UX, archi K8s)",
      "CLI Python orchestrant Apache Bench & wrk pour mesurer latence & scalabilité sur 4 API Gateways conteneurisées",
      "Dashboard comparatif : FastAPI + FAISS (RAG) avec filtres multi‑axes & recherche naturelle",
      "Publication des résultats sur api-by-octo",
    ],
    tags: ["Python", "Docker", "Kubernetes", "ab", "wrk", "FastAPI", "FAISS", "RAG"],
  },
  {
    company: "Cabinet Vision France (CVF)",
    role: "Stagiaire Développeur JavaScript",
    period: "avr. 2024 → juil. 2024",
    bullets: [
      "Portail de gestion des commandes (Angular + Symfony)",
      "Intégration de l'API SmartCut pour calculs de plans de découpe en temps réel",
      "Modernisation des automatisations : conversion vers JavaScript, refacto de macros propriétaires",
      "Mise en place d'un workflow Git + VS Code et bonnes pratiques d'équipe",
    ],
    tags: ["Angular", "Symfony", "API", "Git"],
  },
  {
    company: "Chapiock",
    role: "Stagiaire Data Scientist & Développeur Web",
    period: "avr. 2023 → juil. 2023",
    bullets: [
      "Moteur de recommandation (TensorFlow) basé sur données comportementales",
      "Amélioration UX d'une plateforme e‑commerce via visualisation de données",
    ],
    tags: ["TensorFlow", "Data", "UX"],
  },
  {
    company: "Vinci Energies",
    role: "Stagiaire Développeur Mobile",
    period: "mai 2019 → juil. 2019",
    bullets: [
      "Application de gestion de stocks avec UI intuitive et back‑end Java robuste",
    ],
    tags: ["Java", "Mobile"],
  },
  {
    company: "Université du Littoral",
    role: "Tuteur pédagogique (CDD)",
    period: "déc. 2021 → juil. 2023",
    bullets: [
      "Accompagnement d'étudiants en mathématiques, physique et informatique",
      "Création de supports pédagogiques interactifs",
    ],
    tags: ["Pédagogie", "Mentorat"],
  },
];

const EDUCATION = [
  {
    school: "EIL Côte d’Opale",
    degree: "Cycle ingénieur informatique",
    period: "2021 – 2025",
  },
  {
    school: "École Supérieure Polytechnique",
    degree: "Licence en informatique",
    period: "2021",
  },
];

const PROJECTS = [
  {
    title: "APIM Benchmark CLI",
    subtitle: "Mesure latence & scalabilité sur 4 API Gateways",
    description:
      "Outil CLI Python orchestrant ab & wrk, exécution conteneurisée, scénarios reproductibles, reporting clair.",
    tags: ["Python", "Docker", "K8s", "ab", "wrk"],
    link: null,
  },
  {
    title: "Dashboard comparatif APIM (RAG)",
    subtitle: "Recherche naturelle & filtres multi‑axes",
    description:
      "FastAPI + FAISS pour une exploration guidée des features, coûts et métriques de plateformes d'API Management.",
    tags: ["FastAPI", "FAISS", "RAG", "NLP"],
    link: null,
  },
  {
    title: "Portail commandes CVF",
    subtitle: "Angular + Symfony + API SmartCut",
    description:
      "Gestion temps réel des commandes et calculs de découpe. Focus DX, performance et fiabilité.",
    tags: ["Angular", "Symfony", "API"],
    link: null,
  },
  {
    title: "App gestion de stocks",
    subtitle: "Mobile + back‑end Java",
    description:
      "Suivi d'inventaire, formulaires offline‑friendly, synchronisation sécurisée.",
    tags: ["Java", "Mobile"],
    link: null,
  },
  {
    title: "Recommender Engine",
    subtitle: "TensorFlow + signaux comportementaux",
    description:
      "Algorithmes supervisés, features d'engagement, et évaluation offline/online.",
    tags: ["TensorFlow", "ML", "Recommender"],
    link: null,
  },
];

const SKILLS = [
  { icon: Code2, title: "Langages & Frameworks", items: ["Python", "Java", "JavaScript (React/Angular)", "Go", "Rust", "C++"] },
  { icon: Shield, title: "API & Intégration", items: ["REST/JSON", "OpenAPI/Swagger", "Postman", "JWT/OAuth2"] },
  { icon: Hammer, title: "DevOps & Tooling", items: ["Docker", "GitHub Actions", "Terraform", "Ansible (bases)", "Kubernetes", "AWS"] },
  { icon: Database, title: "Bases de données", items: ["PostgreSQL", "SQLite"] },
  { icon: Workflow, title: "Méthodes & Qualité", items: ["Agile (Scrum)", "Clean Code", "TDD", "Pytest", "Espresso/JUnit"] },
];

const LANGUAGES = [
  { name: "Français", level: "Maternelle" },
  { name: "Anglais", level: "Professionnelle" },
];

const COMMUNITY = [
  { title: "Président du club d'échecs Chess&Co" },
  { title: "Membre du BDH de l'EILCO" },
  { title: "Volontaire Raise Summit 2025" },
  { title: "Meetups Software Crafters, React Paris, OWASP; Conférences DevFest, France API" },
];

// ====== Particle Background ======
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas!.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas!.height) particle.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 210, 255, ${particle.opacity})`;
        ctx!.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.strokeStyle = `rgba(0, 210, 255, ${0.1 * (1 - distance / 100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

// ====== Custom Cursor ======
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX - 8}px, ${mouseY - 8}px, 0)`;
      }
    };

    const moveFollower = () => {
      if (follower) {
        follower.style.transform = `translate3d(${mouseX - 16}px, ${mouseY - 16}px, 0)`;
      }
      requestAnimationFrame(moveFollower);
    };

    window.addEventListener('mousemove', moveCursor);
    moveFollower();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

// ====== Typewriter Effect ======
function TypewriterEffect({ texts, speed = 100 }: { texts: string[]; speed?: number }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(text.slice(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts, speed]);

  return (
    <span className="typewriter">
      {currentText}
    </span>
  );
}

// ====== Animated Counter ======
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={countRef} className="font-bold text-2xl font-mono" style={{ color: 'var(--accent-primary)' }}>{count}{suffix}</div>;
}

// ====== Section Indicator ======
function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Accueil' },
    { id: 'projects', label: 'Projets' },
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group relative w-3 h-3 rounded-full border-2 transition-all"
          style={activeSection === section.id ? {
            background: 'var(--accent-primary)',
            borderColor: 'var(--accent-primary)',
            transform: 'scale(1.25)'
          } : {
            borderColor: 'rgba(255, 255, 255, 0.3)'
          }}
          onMouseEnter={(e) => {
            if (activeSection !== section.id) {
              e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.6)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeSection !== section.id) {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          <span className="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white/90 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
}

// ====== UI Primitives ======

function Chip({ children }: any) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90">
      {children}
    </span>
  );
}

function Card({ children }: any) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)] p-6">
      {children}
    </div>
  );
}

// ====== Main App ======
export default function PortfolioApp() {
  return (
    <div className="min-h-screen text-white relative" style={{ background: 'var(--bg-primary)' }}>
      <CustomCursor />
      <ParticleBackground />
      <SectionIndicator />
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 h-60 w-60 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(58, 123, 213, 0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-6">
        <a href="#home" className="group relative inline-block">
          <div className="absolute -inset-2 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" style={{
            background: 'linear-gradient(to right, #6366f1, #8b5cf6)'
          }}></div>
          <div className="relative font-bold text-xl tracking-tight px-4 py-2 rounded-lg border backdrop-blur-sm" style={{
            color: 'var(--text-primary)',
            background: 'rgba(0, 0, 0, 0.3)',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }}>
            Seydina<span className="font-mono" style={{ color: '#8b5cf6' }}>.dev</span>
          </div>
        </a>
      </header>

      {/* Top Navigation */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="backdrop-blur-xl bg-black/10 rounded-2xl p-3 border border-white/10">
          <div className="flex space-x-3">
            <a href="#projects" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <Briefcase className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Projets
              </span>
            </a>
            
            <a href="#experience" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <Calendar className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Expérience
              </span>
            </a>
            
            <a href="#skills" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <Code2 className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Compétences
              </span>
            </a>
            
            <a href="#education" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <GraduationCap className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Formation
              </span>
            </a>
            
            <a href="#contact" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <Mail className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Contact
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Profile Photo Focus */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-16 relative">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Simple elegant border */}
              <div className="absolute -inset-3 rounded-full" style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))'
              }}></div>
              
              {/* Soft glow */}
              <div className="absolute -inset-1 rounded-full blur-md opacity-20" style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)'
              }}></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
                <img 
                  src="/seydina.png" 
                  alt="Seydina Laye"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{
              background: 'rgba(99, 102, 241, 0.1)',
              color: '#6366f1',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              Disponible pour CDI
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              <span className="text-white font-extralight">{PROFILE.name.split(' ')[0]} </span>
              <span className="font-medium" style={{ color: '#6366f1' }}>{PROFILE.name.split(' ')[1]}</span>
              <span className="text-2xl md:text-4xl font-mono opacity-80" style={{ color: '#8b5cf6' }}>.dev</span>
            </h1>
            <div className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: '#94a3b8', minHeight: '2rem' }}>
              <TypewriterEffect texts={[
                'Ingénieur informatique',
                'Développeur Back-end',
                'Expert API & DevOps',
                'Consultant technique'
              ]} speed={80} />
            </div>
          </div>

          {/* Brief description */}
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-16 font-light" style={{ color: '#64748b' }}>
            {PROFILE.about}
          </p>

          {/* Elegant Scroll Indicator */}
          <div className="relative">
            <a href="#projects" className="group inline-flex flex-col items-center gap-4 transition-all duration-300">
              <div className="relative">
                <div className="w-px h-12 mx-auto" style={{ background: 'linear-gradient(to bottom, transparent, #6366f1, transparent)' }}></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <MousePointer2 className="h-5 w-5 text-white/60 group-hover:text-white transition-colors animate-bounce" style={{ transform: 'rotate(90deg)' }} />
                </div>
              </div>
              <span className="text-sm font-light opacity-60 group-hover:opacity-100 transition-opacity tracking-wide" style={{ color: 'white' }}>
                Découvrir mes projets
              </span>
            </a>
          </div>
        </div>

        {/* Minimalist floating elements */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          <div className="absolute top-1/3 right-32 animate-float-slow opacity-40">
            <div className="text-right">
              <div className="text-3xl font-light text-white mb-1">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-sm font-light" style={{ color: '#94a3b8' }}>Projets</p>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 left-32 animate-float-slow opacity-40" style={{ animationDelay: '1.5s' }}>
            <div className="text-left">
              <div className="text-3xl font-light text-white mb-1">
                <AnimatedCounter end={4} suffix=" ans" />
              </div>
              <p className="text-sm font-light" style={{ color: '#94a3b8' }}>Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Enhanced Layout */}
      <section id="projects" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header with Visual Emphasis */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(0, 210, 255, 0.1)',
              border: '1px solid rgba(0, 210, 255, 0.2)'
            }}>
              <Briefcase className="h-5 w-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projets récents</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Sélection centrée performance, DX et fiabilité</p>
          </div>

          {/* Featured Project Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {PROJECTS.slice(0, 2).map((p, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" style={{
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))'
                }}></div>
                <Card>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                        <p className="text-lg font-medium" style={{ color: 'var(--accent-primary)' }}>{p.subtitle}</p>
                      </div>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105" style={{
                          background: 'rgba(0, 210, 255, 0.1)',
                          color: 'var(--accent-primary)',
                          border: '1px solid rgba(0, 210, 255, 0.2)'
                        }}>
                          Voir <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {p.tags.map((t) => (
                        <span key={t} className="px-3 py-1.5 text-sm font-medium rounded-full" style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-primary)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.slice(2).map((p, idx) => (
              <Card key={idx}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--accent-primary)' }}>{p.subtitle}</p>
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline" style={{ color: 'var(--accent-primary)' }}>
                      Voir <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience - Timeline Style */}
      <section id="experience" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(255, 0, 110, 0.1)',
              border: '1px solid rgba(255, 0, 110, 0.2)'
            }}>
              <Calendar className="h-5 w-5" style={{ color: 'var(--accent-tertiary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-tertiary)' }}>PARCOURS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mon expérience</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Stages, projets et enseignement</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-tertiary))' }}></div>
            
            <div className="space-y-12">
              {EXPERIENCES.map((e, i) => (
                <div key={i} className="group relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110" style={{
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-tertiary)'}, ${i % 2 === 0 ? 'var(--accent-secondary)' : 'var(--accent-primary)'})`,
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}>
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="group-hover:scale-[1.02] transition-transform duration-300">
                      <Card>
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 text-sm font-semibold rounded-full" style={{
                                  background: `linear-gradient(135deg, ${i % 2 === 0 ? 'rgba(0, 210, 255, 0.2)' : 'rgba(255, 0, 110, 0.2)'}, ${i % 2 === 0 ? 'rgba(58, 123, 213, 0.2)' : 'rgba(0, 210, 255, 0.2)'})`,
                                  color: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-tertiary)',
                                  border: `1px solid ${i % 2 === 0 ? 'rgba(0, 210, 255, 0.3)' : 'rgba(255, 0, 110, 0.3)'}`
                                }}>{e.company}</span>
                              </div>
                              <h3 className="text-xl lg:text-2xl font-bold">{e.role}</h3>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              color: 'var(--text-secondary)'
                            }}>
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm font-medium">{e.period}</span>
                            </div>
                          </div>

                          {/* Bullets */}
                          <ul className="space-y-3">
                            {e.bullets.map((b, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--accent-primary)' }} />
                                <span style={{ color: 'var(--text-secondary)' }}>{b}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-3 pt-2">
                            {e.tags.map((t) => (
                              <span key={t} className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors hover:scale-105" style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                color: 'var(--text-primary)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                              }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Enhanced Layout */}
      <section id="skills" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(58, 123, 213, 0.1)',
              border: '1px solid rgba(58, 123, 213, 0.2)'
            }}>
              <Code2 className="h-5 w-5" style={{ color: 'var(--accent-secondary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-secondary)' }}>EXPERTISES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Compétences</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Stack principale & pratiques d'ingénierie</p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {SKILLS.map((s, i) => (
              <div key={i} className="group">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" style={{
                    background: `linear-gradient(135deg, ${i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'var(--accent-tertiary)'}, ${i % 3 === 0 ? 'var(--accent-secondary)' : i % 3 === 1 ? 'var(--accent-tertiary)' : 'var(--accent-primary)'})`
                  }}></div>
                  <Card>
                    <div className="relative z-10 space-y-6">
                      {/* Category Header */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl" style={{
                          background: `linear-gradient(135deg, ${i % 3 === 0 ? 'rgba(0, 210, 255, 0.2)' : i % 3 === 1 ? 'rgba(58, 123, 213, 0.2)' : 'rgba(255, 0, 110, 0.2)'}, ${i % 3 === 0 ? 'rgba(58, 123, 213, 0.2)' : i % 3 === 1 ? 'rgba(255, 0, 110, 0.2)' : 'rgba(0, 210, 255, 0.2)'})`
                        }}>
                          <s.icon className="h-8 w-8" style={{ color: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'var(--accent-tertiary)' }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{s.title}</h3>
                          <div className="w-12 h-1 rounded-full mt-2" style={{
                            background: `linear-gradient(to right, ${i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'var(--accent-tertiary)'}, ${i % 3 === 0 ? 'var(--accent-secondary)' : i % 3 === 1 ? 'var(--accent-tertiary)' : 'var(--accent-primary)'})`
                          }}></div>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3">
                        {s.items.map((item: string) => (
                          <div key={item} className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] hover:bg-white/10" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: i % 3 === 0 ? 'var(--accent-primary)' : i % 3 === 1 ? 'var(--accent-secondary)' : 'var(--accent-tertiary)' }}></div>
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <Card>
              <div className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-6">En quelques mots</h3>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Passion pour l'architecture logicielle, l'automatisation et l'optimisation des performances. 
                  Expérience avec les écosystèmes cloud-native, les API haut débit et les outils de développement modernes. 
                  Adepte des méthodologies agiles et des bonnes pratiques de qualité logicielle.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Community - Combined Section */}
      <section id="education" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(0, 210, 255, 0.1)',
              border: '1px solid rgba(0, 210, 255, 0.2)'
            }}>
              <GraduationCap className="h-5 w-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>FORMATION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Formation & Engagement</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Parcours académique & apprentissage continu</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
                Formation académique
              </h3>
              <div className="space-y-6">
                {EDUCATION.map((ed, i) => (
                  <div key={i} className="group">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300" style={{
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                      }}></div>
                      <Card>
                        <div className="relative z-10 p-2">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full" style={{ background: 'var(--accent-primary)' }}></div>
                            <span className="text-sm font-medium px-3 py-1 rounded-full" style={{
                              background: 'rgba(0, 210, 255, 0.1)',
                              color: 'var(--accent-primary)'
                            }}>{ed.school}</span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{ed.degree}</h4>
                          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <Calendar className="h-4 w-4" />
                            <span>{ed.period}</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community & Languages */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Star className="h-6 w-6" style={{ color: 'var(--accent-tertiary)' }} />
                  Engagements
                </h3>
                <Card>
                  <div className="space-y-4">
                    {COMMUNITY.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-white/5">
                        <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: 'var(--accent-tertiary)' }} />
                        <span style={{ color: 'var(--text-secondary)' }}>{c.title}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Langues</h3>
                <Card>
                  <div className="space-y-4">
                    {LANGUAGES.map((l, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <span className="font-medium">{l.name}</span>
                        <span className="px-3 py-1 text-sm rounded-full" style={{
                          background: 'rgba(0, 210, 255, 0.1)',
                          color: 'var(--accent-primary)'
                        }}>{l.level}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Enhanced */}
      <section id="contact" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(255, 0, 110, 0.1)',
              border: '1px solid rgba(255, 0, 110, 0.2)'
            }}>
              <Mail className="h-5 w-5" style={{ color: 'var(--accent-tertiary)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--accent-tertiary)' }}>CONTACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Discutons de votre projet</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Parlons de votre prochain défi</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <div className="p-4 space-y-6">
                  <a className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]" href={`mailto:${PROFILE.email}`} style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-3 rounded-xl" style={{ background: 'rgba(0, 210, 255, 0.1)' }}>
                      <Mail className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div style={{ color: 'var(--text-secondary)' }}>{PROFILE.email}</div>
                    </div>
                  </a>

                  <a className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]" href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-3 rounded-xl" style={{ background: 'rgba(58, 123, 213, 0.1)' }}>
                      <Phone className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold">Téléphone</div>
                      <div style={{ color: 'var(--text-secondary)' }}>{PROFILE.phone}</div>
                    </div>
                  </a>

                  <a className="group flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02]" href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-3 rounded-xl" style={{ background: 'rgba(255, 0, 110, 0.1)' }}>
                      <Linkedin className="h-6 w-6" style={{ color: 'var(--accent-tertiary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Profil professionnel</div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left space-y-8">
              <Card>
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">Disponible pour CDI</h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Recherche des postes en <strong>développement back‑end</strong>, <strong>API Platform</strong>, 
                    et missions orientées <strong>performance & observabilité</strong>.
                  </p>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Intéressé par les challenges techniques, l'architecture évolutive, 
                    et les équipes qui valorisent la qualité et l'innovation.
                  </p>
                  <div className="pt-4">
                    <a href={`mailto:${PROFILE.email}?subject=Opportunité%20CDI`} className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg" style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'white'
                    }}>
                      <Mail className="h-5 w-5" />
                      Discutons de votre projet
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} {PROFILE.name}. Fait avec ♥ et React.
      </footer>
    </div>
  );
}

