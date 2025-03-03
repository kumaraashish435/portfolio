
import "../pages/pagescss/about.css";

const About = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="about-intro">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            Hi, I'm <span className="highlight">Aashish Kumar</span>, a Software Engineer &
            Developer passionate about building web and desktop applications.
            I specialize in Python, C++, JavaScript, and modern web frameworks.
          </p>
          <p className="section-text">
            Currently, I work at HCL and take up freelance projects on Upwork,
            helping businesses with automation, data scraping, and full-stack development.
          </p>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section className="about-skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-list">
            <span>Python</span>
            <span>C++</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>SQL & Databases</span>
            <span>Machine Learning</span>
            <span>Web Scraping</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-item">
            <h3>Software Engineer - HCL</h3>
            <p>Working on enterprise software solutions, automation, and backend development.</p>
          </div>
          <div className="experience-item">
            <h3>Freelance Developer - Upwork</h3>
            <p>Handled projects related to data scraping, automation, and full-stack development.</p>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="about-education">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-item">
            <h3>BCA - Amity University</h3>
            <p>Graduated with a strong foundation in computer science and software development.</p>
          </div>
          <div className="education-item">
            <h3>Machine Learning Certification</h3>
            <p>Completed a professional course in machine learning and AI.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
