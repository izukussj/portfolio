import { Mail, Phone, Linkedin, Download, ExternalLink, Briefcase, GraduationCap, Calendar, Star, Code2, Hammer, Database, Shield, Workflow } from "lucide-react";
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
function Section({ id, title, subtitle, children }: any) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

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
      <ParticleBackground />
      <SectionIndicator />
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 h-60 w-60 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(58, 123, 213, 0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 backdrop-blur-xl border-b" style={{ 
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))',
          borderColor: 'var(--border-primary)'
        }}>
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(to right, rgba(0, 210, 255, 0.03), rgba(255, 0, 110, 0.03))'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo with animated glow */}
          <a href="#home" className="group relative">
            <div className="absolute -inset-2 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" style={{
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-tertiary))'
            }}></div>
            <div className="relative font-bold text-xl tracking-tight px-4 py-2 rounded-lg border backdrop-blur-sm" style={{
              color: 'var(--text-primary)',
              background: 'rgba(0, 0, 0, 0.2)',
              borderColor: 'var(--border-primary)'
            }}>
              Seydina<span className="text-transparent bg-clip-text font-mono" style={{
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-tertiary))'
              }}>.dev</span>
            </div>
          </a>

          {/* Navigation with floating pills */}
          <nav className="hidden lg:flex items-center gap-2">
            <div className="backdrop-blur-sm rounded-full p-1 border" style={{
              background: 'var(--surface-glass)',
              borderColor: 'var(--border-primary)'
            }}>
              <a href="#projects" className="nav-item">Projets</a>
              <a href="#experience" className="nav-item">Expérience</a>
              <a href="#skills" className="nav-item">Compétences</a>
              <a href="#education" className="nav-item">Formation</a>
              <a href="#contact" className="nav-item">Contact</a>
            </div>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Menu mobile */}
            <button className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-white/80 rounded"></div>
                <div className="w-full h-0.5 bg-white/80 rounded"></div>
                <div className="w-full h-0.5 bg-white/80 rounded"></div>
              </div>
            </button>
            
            {PROFILE.cvUrl ? (
              <a href={PROFILE.cvUrl} className="group relative overflow-hidden rounded-full px-5 py-2.5 text-white font-medium text-sm hover:shadow-lg transition-all duration-300" style={{
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                boxShadow: '0 0 0 0 rgba(0, 210, 255, 0)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 210, 255, 0.25)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0, 210, 255, 0)';
              }} download>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(to right, var(--accent-secondary), var(--accent-primary))'
                }}></div>
                <div className="relative flex items-center gap-2">
                  <Download className="h-4 w-4" /> CV
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest font-medium" style={{ color: 'var(--accent-primary)' }}>Disponible pour CDI – Consultant Dev / Back-end</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>{PROFILE.name}</span>
              <span className="block text-2xl md:text-3xl mt-2 font-semibold font-mono" style={{ 
                color: 'var(--accent-primary)'
              }}>{PROFILE.title}</span>
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{PROFILE.about}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg" style={{
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                color: 'white',
                boxShadow: '0 0 0 0 rgba(0, 210, 255, 0)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 210, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(0, 210, 255, 0)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>Voir mes projets</a>
              <a href="#contact" className="rounded-full px-6 py-3 font-semibold transition-all duration-300 border" style={{
                borderColor: 'var(--border-primary)',
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.05)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--border-primary)';
              }}>Me contacter</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a className="inline-flex items-center gap-2 transition-colors duration-200" href={`mailto:${PROFILE.email}`} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}><Mail className="h-4 w-4" />{PROFILE.email}</a>
              <a className="inline-flex items-center gap-2 transition-colors duration-200" href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}><Phone className="h-4 w-4" />{PROFILE.phone}</a>
              <a className="inline-flex items-center gap-2 transition-colors duration-200" target="_blank" rel="noreferrer" href={PROFILE.linkedin} style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}><Linkedin className="h-4 w-4" />LinkedIn</a>
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <AnimatedCounter end={5} suffix="+" />
                  <p className="text-white/70 text-sm">Projets réalisés</p>
                </div>
                <div>
                  <AnimatedCounter end={4} suffix=" ans" />
                  <p className="text-white/70 text-sm">D'expérience</p>
                </div>
                <div>
                  <AnimatedCounter end={10} suffix="+" />
                  <p className="text-white/70 text-sm">Technologies</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.slice(0,4).map((s, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-2 mb-2 text-white/90"><s.icon className="h-4 w-4" /><span className="font-semibold">{s.title}</span></div>
                    <ul className="space-y-1 text-sm text-white/70">
                      {s.items.slice(0,3).map((it, j) => (<li key={j}>• {it}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projets" subtitle="Sélection récente centrée performance, DX et fiabilité">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, idx) => (
            <Card key={idx}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.subtitle}</p>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 text-sm">
                    Voir <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-3 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Expérience" subtitle="Stages, projets et enseignement">
        <div className="space-y-4">
          {EXPERIENCES.map((e, i) => (
            <Card key={i}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-white/80 text-sm"><Briefcase className="h-4 w-4" /><span>{e.company}</span></div>
                  <h3 className="text-lg font-semibold mt-1">{e.role}</h3>
                </div>
                <div className="text-sm text-white/60 flex items-center gap-2"><Calendar className="h-4 w-4" />{e.period}</div>
              </div>
              <ul className="mt-3 space-y-2 text-white/80 list-disc pl-5">
                {e.bullets.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">{e.tags.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Compétences" subtitle="Stack principale & pratiques d'ingénierie">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <Card key={i}>
              <div className="flex items-center gap-2 text-white/90"><s.icon className="h-5 w-5" /><h3 className="font-semibold">{s.title}</h3></div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((it: string) => (<Chip key={it}>{it}</Chip>))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Formation" subtitle="Parcours académique">
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((ed, i) => (
            <Card key={i}>
              <div className="flex items-center gap-2 text-white/80 text-sm"><GraduationCap className="h-4 w-4" />{ed.school}</div>
              <h3 className="text-lg font-semibold mt-1">{ed.degree}</h3>
              <div className="text-sm text-white/60 mt-1">{ed.period}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Community & Languages */}
      <Section id="community" title="Communautés & Engagements" subtitle="Apprentissage continu & partage">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold">Communautés</h3>
            <ul className="mt-3 space-y-2 text-white/80 list-disc pl-5">
              {COMMUNITY.map((c, i) => (<li key={i}>{c.title}</li>))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Langues</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              {LANGUAGES.map((l, i) => (<li key={i} className="flex items-center justify-between"><span>{l.name}</span><span className="text-white/60 text-sm">{l.level}</span></li>))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Parlons de votre prochain défi">
        <Card>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="space-y-3">
              <a className="flex items-center gap-3 text-white/90 hover:text-white" href={`mailto:${PROFILE.email}`}><Mail className="h-5 w-5" />{PROFILE.email}</a>
              <a className="flex items-center gap-3 text-white/90 hover:text-white" href={`tel:${PROFILE.phone.replaceAll(' ', '')}`}><Phone className="h-5 w-5" />{PROFILE.phone}</a>
              <a className="flex items-center gap-3 text-white/90 hover:text-white" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" />LinkedIn</a>
            </div>
            <div className="md:col-span-2 text-white/80">
              Dispo pour des postes **CDI** en développement back‑end, API Platform, et missions orientées performance & observabilité.
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} {PROFILE.name}. Fait avec ♥ et React.
      </footer>
    </div>
  );
}

