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
  personalWebsite: "https://seydina.dev",
  blog: "https://blog.seydina.dev",
  github: "https://github.com/seydinadiop",
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

const SKILLS_CLOUD = [
  // Langages & Frameworks
  { name: "Python", category: "language", level: 5, color: "#6366f1" },
  { name: "Java", category: "language", level: 4, color: "#6366f1" },
  { name: "JavaScript", category: "language", level: 4, color: "#6366f1" },
  { name: "React", category: "language", level: 4, color: "#6366f1" },
  { name: "Angular", category: "language", level: 3, color: "#6366f1" },
  { name: "Go", category: "language", level: 3, color: "#6366f1" },
  { name: "Rust", category: "language", level: 2, color: "#6366f1" },
  { name: "C++", category: "language", level: 2, color: "#6366f1" },
  
  // API & Intégration
  { name: "REST/JSON", category: "api", level: 5, color: "#8b5cf6" },
  { name: "OpenAPI", category: "api", level: 4, color: "#8b5cf6" },
  { name: "Swagger", category: "api", level: 4, color: "#8b5cf6" },
  { name: "Postman", category: "api", level: 4, color: "#8b5cf6" },
  { name: "JWT/OAuth2", category: "api", level: 4, color: "#8b5cf6" },
  
  // DevOps & Tooling
  { name: "Docker", category: "devops", level: 5, color: "#a855f7" },
  { name: "GitHub Actions", category: "devops", level: 4, color: "#a855f7" },
  { name: "Kubernetes", category: "devops", level: 4, color: "#a855f7" },
  { name: "Terraform", category: "devops", level: 3, color: "#a855f7" },
  { name: "AWS", category: "devops", level: 4, color: "#a855f7" },
  { name: "Ansible", category: "devops", level: 2, color: "#a855f7" },
  
  // Bases de données
  { name: "PostgreSQL", category: "database", level: 4, color: "#ec4899" },
  { name: "SQLite", category: "database", level: 3, color: "#ec4899" },
  { name: "Redis", category: "database", level: 3, color: "#ec4899" },
  
  // Méthodes & Qualité
  { name: "Clean Code", category: "quality", level: 5, color: "#10b981" },
  { name: "TDD", category: "quality", level: 4, color: "#10b981" },
  { name: "Agile/Scrum", category: "quality", level: 4, color: "#10b981" },
  { name: "Pytest", category: "quality", level: 4, color: "#10b981" },
  { name: "JUnit", category: "quality", level: 3, color: "#10b981" }
];

const SKILL_CATEGORIES = {
  language: { label: "Langages & Frameworks", icon: Code2 },
  api: { label: "API & Intégration", icon: Shield },
  devops: { label: "DevOps & Cloud", icon: Hammer },
  database: { label: "Bases de données", icon: Database },
  quality: { label: "Méthodes & Qualité", icon: Workflow }
};

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

// ====== Books Data ======
const BOOKS = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "/icons_livre/clean_code.jpg",
    description: "Les principes fondamentaux pour écrire un code propre et maintenable",
    impact: "Transformé ma vision du développement logiciel",
    tags: ["Clean Code", "Best Practices", "Refactoring"]
  },
  {
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    cover: "/icons_livre/man_month.jpg",
    description: "Les défis de la gestion de projets logiciels complexes",
    impact: "Compréhension des enjeux d'équipe et de planning",
    tags: ["Management", "Software Engineering", "Team Dynamics"]
  },
  {
    title: "Release It!",
    author: "Michael T. Nygard",
    cover: "/icons_livre/release_it.jpg",
    description: "Conception et déploiement d'applications robustes en production",
    impact: "Ma référence pour les systèmes distribués",
    tags: ["DevOps", "Production", "Resilience"]
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    cover: "/icons_livre/u_dont_know_js.jpg",
    description: "Maîtrise approfondie de JavaScript et de ses subtilitiés",
    impact: "Révolution de ma compréhension de JS",
    tags: ["JavaScript", "Deep Learning", "Frontend"]
  },
  {
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    cover: "/icons_livre/working_effectively.jpg",
    description: "Techniques pour refactoriser et améliorer le code existant",
    impact: "Indispensable pour mes missions de maintenance",
    tags: ["Legacy Code", "Refactoring", "Testing"]
  },
  {
    title: "Software Craft (2e édition)",
    author: "Cyrille Martraire & co",
    cover: "/icons_livre/software_craft.webp",
    description: "L'artisanat logiciel et les pratiques d'excellence technique",
    impact: "Guide quotidien pour l'excellence technique",
    tags: ["Craftsmanship", "DDD", "Architecture"]
  }
];

