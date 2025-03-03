

const projects = [
  {
    title: "AI-Powered PDF Extractor",
    description: "Extract structured & unstructured data from PDFs using NLP & Deep Learning.",
    image: "https://via.placeholder.com/500", // Replace with actual project image
    tech: ["Python", "TensorFlow", "NLP"],
    link: "#",
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with payment gateway integration.",
    image: "https://via.placeholder.com/500",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    description: "A real-time chat application with WebSockets and authentication.",
    image: "https://via.placeholder.com/500",
    tech: ["Next.js", "Socket.io", "Tailwind"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and achievements.",
    image: "https://via.placeholder.com/500",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900">My Projects</h2>
      <p className="text-lg text-center text-gray-600 mt-2">A collection of my best work.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <img src={project.image} alt={project.title} className="rounded-lg w-full h-52 object-cover" />
            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-3">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="block mt-4 text-blue-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
