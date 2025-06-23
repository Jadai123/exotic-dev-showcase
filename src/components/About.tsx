
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Globe, techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", icon: Database, techs: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "DevOps", icon: Zap, techs: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
    { name: "Tools", icon: Code, techs: ["Git", "VS Code", "Linux", "Figma"] }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">about</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-400">me</span>
            <span className="text-gray-400">()</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-900/50 border border-green-400/20 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 font-mono text-sm">~/about-me.md</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div><span className="text-cyan-400">#</span> <span className="text-white">Hello World! 👋</span></div>
                <div className="text-gray-300 leading-relaxed">
                  I'm a passionate developer who loves turning complex problems into simple, 
                  beautiful solutions. With expertise in modern web technologies, I create 
                  scalable applications that make a difference.
                </div>
                <div className="mt-4">
                  <span className="text-green-400">const</span> <span className="text-white">passion</span> 
                  <span className="text-gray-400"> = </span>
                  <span className="text-yellow-400">["coding", "learning", "innovation"]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-mono mb-8 text-cyan-400">
                {'<Skills />'}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-gray-900/30 border border-gray-700 hover:border-green-400/50 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <skill.icon className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors" />
                    <h4 className="font-mono font-bold text-white group-hover:text-green-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="space-y-1">
                    {skill.techs.map((tech) => (
                      <div key={tech} className="text-sm text-gray-400 font-mono">
                        <span className="text-green-400">></span> {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
