import "./about.css"



function About() {
  return (
    <>
      <section className=" h-screen w-screen bg-[#000] flex justify-center items-center">
        <div className=" bg-blue-900 text-white w-[94%] h-[94%] flex items-center ">
          <div className=" bg-fuchsia-500 ">
            <h4 className="text-3xl"> About Me </h4>
            <h1 className="text-4xl mt-40">
              I’m Aashish — a creative developer and problem-solver. I
              specialize in turning <br /> ideas into elegant, efficient digital
              products.
            </h1>
            <h3 className="text-3xl mt-16">
              From crafting intuitive user interfaces to building scalable
              backend systems, <br /> I bring full-stack solutions to life. With
              a strong foundation in design thinking,
              <br /> machine learning, and modern web technologies, I work with
              startups, businesses,
              <br /> and teams around the world to develop impactful software.
            </h3>
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl">
                <span className="font-bold text-4xl mr-2">8+</span>
                <span>years of experience in tech</span>
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold text-4xl mr-2">20+</span>
                <span>projects delivered successfully</span>
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold text-4xl mr-2">100%</span>
                <span>committed to innovation and quality</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;