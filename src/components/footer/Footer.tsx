import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-gray-300 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-[Coolvetica] text-white mb-2">KUMAR AASHISH</h2>
            <p className="text-sm text-gray-400">Software Engineer | Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="mailto:kumaraashish56712@gmail.com" 
              className="hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/kumaraashish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kumar-aashish-98b18323b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Kumar Aashish. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
