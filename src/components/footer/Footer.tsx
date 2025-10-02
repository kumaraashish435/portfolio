import "./footer.css";

function Footer() {
  return (
    <section className="w-full h-[50vh] bg-red-500 flex flex-col  justify-center   text-white py-6">
      <div className=" bg-amber-900 flex justify-around">
        <div>
          <h1>Services</h1>
          
        </div>
        <div>
          <h1>Industries</h1>
        </div>
      </div>
      <div className="w-[94%]  mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">© 2025 Kumar Aashish</h4>
          <p className="text-sm">Built with ❤️ using React & Tailwind CSS</p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:kumaraashish56712@gmail.com" className="info">
            Email
          </a>
          <a
            href="https://github.com/kumaraashish"
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kumaraashish"
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
export default Footer;
