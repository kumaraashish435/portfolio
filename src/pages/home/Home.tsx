import { ArrowRight, Code, Database, Layout, Terminal, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";

function Home() {
  const skills = [
    { name: "Python & C++", icon: <Terminal size={32} className="text-blue-500" />, desc: "High-performance computing & logic" },
    { name: "C# & ASP.NET", icon: <Code size={32} className="text-purple-500" />, desc: "Enterprise application development" },
    { name: "React & Vite", icon: <Layout size={32} className="text-cyan-500" />, desc: "Modern frontend experiences" },
    { name: "Machine Learning", icon: <Cpu size={32} className="text-orange-500" />, desc: "PyTorch, CNNs, Transformers" },
    { name: "SQL & PostgreSQL", icon: <Database size={32} className="text-green-500" />, desc: "Complex data modeling" },
    { name: "Web Scraping", icon: <Globe size={32} className="text-yellow-500" />, desc: "Selenium & Data Extraction" },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-black opacity-80" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
        </div>
        
        <div className="z-10 max-w-5xl mx-auto space-y-8">
          <Reveal>
            <h2 className="text-xl md:text-2xl text-indigo-400 font-medium tracking-[0.2em] uppercase mb-4">
              Software Engineer | AI & ML Enthusiast
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <h1 className="text-6xl md:text-9xl font-[Coolvetica] leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              AASHISH KUMAR
            </h1>
          </Reveal>
          
          <Reveal delay={0.6}>
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Software Engineer with <span className="text-white font-medium">2+ years of experience</span> in application development, web scraping, and machine learning. 
              Specializing in building scalable solutions with <span className="text-indigo-400">Python, C++, and ASP.NET</span>.
            </p>
          </Reveal>
          
          <Reveal delay={0.8}>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Link to="/project">
                <Button size="lg" className="rounded-full">
                  View Work <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full">
                  Contact Me
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
             <div className="w-1 h-3 bg-gray-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section className="bg-neutral-950/50">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src="/image.jpeg" 
                  alt="Kumar Aashish" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent z-20">
                  <p className="text-white font-[Coolvetica] text-2xl">Based in India 📍</p>
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-[Coolvetica] text-white">
                Engineering <br /><span className="text-indigo-500">Future Tech.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                <p>
                  I am a <strong className="text-white font-medium">Software Engineer at HCL Technologies</strong> with a passion for solving complex problems. 
                  My journey involves building robust desktop and web applications using C++, C#, and ASP.NET Core.
                </p>
                <p>
                  Beyond traditional development, I am deeply invested in <strong className="text-white font-medium">AI and Deep Learning</strong>. 
                  From classifying skin lesions to detecting spine conditions, I leverage data to create impactful solutions.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <Link to="/about">
                <Button variant="ghost" className="pl-0 hover:pl-4 transition-all group text-indigo-400">
                  More about my journey <ArrowRight size={18} className="ml-2 group-hover:ml-4 transition-all" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-black relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-900/10 blur-[100px] rounded-full" />
        
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-[Coolvetica] mb-6">Technical Arsenal</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              A curated stack of technologies I use to build scalable, efficient, and intelligent systems.
            </p>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="h-full group hover:border-indigo-500/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{skill.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-32 bg-gradient-to-b from-black to-indigo-950/20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-7xl font-[Coolvetica] leading-tight">
              Ready to build something <span className="text-indigo-500">extraordinary?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl text-gray-400 mb-8">
              Let's collaborate on your next big project.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Link to="/contact">
              <Button size="lg" className="px-12 py-6 text-xl rounded-full">
                Get in Touch
              </Button>
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

export default Home;
