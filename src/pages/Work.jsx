import ProjectGrid from "../components/ProjectGrid";

const Work = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 bg-offwhite text-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12 text-navy font-['Poppins',sans-serif]">
          My Projects
        </h2>
        <ProjectGrid />
      </div>
    </section>
  );
};

export default Work;