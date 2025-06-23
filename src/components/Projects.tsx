
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: Globe,
      github: "#",
      live: "#",
      status: "Production"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task manager with WebSocket integration",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      icon: Code,
      github: "#",
      live: "#",
      status: "Beta"
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform weather app built with React Native",
      tech: ["React Native", "TypeScript", "API Integration"],
      icon: Smartphone,
      github: "#",
      live: "#",
      status: "Development"
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
            // Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-900/30 border border-gray-700 hover:border-green-400/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-400/10 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="w-8 h-8 text-green-400 group-hover:text-cyan-400 transition-colors" />
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

                <p className="text-gray-400 mb-4 leading-relaxed">
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

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors group/link"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-mono text-sm">Code</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="font-mono text-sm">Live</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-green-400/50 to-transparent group-hover:via-green-400 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
