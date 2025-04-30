import { FiMail, FiPhone, FiUser, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen pt-20 pb-16 bg-offwhite text-dark">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-8 text-navy font-['Poppins',sans-serif]">
          Get in Touch
        </h2>
        <p className="text-center text-lg text-dark mb-12 opacity-80 max-w-2xl mx-auto">
          Have a project in mind, want to collaborate, or just want to say hello? Fill out the form below or reach out directly!
        </p>

        {/* Contact Form Card */}
        <form className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col gap-6 border border-lightblue">
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg"
            />
          </div>
          <div className="relative">
            <FiMessageCircle className="absolute left-4 top-6 text-blue text-xl" />
            <textarea
              placeholder="Your Message"
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg resize-none h-36"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-offwhite rounded-full text-lg font-bold font-['Poppins',sans-serif] hover:bg-navy hover:text-offwhite hover:scale-105 transition-all duration-300 shadow"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-lg mb-6 opacity-90">
            Or reach out directly:
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:example@email.com"
              className="flex items-center gap-2 text-navy text-lg hover:text-primary transition-colors duration-300"
            >
              <FiMail className="text-xl" /> example@email.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-navy text-lg hover:text-primary transition-colors duration-300"
            >
              <FiPhone className="text-xl" /> +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;