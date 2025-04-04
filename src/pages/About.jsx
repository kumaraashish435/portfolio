const About = () => {
  return (
    <section 
      className="min-h-screen pt-20 pb-16"
      style={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #EDEFF2 100%)',
        color: '#333'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 
          className="text-5xl font-bold text-center mb-12"
          style={{
            color: '#6B48FF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          About Us
        </h2>

        {/* Main Content */}
        <div 
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          {/* Text Content */}
          <div 
            style={{
              background: '#fff',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              ':hover': { transform: 'translateY(-5px)' }
            }}
          >
            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: '#555',
                lineHeight: '1.8',
                fontFamily: "'Roboto', sans-serif"
              }}
            >
              We are a passionate team dedicated to building innovative and user-friendly websites. 
              With years of experience in web development and design, we aim to bring your vision to life 
              through clean code, modern design principles, and cutting-edge technology.
            </p>
            <p 
              className="text-lg leading-relaxed mt-4"
              style={{ color: '#555' }}
            >
              Our mission is to create digital experiences that not only look stunning but also 
              perform flawlessly, helping businesses and individuals achieve their goals in the 
              digital world.
            </p>
            <button
              style={{
                marginTop: '2rem',
                padding: '12px 30px',
                background: '#6B48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': { 
                  background: '#00DDEB',
                  transform: 'scale(1.05)' 
                }
              }}
            >
              Learn More
            </button>
          </div>

          {/* Decorative Element / Stats */}
          <div 
            style={{
              background: 'rgba(107, 72, 255, 0.1)',
              padding: '2.5rem',
              borderRadius: '15px',
              height: '100%'
            }}
          >
            <div className="space-y-8">
              <div>
                <h3 
                  style={{ 
                    color: '#00DDEB', 
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  5+
                </h3>
                <p style={{ color: '#6B48FF', fontSize: '1.2rem' }}>
                  Years of Experience
                </p>
              </div>
              <div>
                <h3 
                  style={{ 
                    color: '#00DDEB', 
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  50+
                </h3>
                <p style={{ color: '#6B48FF', fontSize: '1.2rem' }}>
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 
                  style={{ 
                    color: '#00DDEB', 
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                  }}
                >
                  100%
                </h3>
                <p style={{ color: '#6B48FF', fontSize: '1.2rem' }}>
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;