// ====== Code Examples ======
const CODE_EXAMPLES = {
  python: `# API Performance Benchmark
import asyncio
import aiohttp
import time

async def benchmark_endpoint(url, requests=100):
    async with aiohttp.ClientSession() as session:
        start = time.time()
        tasks = [session.get(url) for _ in range(requests)]
        responses = await asyncio.gather(*tasks)
        end = time.time()
        
    return {
        'total_time': end - start,
        'requests_per_second': requests / (end - start),
        'avg_response_time': (end - start) / requests
    }`,
  
  javascript: `// React Hook for API Performance
const useAPIBenchmark = (endpoint) => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const runBenchmark = useCallback(async () => {
    setLoading(true);
    const start = performance.now();
    
    try {
      const promises = Array.from({ length: 50 }, () => 
        fetch(endpoint)
      );
      
      const responses = await Promise.all(promises);
      const end = performance.now();
      
      setMetrics({
        duration: end - start,
        rps: 50 / ((end - start) / 1000),
        success: responses.filter(r => r.ok).length
      });
    } catch (error) {
      console.error('Benchmark failed:', error);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);
  
  return { metrics, loading, runBenchmark };
};`,

  go: `// Concurrent API Gateway Benchmark
package main

import (
    "context"
    "fmt"
    "net/http"
    "sync"
    "time"
)

func benchmarkGateway(url string, concurrent int) {
    var wg sync.WaitGroup
    start := time.Now()
    
    for i := 0; i < concurrent; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            
            client := &http.Client{
                Timeout: 10 * time.Second,
            }
            
            resp, err := client.Get(url)
            if err != nil {
                return
            }
            defer resp.Body.Close()
        }()
    }
    
    wg.Wait()
    duration := time.Since(start)
    
    fmt.Printf("Completed %d requests in %v\n", 
        concurrent, duration)
}`
};

// ====== Terminal Commands ======
const TERMINAL_COMMANDS = [
  { command: "whoami", output: "seydina.laye - Ingénieur Back-end & DevOps" },
  { command: "ls -la skills/", output: "python/\n  docker/\n  kubernetes/\n  fastapi/\n  postgresql/\n  terraform/" },
  { command: "cat experience.txt", output: "4+ ans d'expérience\n5 projets majeurs\n3 stages en entreprise\nFormation continue" },
  { command: "docker ps", output: "CONTAINER ID   IMAGE        STATUS\n2f1a8b9c     fastapi:latest   Up 2 hours\nd4e2f1c8     postgres:15      Up 3 hours\n7b3c9a1e     redis:alpine     Up 2 hours" },
  { command: "kubectl get pods", output: "NAME                    READY   STATUS    AGE\napi-gateway-7d8f9b2     1/1     Running   2h\nbackend-service-4c1a8   2/2     Running   1h\nredis-cluster-9e7b3     1/1     Running   3h" },
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

// ====== Code Playground Component ======
function CodePlayground() {
  const [selectedLang, setSelectedLang] = useState('python');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex gap-2 ml-4">
          {Object.keys(CODE_EXAMPLES).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded text-xs transition-colors ${
                selectedLang === lang 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      {/* Code Content */}
      <div className="relative">
        <pre className="text-gray-300 overflow-x-auto">
          <code>{CODE_EXAMPLES[selectedLang as keyof typeof CODE_EXAMPLES]}</code>
        </pre>
        
        {/* Run Button */}
        <button
          onClick={runCode}
          disabled={isRunning}
          className="absolute top-2 right-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded text-xs transition-colors flex items-center gap-2"
        >
          {isRunning ? (
            <>
              <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
              Running...
            </>
          ) : (
            <>▶ Run</>
          )}
        </button>
      </div>
      
      {/* Output */}
      {isRunning && (
        <div className="mt-4 p-3 bg-black rounded border border-gray-700">
          <div className="text-green-400 text-xs">
            {`> Executing ${selectedLang} benchmark...`}<br/>
            {`> ✓ Performance test completed`}<br/>
            {`> ⚡ 1,247 requests/sec average`}<br/>
            {`> 📊 Latency: 25ms p95`}
          </div>
        </div>
      )}
    </div>
  );
}

// ====== Terminal Simulator ======
function TerminalSimulator() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCommand < TERMINAL_COMMANDS.length) {
        setShowOutput(true);
        setTimeout(() => {
          setCurrentCommand(prev => prev + 1);
          setShowOutput(false);
        }, 3000);
      } else {
        setCurrentCommand(0);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentCommand]);

  const cmd = TERMINAL_COMMANDS[currentCommand];

  return (
    <div className="bg-black rounded-xl p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs ml-2">seydina@portfolio:~$</span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span className="text-white typewriter">{cmd?.command}</span>
          <span className="animate-pulse">_</span>
        </div>
        
        {showOutput && cmd && (
          <div className="text-gray-300 pl-4 whitespace-pre-line animate-fadeIn">
            {cmd.output.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ====== GitHub Heatmap ======
function GitHubHeatmap() {
  const [hoveredDay, setHoveredDay] = useState<{date: string, commits: number} | null>(null);
  
  // Generate mock data for the last year
  const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    const startDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const commits = Math.floor(Math.random() * 8); // 0-7 commits per day
      data.push({
        date: d.toISOString().split('T')[0],
        commits: commits,
        intensity: commits === 0 ? 0 : Math.ceil(commits / 2) // 0-4 intensity levels
      });
    }
    
    return data;
  };
  
  const [heatmapData] = useState(() => generateHeatmapData());
  
  const getIntensityColor = (intensity: number) => {
    const colors = [
      'bg-gray-800', // No activity
      'bg-green-900', // Low
      'bg-green-700', // Medium-low
      'bg-green-500', // Medium-high
      'bg-green-300'  // High
    ];
    return colors[intensity] || colors[0];
  };
  
  const weeks: Array<Array<{date: string, commits: number, intensity: number}>> = [];
  let week: Array<{date: string, commits: number, intensity: number}> = [];
  
  heatmapData.forEach((day, index) => {
    week.push(day);
    if (week.length === 7 || index === heatmapData.length - 1) {
      weeks.push([...week]);
      week = [];
    }
  });
  
  return (
    <div className="relative">
      <div className="mb-4 text-sm text-gray-400">
        <span className="mr-4">🔥 {heatmapData.reduce((sum, day) => sum + day.commits, 0)} contributions cette année</span>
        <span>📈 Streak actuel: 12 jours</span>
      </div>
      
      <div className="flex gap-1 overflow-x-auto pb-4">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                className={`w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 hover:scale-125 ${
                  getIntensityColor(day.intensity)
                }`}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                title={`${day.commits} contributions le ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <span>Moins</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-3 h-3 rounded-sm ${getIntensityColor(level)}`} />
          ))}
        </div>
        <span>Plus</span>
      </div>
      
      {hoveredDay && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black/90 text-white text-sm rounded whitespace-nowrap">
          {hoveredDay.commits} contributions le {new Date(hoveredDay.date).toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      )}
    </div>
  );
}

