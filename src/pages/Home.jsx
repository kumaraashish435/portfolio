const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #6B48FF 0%, #00DDEB 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ padding: '0 20px', textAlign: 'center', color: '#fff' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            John Doe Portfolio
          </h1>
          <p style={{ 
            fontSize: '1.8rem', 
            maxWidth: '700px', 
            margin: '0 auto 2rem',
            opacity: 0.9
          }}>
            Crafting Digital Experiences with Passion & Precision
          </p>
          <button 
            style={{ 
              padding: '12px 30px', 
              fontSize: '1.2rem',
              background: '#fff',
              color: '#6B48FF',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
              ':hover': { transform: 'scale(1.05)' }
            }}
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="about" 
        style={{ 
          padding: '100px 20px', 
          background: '#F8F9FA',
          color: '#333'
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#6B48FF'
        }}>
          About Me
        </h2>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          background: '#fff',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <p style={{ 
            lineHeight: '1.8', 
            fontSize: '1.2rem',
            color: '#555'
          }}>
            I'm a dedicated developer with 5+ years of experience in creating 
            beautiful, functional web applications. Specializing in React, 
            TypeScript, and UI/UX design, I transform ideas into seamless 
            digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        className="projects" 
        style={{ 
          padding: '100px 20px', 
          background: '#fff'
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#6B48FF'
        }}>
          Featured Projects
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '25px', 
            borderRadius: '15px',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-10px)' }
          }}>
            <h3 style={{ color: '#00DDEB', marginBottom: '1rem' }}>Project 1</h3>
            <p style={{ color: '#666' }}>
              A modern web app with real-time features built using React and Firebase
            </p>
          </div>
          <div style={{ 
            background: '#F8F9FA', 
            padding: '25px', 
            borderRadius: '15px',
            transition: 'transform 0.3s ease',
            ':hover': { transform: 'translateY(-10px)' }
          }}>
            <h3 style={{ color: '#00DDEB', marginBottom: '1rem' }}>Project 2</h3>
            <p style={{ color: '#666' }}>
              E-commerce platform with custom CMS and payment integration
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="contact" 
        style={{ 
          padding: '100px 20px', 
          background: 'linear-gradient(135deg, #6B48FF 0%, #00DDEB 100%)',
          color: '#fff'
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem'
        }}>
          Let's Connect
        </h2>
        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          background: 'rgba(255,255,255,0.1)',
          padding: '2rem',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={{ 
                padding: '12px', 
                fontSize: '1rem',
                border: 'none',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.9)'
              }}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={{ 
                padding: '12px', 
                fontSize: '1rem',
                border: 'none',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.9)'
              }}
            />
            <textarea 
              placeholder="Your Message" 
              style={{ 
                padding: '12px', 
                fontSize: '1rem', 
                minHeight: '120px',
                border: 'none',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.9)'
              }}
            />
            <button 
              type="submit"
              style={{ 
                padding: '12px', 
                fontSize: '1.2rem', 
                background: '#fff',
                color: '#6B48FF',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                ':hover': { transform: 'scale(1.05)' }
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;