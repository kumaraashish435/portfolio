import { Github, ExternalLink, Brain, Database, FileText, Activity } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";
import { Section } from "../../components/ui/Section";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

function Project() {
  const projects = [
    {
      title: "AI Skin Cancer Detection",
      category: "Deep Learning & Healthcare",
      description: "Built deep learning models to classify malignant vs benign skin lesions using CNNs and ensemble models. Optimized for partial AUC (pAUC) above 80% TPR. Integrated metadata for enhanced accuracy.",
      tech: ["Python", "PyTorch", "CNNs", "Ensemble Learning"],
      icon: <Activity size={32} className="text-red-500" />,
      link: "#",
      github: "#"
    },
    {
      title: "RSNA Lumbar Spine Detection",
      category: "Medical Imaging (DICOM)",
      description: "Developed ML models to classify spine conditions from MRI images. Handled multi-class severity prediction with weighted loss functions to address class imbalance.",
      tech: ["Python", "Computer Vision", "DICOM", "PyTorch"],
      icon: <Brain size={32} className="text-purple-500" />,
      link: "#",
      github: "#"
    },
    {
      title: "Web Scraping Monitoring System",
      category: "Automation & Data",
      description: "Designed a Python-based system to track stock/share changes from JSON sources. Implemented automated email alerts and scheduled checks using cloud-friendly architecture.",
      tech: ["Python", "Selenium", "AWS Lambda", "Automation"],
      icon: <Database size={32} className="text-blue-500" />,
      link: "#",
      github: "#"
    },
    {
      title: "PDF Data Extraction Tool",
      category: "Data Processing",
      description: "Extracted structured tables and unstructured text from complex PDFs. Delivered clean, usable datasets for downstream analytics and processing.",
      tech: ["Python", "NLP", "OCR", "Data Mining"],
      icon: <FileText size={32} className="text-yellow-500" />,
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-12 overflow-x-hidden">
      <Section className="pb-12">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <Reveal>
            <h1 className="text-5xl md:text-8xl font-[Coolvetica] mb-6 tracking-tight">
              Selected Works<span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
              A collection of projects highlighting my expertise in <span className="text-white">AI, Machine Learning, and Automation</span>. 
              Solving real-world problems with data-driven solutions.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col group hover:border-indigo-500/30 transition-all duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-indigo-500/10 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                     <Button variant="ghost" size="sm" className="rounded-full p-2 h-10 w-10 hover:bg-white/10">
                        <Github size={20} />
                     </Button>
                     <Button variant="ghost" size="sm" className="rounded-full p-2 h-10 w-10 hover:bg-white/10">
                        <ExternalLink size={20} />
                     </Button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
      
      <Section className="py-20 text-center">
        <Reveal>
           <h3 className="text-2xl font-[Coolvetica] text-white mb-6">Interested in more?</h3>
           <a 
             href="https://github.com/kumaraashish" 
             target="_blank" 
             rel="noopener noreferrer"
           >
             <Button variant="outline" size="lg" className="rounded-full">
               Visit my GitHub <Github size={20} className="ml-2" />
             </Button>
           </a>
        </Reveal>
      </Section>
    </div>
  );
}

export default Project;
