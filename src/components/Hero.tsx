
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-block p-4 rounded-full bg-green-400/10 border border-green-400/30 mb-6 animate-pulse">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center">
              <span className="text-black font-bold text-xl font-mono">{'{ }'}</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono">
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            John Developer
          </span>
        </h1>

        <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-mono text-gray-300">
          <span className="text-green-400">$</span> echo "
          <span className="text-cyan-400">{text}</span>
          <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-green-400`}>
            |
          </span>
          "
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with code, creativity, and endless curiosity. 
          Specializing in modern web technologies and bringing ideas to life.
        </p>

        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group relative p-4 rounded-full border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={scrollToAbout}
          className="group animate-bounce hover:animate-none transition-all duration-300"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-mono text-gray-400 group-hover:text-green-400 transition-colors">
              Scroll to explore
            </span>
            <ArrowDown className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors" />
          </div>
        </button>
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-green-400/20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
