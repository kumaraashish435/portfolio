import React from "react";

const projects = [
  {
    title: "Artistic Portfolio",
    description: "A visually stunning portfolio site with custom animations and a unique layout.",
    image: "https://source.unsplash.com/400x300/?art,abstract",
    tags: ["React", "Framer Motion", "UI/UX"],
    link: "#"
  },
  {
    title: "Minimal Blog",
    description: "A clean, minimal blog platform with markdown support and beautiful typography.",
    image: "https://i.pinimg.com/736x/6b/67/a1/6b67a1afc2ae7970e95b6972c28f2a35.jpg",
    tags: ["Next.js", "Tailwind", "Content"],
    link: "#"
  },
  {
    title: "Creative Gallery",
    description: "A gallery for artists to showcase their work with smooth hover effects.",
    image: "https://source.unsplash.com/400x300/?gallery,creative",
    tags: ["React", "Gallery", "CSS Art"],
    link: "#"
  },
  {
    title: "Modern Dashboard",
    description: "A dashboard UI with analytics, charts, and a modern color palette.",
    image: "https://source.unsplash.com/400x300/?dashboard,modern",
    tags: ["Dashboard", "D3.js", "Analytics"],
    link: "#"
  },
  {
    title: "Inspiration Board",
    description: "A board to collect and organize creative inspiration, with drag-and-drop.",
    image: "https://source.unsplash.com/400x300/?inspiration,board",
    tags: ["React", "DnD", "Productivity"],
    link: "#"
  },
];

const ProjectGrid = () => {
  return (
    <section className="py-16 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 text-center">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              href={project.link}
              key={idx}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-white border border-lightblue transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ minHeight: 320 }}
            >
              {/* Artistic hover overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <circle cx="80%" cy="30%" r="80" fill="#D7263D22" />
                  <circle cx="20%" cy="80%" r="60" fill="#0197F622" />
                </svg>
              </div>
              {/* Project image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>
              {/* Card content */}
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-dark text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-lightblue text-navy px-3 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-auto px-4 py-2 rounded-lg bg-primary text-offwhite font-semibold shadow hover:bg-navy transition-colors duration-300">
                  View Project
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid; 