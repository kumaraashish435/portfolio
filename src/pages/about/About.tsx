import { Briefcase, GraduationCap, Award, Youtube, Brain } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";

function About() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "20+", label: "Projects Delivered" }, // Updated to 20+ based on prompt/resume inference
    { number: "100%", label: "Commitment" },
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-12 overflow-x-hidden">
      
      {/* Header */}
      <Section className="pb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-8xl font-[Coolvetica] mb-8 tracking-tight">
              About Me<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              I’m <span className="text-white font-medium">Aashish Kumar</span> — a Software Engineer and AI Enthusiast. 
              I specialize in building intelligent systems across desktop, web, and mobile platforms. 
              Passionate about AI, deep learning, and scalable software solutions.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2 font-[Coolvetica] group-hover:from-indigo-400 group-hover:to-purple-600 transition-all duration-500">
                  {stat.number}
                </div>
                <div className="text-gray-500 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience & Education */}
      <Section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="space-y-8">
            <Reveal>
              <div className="flex items-center gap-3 text-indigo-400 mb-6">
                <Briefcase size={28} />
                <h3 className="text-2xl font-semibold tracking-wide">Professional Experience</h3>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="border-l-2 border-white/10 pl-8 space-y-12 relative">
                <div className="relative">
                  <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-black" />
                  <h4 className="text-xl font-bold text-white">Software Engineer</h4>
                  <p className="text-indigo-400 text-sm mb-4 font-mono">HCL Technologies | 2022 – Present</p>
                  <ul className="text-gray-400 text-sm space-y-3 list-disc pl-4 marker:text-indigo-500">
                    <li>Developed desktop and web apps using C++, C#, and ASP.NET Core.</li>
                    <li>Built automation scripts and web scrapers for data extraction.</li>
                    <li>Collaborated on analytics integration and UI improvements.</li>
                    <li>Optimized existing codebases for performance.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <Reveal>
              <div className="flex items-center gap-3 text-indigo-400 mb-6">
                <GraduationCap size={28} />
                <h3 className="text-2xl font-semibold tracking-wide">Education</h3>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="border-l-2 border-white/10 pl-8 space-y-12 relative">
                <div className="relative">
                   <span className="absolute -left-[39px] top-2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-black" />
                  <h4 className="text-xl font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-indigo-400 text-sm mb-4 font-mono">Amity University</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Focused on Computer Science fundamentals, Programming, and Database Management.
                    Built strong foundations in Algorithms and Data Structures.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Additional Interests */}
      <Section className="bg-gradient-to-b from-black to-indigo-950/20">
        <div className="max-w-5xl mx-auto">
           <Reveal>
             <div className="flex items-center gap-3 text-indigo-400 mb-10">
                <Award size={28} />
                <h3 className="text-2xl font-semibold tracking-wide">Beyond Coding</h3>
              </div>
           </Reveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.2}>
                <Card className="flex items-start gap-5 p-8 h-full hover:bg-white/5">
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-xl">
                    <Youtube size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Content Creator</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Creating Python & programming tutorials on YouTube to share knowledge with the community.
                    </p>
                  </div>
                </Card>
              </Reveal>
              
              <Reveal delay={0.4}>
                <Card className="flex items-start gap-5 p-8 h-full hover:bg-white/5">
                  <div className="p-3 bg-blue-600/10 text-blue-500 rounded-xl">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Kaggle Competitions</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Participating in pattern recognition and ML challenges. Refining models for real-world accuracy.
                    </p>
                  </div>
                </Card>
              </Reveal>
           </div>
        </div>
      </Section>

    </div>
  );
}

export default About;
