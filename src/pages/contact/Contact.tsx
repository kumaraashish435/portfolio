import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

function Contact() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-12 overflow-x-hidden">
      <Section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-[Coolvetica] tracking-tight mb-6">
                Let's Talk<span className="text-indigo-500">.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Whether you have a project in mind, a question about my work, or just want to connect — I'm all ears.
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.2}>
                <Card className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors group">
                  <div className="p-4 bg-indigo-500/10 text-indigo-400 rounded-full group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email Me</h3>
                    <a href="mailto:kumaraashish56712@gmail.com" className="text-lg font-medium text-white hover:text-indigo-400 transition-colors">
                      kumaraashish56712@gmail.com
                    </a>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.3}>
                <Card className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors group">
                  <div className="p-4 bg-purple-500/10 text-purple-400 rounded-full group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Call Me</h3>
                    <a href="tel:+919736782785" className="text-lg font-medium text-white hover:text-purple-400 transition-colors">
                      (+91) 97367 82785
                    </a>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.4}>
                <Card className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors group">
                  <div className="p-4 bg-blue-500/10 text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Location</h3>
                    <p className="text-lg font-medium text-white">
                      India
                    </p>
                  </div>
                </Card>
              </Reveal>
            </div>
            
            <Reveal delay={0.5}>
              <div className="flex gap-4 pt-4">
                 <a href="https://www.linkedin.com/in/kumar-aashish-98b18323b/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full gap-2">
                      <Linkedin size={20} /> LinkedIn
                    </Button>
                 </a>
                 <a href="https://github.com/kumaraashish" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full gap-2">
                      <Github size={20} /> GitHub
                    </Button>
                 </a>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <Reveal delay={0.3}>
              <Card className="p-8 border-white/10 bg-white/[0.02] backdrop-blur-xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        placeholder="Your Name" 
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        placeholder="your@email.com" 
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      placeholder="What's this about?" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea 
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project..." 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none placeholder:text-gray-700"
                    />
                  </div>
                  
                  <Button glow className="w-full rounded-xl py-4 text-lg font-medium group">
                    Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </Reveal>
            
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
          </div>
          
        </div>
      </Section>
    </div>
  );
}

export default Contact;
