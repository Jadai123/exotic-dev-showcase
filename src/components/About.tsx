
import { Code, Database, Globe, Zap, Shield, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend", icon: Globe, techs: ["React.js", "Tailwind CSS", "Shadcn UI", "HTML5/CSS3", "JavaScript ES6+"] },
    { name: "Backend", icon: Database, techs: ["Node.js", "Express", "FastAPI", "MongoDB", "Firebase"] },
    { name: "Tools", icon: Code, techs: ["GitHub", "VS Code", "Vercel", "Render", "Postman"] },
    { name: "Security", icon: Shield, techs: ["Auth Middleware", "Webhooks", "Web3/dApp", "API Security"] }
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
                <span className="text-gray-400 font-mono text-sm">~/about-hudson.md</span>
              </div>
              <div className="font-mono text-sm space-y-3">
                <div><span className="text-cyan-400">#</span> <span className="text-white">Hello World! 👋</span></div>
                <div className="text-gray-300 leading-relaxed">
                  Hi, I'm Hudson — a passionate and fearless full-stack developer, creative thinker, 
                  and digital builder on a mission to make the web more powerful, beautiful, and secure.
                </div>
                <div className="text-gray-300 leading-relaxed">
                  Born with the soul of a poet and the mind of an engineer, I blend technical skill 
                  with real-world purpose. From Jos, Nigeria to building platforms that solve actual problems.
                </div>
                <div className="mt-4">
                  <span className="text-green-400">const</span> <span className="text-white">passion</span> 
                  <span className="text-gray-400"> = </span>
                  <span className="text-yellow-400">["security", "innovation", "real_impact"]</span>
                </div>
                <div className="mt-2">
                  <span className="text-green-400">const</span> <span className="text-white">level</span> 
                  <span className="text-gray-400"> = </span>
                  <span className="text-yellow-400">"Junior → Mid-Level"</span>
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
                        <span className="text-green-400">{'>'}</span> {tech}
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
