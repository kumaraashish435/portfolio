const About = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-[#F8F9FA] to-[#EDEFF2] text-[#333]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12 text-[#6B48FF] text-shadow-sm font-['Poppins',sans-serif]">
          About Us
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="bg-white p-10 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300">
            <p className="text-lg leading-relaxed text-[#555] font-['Roboto',sans-serif]">
              We are a passionate team dedicated to building innovative and user-friendly websites. 
              With years of experience in web development and design, we aim to bring your vision to life 
              through clean code, modern design principles, and cutting-edge technology.
            </p>
            <p className="text-lg leading-relaxed text-[#555] mt-4 font-['Roboto',sans-serif]">
              Our mission is to create digital experiences that not only look stunning but also 
              perform flawlessly, helping businesses and individuals achieve their goals in the 
              digital world.
            </p>
            <button className="mt-8 px-8 py-3 bg-[#6B48FF] text-white rounded-full text-lg font-bold hover:bg-[#00DDEB] hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Decorative Element / Stats */}
          <div className="bg-[#6B48FF]/10 p-10 rounded-xl h-full">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-[#00DDEB]">
                  5+
                </h3>
                <p className="text-[#6B48FF] text-lg">
                  Years of Experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#00DDEB]">
                  50+
                </h3>
                <p className="text-[#6B48FF] text-lg">
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#00DDEB]">
                  100%
                </h3>
                <p className="text-[#6B48FF] text-lg">
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