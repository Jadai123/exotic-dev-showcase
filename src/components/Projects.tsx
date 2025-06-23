
import { ExternalLink, Github, Code, Shield, Globe, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RevShield",
      description: "Anti-scam dApp validator for crypto users. A checkpoint between users and potential Web3 traps with auto wallet validation.",
      tech: ["React", "FastAPI", "Webhooks", "Tailwind"],
      icon: Shield,
      github: "Available on request",
      live: "Coming soon - revshield.site",
      status: "Development",
      year: "2025"
    },
    {
      title: "Nairaland Edition 2.0",
      description: "Modern, responsive redesign of Nigeria's most iconic forum with dark mode, sidebar nav, and mobile-first UI.",
      tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
      icon: Users,
      github: "Available on request",
      live: "Not yet public",
      status: "Beta",
      year: "2024"
    },
    {
      title: "Admin Dashboard Pro",
      description: "Fully responsive admin panel with auth, route protection, and CRUD operations. Complete user management system.",
      tech: ["React", "Tailwind", "Shadcn UI", "Node.js"],
      icon: Code,
      github: "github.com/hudson/dashboard-pro",
      live: "adminpanel.vercel.app",
      status: "Beta",
      year: "2024"
    },
    {
      title: "RevGhost Affiliate Hub",
      description: "Faceless brand for building high-converting landing pages and affiliate marketing automation in motivation niche.",
      tech: ["Systeme.io", "Linktree", "Instagram Automation"],
      icon: Globe,
      github: "Private Business Model",
      live: "https://linktr.ee/freedomhubdaily",
      status: "Production",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">my</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-400">projects</span>
            <span className="text-gray-400">()</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400 font-mono">
            // Real platforms that solve actual problems 💥
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 border border-gray-700 hover:border-green-400/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <project.icon className="w-8 h-8 text-green-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-mono text-gray-500">{project.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-mono rounded-full ${
                      project.status === "Production" ? "bg-green-400/20 text-green-400" :
                      project.status === "Beta" ? "bg-yellow-400/20 text-yellow-400" :
                      "bg-blue-400/20 text-blue-400"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-mono mb-3 text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-mono border border-gray-700 group-hover:border-cyan-400/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Github className="w-4 h-4" />
                    <span className="font-mono">{project.github}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Globe className="w-4 h-4" />
                    <span className="font-mono">{project.live}</span>
                  </div>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent group-hover:via-green-400 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-mono font-bold rounded-lg">
            <span>More projects coming soon...</span>
            <Code className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
