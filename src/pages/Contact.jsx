const Contact = () => {
  return (
    <section
      className="min-h-screen pt-20 pb-16"
      style={{
        background: 'linear-gradient(135deg, #6B48FF 0%, #00DDEB 100%)',
        color: '#fff'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-5xl font-bold text-center mb-12"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Contact Us
        </h2>

        {/* Contact Form */}
        <form
          className="max-w-lg mx-auto space-y-6"
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '2.5rem',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-none rounded-lg focus:ring-2 focus:ring-[#00DDEB] transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#333',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-none rounded-lg focus:ring-2 focus:ring-[#00DDEB] transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#333',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border-none rounded-lg h-40 focus:ring-2 focus:ring-[#00DDEB] transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#333',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif",
                resize: 'none'
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full transition-all duration-300"
            style={{
              background: '#fff',
              color: '#6B48FF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              fontFamily: "'Poppins', sans-serif",
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#00DDEB',
                color: '#fff',
                transform: 'scale(1.05)'
              }
            }}
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div
          className="mt-12 text-center"
          style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <p
            style={{
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              opacity: 0.9
            }}
          >
            Or reach out directly:
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:example@email.com"
              style={{
                color: '#fff',
                fontSize: '1.1rem',
                transition: 'color 0.3s ease',
                ':hover': { color: '#00DDEB' }
              }}
            >
              example@email.com
            </a>
            <a
              href="tel:+1234567890"
              style={{
                color: '#fff',
                fontSize: '1.1rem',
                transition: 'color 0.3s ease',
                ':hover': { color: '#00DDEB' }
              }}
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 