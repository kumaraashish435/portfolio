const Work = () => {
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
          Our Work
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
              }
            }}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: '#00DDEB' }}
            >
              E-Commerce Platform
            </h3>
            <p
              style={{
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              A modern, responsive e-commerce solution with secure payment integration 
              and intuitive product management.
            </p>
            <button
              style={{
                padding: '8px 20px',
                background: '#6B48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: '#00DDEB',
                  transform: 'scale(1.05)'
                }
              }}
            >
              View Details
            </button>
          </div>

          {/* Project 2 */}
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
              }
            }}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: '#00DDEB' }}
            >
              Portfolio Website
            </h3>
            <p
              style={{
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              A sleek, professional portfolio showcasing creative work with smooth 
              animations and modern design.
            </p>
            <button
              style={{
                padding: '8px 20px',
                background: '#6B48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: '#00DDEB',
                  transform: 'scale(1.05)'
                }
              }}
            >
              View Details
            </button>
          </div>

          {/* Project 3 */}
          <div
            style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
              }
            }}
          >
            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: '#00DDEB' }}
            >
              Business Dashboard
            </h3>
            <p
              style={{
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}
            >
              A dynamic dashboard with real-time analytics and customizable widgets 
              for business insights.
            </p>
            <button
              style={{
                padding: '8px 20px',
                background: '#6B48FF',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: '#00DDEB',
                  transform: 'scale(1.05)'
                }
              }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-12"
          style={{
            background: 'rgba(107, 72, 255, 0.1)',
            padding: '2rem',
            borderRadius: '15px',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <p
            style={{
              color: '#6B48FF',
              fontSize: '1.2rem',
              marginBottom: '1.5rem'
            }}
          >
            Want to see more of our amazing projects?
          </p>
          <button
            style={{
              padding: '12px 30px',
              background: '#6B48FF',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#00DDEB',
                transform: 'scale(1.05)'
              }
            }}
          >
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;