// ====== 3D Book Carousel ======
function BookCarousel() {
  const [currentBook, setCurrentBook] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const rotateCarousel = (direction: 'next' | 'prev' | number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    if (typeof direction === 'number') {
      setCurrentBook(direction);
    } else {
      setCurrentBook(prev => 
        direction === 'next' 
          ? (prev + 1) % BOOKS.length 
          : (prev - 1 + BOOKS.length) % BOOKS.length
      );
    }
    
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    if (Math.abs(diff) > 50) {
      rotateCarousel(diff > 0 ? 'prev' : 'next');
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isTransitioning) {
        rotateCarousel('next');
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging, isTransitioning]);

  const getBookPosition = (index: number) => {
    const diff = index - currentBook;
    const totalBooks = BOOKS.length;
    let normalizedDiff = diff;
    
    if (Math.abs(diff) > totalBooks / 2) {
      normalizedDiff = diff > 0 ? diff - totalBooks : diff + totalBooks;
    }
    
    const angle = (normalizedDiff * 360) / totalBooks;
    const radius = 280;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const scale = z > 0 ? 0.8 + (z / radius) * 0.4 : 0.6;
    const opacity = z > -radius * 0.5 ? 1 : 0;
    
    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-angle}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(z + radius)
    };
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none"></div>
      
      {/* 3D Container */}
      <div 
        className="relative h-full cursor-grab active:cursor-grabbing"
        style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {BOOKS.map((book, index) => {
            const position = getBookPosition(index);
            const isActive = index === currentBook;
            
            return (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                  isActive ? 'cursor-default' : 'cursor-pointer hover:scale-110'
                }`}
                style={position}
                onClick={() => !isActive && rotateCarousel(index)}
              >
                <div className={`relative group ${
                  isActive ? 'scale-110' : 'scale-100'
                } transition-transform duration-300`}>
                  {/* Book Cover */}
                  <div className="relative w-48 h-64 mx-auto">
                    {/* Glow effect for active book */}
                    {isActive && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur-xl animate-pulse"></div>
                    )}
                    
                    {/* Book spine effect */}
                    <div className="absolute -left-2 top-0 w-2 h-full bg-gradient-to-b from-gray-600 to-gray-800 rounded-l transform skew-y-1 shadow-lg"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-2xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden flex-col items-center justify-center text-center p-4 h-full">
                        <div className="text-4xl mb-3">📚</div>
                        <div className="font-bold text-sm mb-1">{book.title}</div>
                        <div className="text-xs text-gray-400">{book.author}</div>
                      </div>
                      
                      {/* Reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Book Info - Only show for active book */}
                  {isActive && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-80 animate-fadeIn">
                      <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-2xl">
                        <h3 className="text-lg font-bold mb-1 text-center">{book.title}</h3>
                        <p className="text-indigo-400 text-center mb-3">{book.author}</p>
                        <p className="text-gray-300 text-sm text-center line-clamp-2">{book.description}</p>
                        <div className="flex justify-center flex-wrap gap-1 mt-3">
                          {book.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button 
          onClick={() => rotateCarousel('prev')}
          disabled={isTransitioning}
          className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-1">
          {BOOKS.map((_, index) => (
            <button
              key={index}
              onClick={() => rotateCarousel(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBook 
                  ? 'bg-indigo-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => rotateCarousel('next')}
          disabled={isTransitioning}
          className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 text-xs text-gray-400 text-right">
        <div>Cliquez ou glissez pour naviguer</div>
        <div>Rotation automatique toutes les 5s</div>
      </div>
    </div>
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
    { id: 'playground', label: 'Code Live' },
    { id: 'books', label: 'Lectures' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of [...sections].reverse()) {
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
  const [showContent, setShowContent] = useState(false);
  
  const handleDiscoverClick = () => {
    setShowContent(true);
    // Petite pause pour l'animation, puis scroll
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };
  
  return (
    <div className="min-h-screen text-white relative" style={{ background: 'var(--bg-primary)' }}>
      <CustomCursor />
      <ParticleBackground />
      {showContent && <SectionIndicator />}
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 0, 110, 0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 h-60 w-60 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(58, 123, 213, 0.1) 0%, transparent 70%)' }} />
      </div>

      {/* Logo Header - Always visible */}
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

      {/* Top Navigation - Hidden initially */}
      <nav className={`fixed top-6 right-6 z-50 transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
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
            
            <a href="#books" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <svg className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Lectures
              </span>
            </a>
            
            <a href="#education" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <GraduationCap className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Formation
              </span>
            </a>
            
            <a href="#playground" className="group relative block p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10">
              <svg className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m3-6v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2z" />
              </svg>
              <span className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Code Live
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

          {/* Always Visible Discover Button */}
          <div className="relative">
            <button onClick={handleDiscoverClick} className="group inline-flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="w-px h-16 mx-auto" style={{ background: 'linear-gradient(to bottom, transparent, #6366f1, transparent)' }}></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full border-2 border-indigo-400 flex items-center justify-center animate-pulse group-hover:animate-bounce group-hover:scale-110 transition-transform" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                    <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <span className="text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity tracking-wide text-white group-hover:text-indigo-300">
                Découvrir mes projets
              </span>
            </button>
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

      {/* All content sections - Hidden initially */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        
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

          {/* Skills Cloud */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => (
                    <div key={key} className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <cat.icon className="h-4 w-4" style={{ color: SKILLS_CLOUD.find(s => s.category === key)?.color }} />
                      <span className="text-sm font-medium">{cat.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Skills Cloud */}
                <div className="flex flex-wrap justify-center gap-3 leading-relaxed">
                  {SKILLS_CLOUD.map((skill, index) => {
                    const fontSize = `${0.8 + (skill.level * 0.25)}rem`;
                    const padding = skill.level >= 4 ? 'px-4 py-3' : skill.level >= 3 ? 'px-3 py-2' : 'px-2 py-1';
                    
                    return (
                      <div
                        key={index}
                        className={`group relative inline-block ${padding} rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:z-10 cursor-default`}
                        style={{
                          fontSize,
                          background: `${skill.color}20`,
                          color: skill.color,
                          border: `1px solid ${skill.color}40`,
                          transform: `rotate(${(Math.random() - 0.5) * 4}deg)`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'rotate(0deg) scale(1.1)';
                          e.currentTarget.style.zIndex = '10';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = `rotate(${(Math.random() - 0.5) * 4}deg) scale(1)`;
                          e.currentTarget.style.zIndex = 'auto';
                        }}
                      >
                        {skill.name}
                        
                        {/* Skill level indicator */}
                        <div className="absolute -top-1 -right-1">
                          <div className="flex gap-px">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full transition-all duration-200"
                                style={{
                                  background: i < skill.level ? skill.color : 'rgba(255,255,255,0.2)'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          {SKILL_CATEGORIES[skill.category as keyof typeof SKILL_CATEGORIES].label} • Niveau {skill.level}/5
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Skills Summary */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => {
                      const skillsInCategory = SKILLS_CLOUD.filter(s => s.category === key);
                      const avgLevel = skillsInCategory.reduce((sum, s) => sum + s.level, 0) / skillsInCategory.length;
                      
                      return (
                        <div key={key} className="space-y-2">
                          <cat.icon className="h-6 w-6 mx-auto" style={{ color: skillsInCategory[0]?.color }} />
                          <div className="text-xs font-medium opacity-70">{skillsInCategory.length} compétences</div>
                          <div className="flex justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-2 h-2 rounded-full"
                                style={{
                                  background: i < Math.round(avgLevel) ? skillsInCategory[0]?.color : 'rgba(255,255,255,0.1)'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
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

      {/* Code Playground Section */}
      <section id="playground" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <Code2 className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500">LIVE CODE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Code en action</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Exemples de code que j'écris au quotidien</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Performance Benchmarking</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Voici quelques exemples de code que j'utilise pour benchmarker les performances d'APIs, 
                optimiser les temps de réponse et analyser la scalabilité des systèmes.
              </p>
              <CodePlayground />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Terminal Skills</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Simulation interactive de mes compétences techniques à travers des commandes que j'utilise 
                quotidiennement pour Docker, Kubernetes et le développement.
              </p>
              <TerminalSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <Star className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500">ACTIVITÉ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contribution GitHub</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Mon engagement quotidien dans le code</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Activité des 12 derniers mois</h3>
                    <p className="text-gray-400">Contributions quotidiennes sur GitHub et projets personnels</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-500 mb-1">847</div>
                    <div className="text-sm text-gray-400">contributions</div>
                  </div>
                </div>
                
                <GitHubHeatmap />
                
                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400 mb-1">23</div>
                    <div className="text-sm text-gray-400">Repos publics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">156</div>
                    <div className="text-sm text-gray-400">Pull Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400 mb-1">89</div>
                    <div className="text-sm text-gray-400">Issues résolues</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Lectures & Inspirations Section */}
      <section id="books" className="scroll-mt-24 py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              <svg className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium text-purple-500">BIBLIOTHÈQUE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Lectures & Inspirations</h2>
            <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Les livres qui ont forgé ma vision du développement</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BookCarousel />
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
            <div className="space-y-6">
              <Card>
                <div className="p-3 space-y-4">
                  <a className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-[1.02]" href={`mailto:${PROFILE.email}`} style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(0, 210, 255, 0.1)' }}>
                      <Mail className="h-5 w-5" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Email</div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{PROFILE.email}</div>
                    </div>
                  </a>

                  <a className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-[1.02]" href={`tel:${PROFILE.phone.replaceAll(' ', '')}`} style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(58, 123, 213, 0.1)' }}>
                      <Phone className="h-5 w-5" style={{ color: 'var(--accent-secondary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Téléphone</div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{PROFILE.phone}</div>
                    </div>
                  </a>
                </div>
              </Card>
              
              <Card>
                <div className="p-3 space-y-3">
                  <h4 className="font-semibold text-sm mb-3">Liens utiles</h4>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <a className="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105" href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(255, 0, 110, 0.1)' }}>
                        <Linkedin className="h-4 w-4" style={{ color: 'var(--accent-tertiary)' }} />
                      </div>
                      <span className="text-xs font-medium">LinkedIn</span>
                    </a>
                    
                    <a className="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105" href={PROFILE.personalWebsite} target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                        <ExternalLink className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} />
                      </div>
                      <span className="text-xs font-medium">Site</span>
                    </a>
                    
                    <a className="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105" href={PROFILE.blog} target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
                        <svg className="h-4 w-4" style={{ color: 'var(--accent-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Blog</span>
                    </a>
                    
                    <a className="group flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:scale-105" href={PROFILE.github} target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                      <div className="p-2 rounded-lg" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                        <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">GitHub</span>
                    </a>
                  </div>
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
      
      </div> {/* End of hidden content wrapper */}

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} {PROFILE.name}. Fait avec ♥ et React.
      </footer>
    </div>
  );
}

