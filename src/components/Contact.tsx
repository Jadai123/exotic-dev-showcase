
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "jehuhudson@gmail.com", href: "mailto:jehuhudson@gmail.com" },
    { icon: Phone, label: "Phone", value: "+234 812 763 6057", href: "tel:+2348127636057" },
    { icon: MapPin, label: "Location", value: "Plateau State, Nigeria", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Jadai123", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn (Unavailable ATM)" },
    { icon: Twitter, href: "#", label: "Twitter (Unavailable ATM)" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-green-400">get</span>
            <span className="text-gray-400">.</span>
            <span className="text-cyan-400">in_touch</span>
            <span className="text-gray-400">()</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400 font-mono">
            // Let's build something amazing together 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gray-900/50 border border-green-400/20 rounded-lg p-8 backdrop-blur-sm mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 font-mono text-sm">~/contact-hudson.json</span>
              </div>

              <div className="font-mono text-sm space-y-4">
                <div className="text-gray-400">{'{'}</div>
                {contactInfo.map((item, index) => (
                  <div key={item.label} className="ml-4">
                    <span className="text-cyan-400">"{item.label.toLowerCase()}"</span>
                    <span className="text-gray-400">: </span>
                    <a
                      href={item.href}
                      className="text-green-400 hover:text-white transition-colors"
                    >
                      "{item.value}"
                    </a>
                    {index < contactInfo.length - 1 && <span className="text-gray-400">,</span>}
                  </div>
                ))}
                <div className="text-gray-400">{'}'}</div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-gray-900/30 border border-gray-700 hover:border-green-400/50 rounded-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-green-400/10 rounded-full border border-green-400/30 group-hover:border-green-400 transition-colors">
                    <item.icon className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-mono">{item.label}</div>
                    <div className="text-white font-mono group-hover:text-green-400 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 focus:border-green-400 rounded-lg text-white font-mono placeholder-gray-500 transition-colors focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 focus:border-green-400 rounded-lg text-white font-mono placeholder-gray-500 transition-colors focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 focus:border-green-400 rounded-lg text-white font-mono placeholder-gray-500 transition-colors focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 focus:border-green-400 rounded-lg text-white font-mono placeholder-gray-500 transition-colors focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-mono font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                className="group p-4 bg-gray-900/30 border border-gray-700 hover:border-green-400/50 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="font-mono text-gray-400">
            <span className="text-green-400">console.log(</span>
            "Ready to build what matters! 💥"
            <span className="text-green-400">)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
