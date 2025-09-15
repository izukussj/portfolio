import { Mail, Phone, Download, ExternalLink, Briefcase, GraduationCap, Calendar, Star, Code2, Hammer, Database, Shield, Workflow, Terminal, CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ====== Portfolio dernier cri – Single-file React (Tailwind) ======
// - 100% statique, prêt pour GitHub Pages/Netlify/Vercel
// - Modifie les constantes ci-dessous pour personnaliser

const PROFILE = {
  name: "Seydina Laye",
  title: "Ingé DevOps débutant – API Evangelist & AI Enthusiast",
  location: "France",
  email: "seydina.laye85@gmail.com",
  phone: "+33 6 12 37 95 13",
  linkedin: "https://www.linkedin.com/in/alassanelayediop/",
  // Met le chemin de ton PDF si tu veux activer le bouton CV
  cvUrl: "/cv.pdf",
  personalWebsite: "https://alphaisidore.neocities.org",
  blog: "https://rane.gitbook.io/le-glossaire-des-apis/",
  github: "https://github.com/izukussj",
  about:
    "Ingénieur curieux et pragmatique, j'aime comprendre, optimiser et résoudre des défis complexes. Je valorise l'excellence, la collaboration et l'impact métier.",
};

const EXPERIENCES = [
  {
    company: "OCTO Technology",
    role: "Stagiaire Ingénieur Back-end & DevOps (Fin d'études)",
    period: "févr. 2025 → août 2025",
    bullets: [
      "Conception et pilotage d'un benchmark de solutions d'API Management (Kong, Apigee, Axway…), en évaluant performance, coût, gouvernance, UX et architecture Kubernetes.",
      "Développement d'un outil CLI Python orchestrant Apache Bench & wrk pour mesurer latence et scalabilité de 4 API Gateways conteneurisées.",
      "Création d'un dashboard comparatif (FastAPI + FAISS, approche RAG) avec filtres multi-axes et recherche naturelle.",
      "Publication et vulgarisation des résultats sur api-by-octo (site vitrine du benchmark)."
    ],
    tags: ["Python", "Kubernetes", "API Management", "Benchmark", "FastAPI", "FAISS", "RAG", "Docker", "ab", "wrk"],
  },
  {
    company: "Cabinet Vision France (CVF)",
    role: "Stagiaire Développeur JavaScript",
    period: "avr. 2024 → juil. 2024",
    bullets: [
      "Développement d'un portail de gestion des commandes (Angular + Symfony) pour automatiser et fiabiliser le calcul en temps réel des plans de découpe (API SmartCut).",
      "Modernisation et refonte d'automatisations métiers : conversion vers JavaScript, refactoring de macros propriétaires.",
      "Mise en place d'un workflow d'équipe (Git, VS Code) et rédaction de bonnes pratiques partagées.",
    ],
    tags: ["Angular", "Symfony", "JavaScript", "API", "Git", "Workflow"],
  },
  {
    company: "Chapiock",
    role: "Stagiaire Data Scientist & Développeur Web",
    period: "avr. 2023 → juil. 2023",
    bullets: [
      "Conception d'un moteur de recommandation personnalisé basé sur du machine learning (TensorFlow) et l'analyse de données comportementales.",
      "Optimisation de l'UX d'une plateforme e‑commerce grâce à la visualisation de données utilisateurs.",
    ],
    tags: ["TensorFlow", "Python", "Angular", "Symfony", "Data Science", "UX"],
  },
  {
    company: "Vinci Energies",
    role: "Stagiaire Développeur Mobile",
    period: "mai 2019 → juil. 2019",
    bullets: [
      "Développement d'une application Android de gestion de stocks avec back-end Java.",
      "Design d'une interface utilisateur intuitive et ergonomique.",
    ],
    tags: ["Java", "Android Studio", "Mobile", "UI"],
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
    title: "Larryman",
    subtitle: "Extension Chrome + Chatbot intelligent",
    description:
      "Extension Chrome qui permet, via le clic droit, d'interagir avec un chatbot alimenté par OpenAI : définitions, traduction, chat contextuel. Backend dédié avec API REST, sécurisation (rate‑limiting, validation), tests, architecture modulaire.",
    tags: ["JavaScript", "Node.js", "OpenAI", "Chatbot", "Extension Chrome", "Sécurité", "Tests"],
    link: "https://github.com/izukussj/larryman",
  },
  {
    title: "AgentForgeKong",
    subtitle: "CLI/API infra pour Kong – prompt à config/plugin",
    description:
      "Outil CLI en Python convertissant un prompt en configuration Kong (via decK) ou plugin Lua. Mode heuristique ou LLM, génération de templates, interaction utilisateur pour feedback, sécurité et fallback inclus.",
    tags: ["Python", "Kong", "Plugin Lua", "CLI", "Configuration Infra", "LLM", "Templates"],
    link: "https://github.com/izukussj/AgentForgeKong",
  },
  {
    title: "Nexter",
    subtitle: "Plateforme de quiz multijoueur en temps réel",
    description:
      "Plateforme web de quiz multijoueur avec modes Quickplay Fun/Compétitif, système ELO, scoring avec bonus de rapidité. Jeu en temps réel via Socket.IO, authentification NextAuth, dashboard utilisateur avec statistiques. Stack : Next.js 15 + TypeScript + PostgreSQL + Prisma.",
    tags: ["Next.js", "TypeScript", "Socket.IO", "PostgreSQL", "Prisma", "NextAuth", "Multijoueur", "Temps réel"],
    link: "https://github.com/izukussj/nexter",
  },
];

const SKILLS_CLOUD = [
  // Langages & Frameworks
  { name: "Python", category: "language", color: "#6366f1" },
  { name: "Java", category: "language", color: "#6366f1" },
  { name: "JavaScript (React/Angular)", category: "language", color: "#6366f1" },
  { name: "Go", category: "language", color: "#6366f1" },
  { name: "Rust", category: "language", color: "#6366f1" },
  { name: "C++", category: "language", color: "#6366f1" },
  
  // API & Intégration
  { name: "REST/JSON", category: "api", color: "#8b5cf6" },
  { name: "OpenAPI/Swagger", category: "api", color: "#8b5cf6" },
  { name: "Postman", category: "api", color: "#8b5cf6" },
  { name: "JWT/OAuth2", category: "api", color: "#8b5cf6" },
  
  // DevOps & Tooling
  { name: "Docker", category: "devops", color: "#a855f7" },
  { name: "GitHub Actions", category: "devops", color: "#a855f7" },
  { name: "Terraform", category: "devops", color: "#a855f7" },
  { name: "Ansible (bases)", category: "devops", color: "#a855f7" },
  { name: "Kubernetes", category: "devops", color: "#a855f7" },
  { name: "AWS", category: "devops", color: "#a855f7" },
  
  // Bases de données
  { name: "PostgreSQL", category: "database", color: "#ec4899" },
  { name: "SQLite", category: "database", color: "#ec4899" },
  
  // Méthodes & Qualité
  { name: "Agile (Scrum)", category: "quality", color: "#10b981" },
  { name: "Clean Code", category: "quality", color: "#10b981" },
  { name: "TDD", category: "quality", color: "#10b981" },
  { name: "Pytest", category: "quality", color: "#10b981" },
  { name: "Espresso/JUnit", category: "quality", color: "#10b981" }
];

const SKILL_CATEGORIES = {
  language: { label: "Langages & Frameworks", icon: Code2 },
  api: { label: "API & Intégration", icon: Shield },
  devops: { label: "DevOps & Tooling", icon: Hammer },
  database: { label: "Bases de données", icon: Database },
  quality: { label: "Méthodes & Qualité", icon: Workflow }
};

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
  { command: "cat experience.txt", output: "Ingénieur débutant\n+10 projets réalisés\n3 stages en entreprise\nFormation continue" },
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

// ====== GitHub Heatmap - Commented for now ======
/* function GitHubHeatmap() {
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
*/

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
    <div className="relative h-[500px] overflow-hidden">
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
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls - Outside carousel area */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button 
          onClick={() => rotateCarousel('prev')}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-black/60 border border-white/30 hover:bg-black/80 transition-all disabled:opacity-50 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-2">
          {BOOKS.map((_, index) => (
            <button
              key={index}
              onClick={() => rotateCarousel(index)}
              className={`w-3 h-3 rounded-full transition-all border ${
                index === currentBook 
                  ? 'bg-indigo-500 border-indigo-400 scale-125' 
                  : 'bg-black/60 border-white/30 hover:bg-white/20 backdrop-blur-sm'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => rotateCarousel('next')}
          disabled={isTransitioning}
          className="p-3 rounded-full bg-black/60 border border-white/30 hover:bg-black/80 transition-all disabled:opacity-50 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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

  // Detect scroll to reveal content automatically
  useEffect(() => {
    const handleScroll = () => {
      if (!showContent && window.scrollY > 100) {
        setShowContent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);
  
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
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 z-50 transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
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
              <Star className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
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
              <Terminal className="h-6 w-6 text-white/60 group-hover:text-white transition-colors" />
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
      <section id="home" className="relative overflow-hidden h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-4 sm:mb-6 relative">
            <div className="relative mx-auto w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
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
          <div className="space-y-4 mb-4 sm:mb-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              <span className="text-white font-extralight">{PROFILE.name.split(' ')[0]} </span>
              <span className="font-medium" style={{ color: '#6366f1' }}>{PROFILE.name.split(' ')[1]}</span>
            </h1>
            <div className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: '#94a3b8', minHeight: '2rem' }}>
              <TypewriterEffect texts={[
                'Ingénieur informatique',
                'Développeur Back-end',
                'Ingénieur DevOps',
                'API Evangelist',
                'AI Enthusiast'
              ]} speed={80} />
            </div>
          </div>

          {/* Brief description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light" style={{ color: '#64748b' }}>
            {PROFILE.about}
          </p>

          {/* Quick Links - Social & Professional */}
          <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
            >
              <svg className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                GitHub
              </span>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
            >
              <svg className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                LinkedIn
              </span>
            </a>

            {PROFILE.cvUrl && (
              <a
                href={PROFILE.cvUrl}
                download="CV-Seydina-Laye.pdf"
                className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}
              >
                <svg className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  CV
                </span>
              </a>
            )}

            <a
              href={`mailto:${PROFILE.email}`}
              className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
            >
              <svg className="h-5 w-5 text-red-400 group-hover:text-red-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Email
              </span>
            </a>
          </div>

          {/* Scroll Indicator - Minimal and elegant */}
          {!showContent && (
            <div className="relative mb-4 group cursor-pointer animate-pulse hover:animate-none" onClick={handleDiscoverClick}>
              <div className="flex flex-col items-center gap-2">
                {/* Text invitation */}
                <p className="text-xs font-light tracking-wide opacity-60 group-hover:opacity-80 transition-opacity duration-300" style={{ color: '#94a3b8' }}>
                  Voir plus
                </p>
                
                {/* Mouse scroll indicator */}
                <div className="relative w-6 h-10 border-2 border-white/30 group-hover:border-white/60 rounded-full transition-colors duration-300">
                  {/* Scroll wheel */}
                  <div className="absolute top-2 left-1/2 w-1 h-2 bg-white/50 group-hover:bg-white/80 rounded-full transform -translate-x-1/2 transition-colors duration-300" 
                       style={{
                         animation: 'scroll-wheel 2s ease-in-out infinite'
                       }}></div>
                </div>
                
                {/* Double chevron down */}
                <div className="flex flex-col gap-1">
                  <div className="w-3 h-3 border-r-2 border-b-2 border-white/40 group-hover:border-white/70 transform rotate-45 transition-all duration-300"></div>
                  <div className="w-3 h-3 border-r-2 border-b-2 border-white/40 group-hover:border-white/70 transform rotate-45 transition-all duration-300 -mt-1"></div>
                </div>
              </div>
            </div>
          )}
          
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes scroll-wheel {
                0% { transform: translateX(-50%) translateY(0); opacity: 1; }
                50% { transform: translateX(-50%) translateY(8px); opacity: 0.3; }
                100% { transform: translateX(-50%) translateY(0); opacity: 1; }
              }
            `
          }} />
        </div>

        {/* Minimalist floating elements */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          <div className="absolute top-1/3 right-32 animate-float-slow opacity-40">
            <div className="text-right">
              <div className="text-3xl font-light text-white mb-1">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-sm font-light" style={{ color: '#94a3b8' }}>Projets</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* All content sections - Hidden initially */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
        
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

          {/* All Projects - Unified Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, idx) => (
              <Card key={idx} className="group hover:scale-[1.02] transition-all duration-300 hover:bg-white/[0.02] cursor-pointer h-full">
                <div className="h-full flex flex-col space-y-4">
                  {/* Header with title and link */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300">{p.title}</h3>
                      <p className="text-sm font-medium opacity-80" style={{ color: 'var(--accent-primary)' }}>{p.subtitle}</p>
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 shrink-0" style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'rgb(99, 102, 241)',
                        border: '1px solid rgba(99, 102, 241, 0.3)'
                      }}>
                        Voir <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs font-medium rounded-full transition-all hover:scale-105" style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'rgb(99, 102, 241)',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
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

          {/* Skills Grid - Grouped */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => {
              const skillsInCategory = SKILLS_CLOUD.filter(s => s.category === key);
              const color = skillsInCategory[0]?.color;
              
              return (
                <div key={key} className="group">
                  <div className="relative">
                    <div 
                      className="absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${color}, ${color}80)`
                      }}
                    ></div>
                    <Card>
                      <div className="relative z-10 space-y-6">
                        {/* Category Header */}
                        <div className="flex items-center gap-4">
                          <div 
                            className="p-3 rounded-2xl"
                            style={{
                              background: `${color}20`,
                              border: `1px solid ${color}40`
                            }}
                          >
                            <cat.icon className="h-8 w-8" style={{ color }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{cat.label}</h3>
                            <div 
                              className="w-12 h-1 rounded-full mt-2"
                              style={{
                                background: `linear-gradient(to right, ${color}, ${color}80)`
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-3">
                          {skillsInCategory.map((skill) => (
                            <div 
                              key={skill.name} 
                              className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] hover:bg-white/10" 
                              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                            >
                              <div 
                                className="w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ background: color }}
                              ></div>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
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
              <Terminal className="h-5 w-5 text-green-500" />
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

      {/* GitHub Activity Section - Commented for now */}
      {/*
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
      */}

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
                  <a className="group flex items-center gap-3 p-3 rounded-lg transition-all hover:scale-[1.02]" href="https://calendly.com/seydina-laye85/30min" target="_blank" rel="noreferrer" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                    <div className="p-2 rounded-lg" style={{ background: 'rgba(0, 210, 255, 0.1)' }}>
                      <CalendarDays className="h-5 w-5" style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Planifier un entretien</div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Calendly - 30min</div>
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
                        <svg className="h-4 w-4" style={{ color: 'var(--accent-tertiary)' }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
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
                  
                  {/* Download CV Button */}
                  {PROFILE.cvUrl && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <a className="group flex items-center justify-center gap-3 p-4 rounded-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20" href={PROFILE.cvUrl} download="CV-Seydina-Laye.pdf">
                        <div className="p-2 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                          <Download className="h-5 w-5 text-blue-400" />
                        </div>
                        <span className="font-medium text-blue-400">Télécharger mon CV</span>
                      </a>
                    </div>
                  )}
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
                    <a href="https://calendly.com/seydina-laye85/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg" style={{
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                      color: 'white'
                    }}>
                      <CalendarDays className="h-5 w-5" />
                      Planifier un entretien
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

