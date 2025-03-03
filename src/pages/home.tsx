import "./pagescss/home.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description:
      "An AI chatbot built with Python and NLP for customer support automation.",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built using React and Tailwind CSS.",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "A dynamic dashboard to track sales, users, and inventory using React and Firebase.",
  },
];  
const Home = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-white">
        {/* Introduction Text */}
        <h2 className="text-lg text-black font-light">
          Hi 👋, my name is <span className="font-semibold">Aashish Kumar</span>{" "}
          and I am a freelancer as
        </h2>

        {/* Main Title */}
        <div className="relative mt-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-black">
            Software Engineear
          </h1>
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent stroke-2 stroke-black outline-text">
            & Devloper
          </h1>
        </div>

        {/* Location Text */}
        <p className="mt-3 text-lg text-gray-600">based in India.</p>

        {/* Profile Image */}
        <div className="relative mt-10 w-48 h-48 md:w-60 md:h-60">
          <img
            src="src/assets/bgpic.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-black shadow-lg"
          />
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="buttonstyle px-6 py-3 bg-black text-white font-medium rounded-full">
            Resume
          </button>
          <button className="buttonstyle px-6 py-3 border-2 border-black text-black font-medium rounded-full">
            Contact
          </button>
        </div>

        {/* Visit Site Button */}
        <a
          href="#"
          className="buttonstyle absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 border-2 border-black text-black rounded-lg"
        >
          <FaArrowUpRightFromSquare />
          Linkdin
        </a>
      </section>
      <section className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I am Aashish Kumar, a passionate Software Engineer & Developer. I
            specialize in building web and desktop applications using Python,
            C++, and JavaScript. I love solving complex problems and creating
            efficient solutions.
          </p>
          <p className="about-text">
            Currently, I am working as a Software Engineer at HCL, and I also
            take up freelance projects on Upwork.
          </p>
        </div>
        <div className="about-image">
          <img src="src/assets/ab.jpg" alt="Aashish Kumar" />
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contact-container">
        <div className="flex flex-col">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-text">
            Feel free to reach out for collaborations or freelance projects.
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="primary-button">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Home;
