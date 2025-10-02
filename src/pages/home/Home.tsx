import "./home.css";






const vedio2 = new URL('../../assets/videos/video2.mp4', import.meta.url).href;




function Home() {
  return (
    <>
      <section className="home h-screen w-screen flex flex-col justify-center items-center text-white">
        <video
            src={vedio2 }
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full absolute z-[-10] object-cover"
          />
        <div className="w-[94%] h-[94%]  outline outline-offset-2 flex items-center rounded-md">
          <div className="w-[70%] h-[45%]  ">
            <span className=" text-3xl">Updated</span>
            <h1 className="text-[10rem] font-[Coolvetica]  leading-none m-0 p-0 h-fit">
              PORTFOLIO
            </h1>
            <span className=" text-2xl">Software Engineer</span>
          </div>
        </div>
      </section>
      <section className="home h-[30vh] w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%] flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <div>
              <h2>Kumar Aashish</h2>
              <h6>Software Engineer</h6>
            </div>
            <span>
              The Portfolio contains some of my Works <br /> and Assignments
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span>
              Text in set in this portfolio <br /> Thrunder by kumar Aashish{" "}
              <br />
            </span>
            <span>copyright © 2025</span>
          </div>
        </div>
      </section>

      <section className="home h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%]   flex rounded-md justify-between">
          <div className="w-[30%] h-[78%] bg-amber-700 overflow-hidden flex items-center rounded-md  ">
            <img src="/image.jpeg" alt="image" className=" w-full h-auto " />
          </div>
          <div className="w-[69%] h-[78%]  flex flex-col justify-between  gap-4">
            <h1 className=" text-9xl font-[Coolvetica] leading-none m-0 p-0 h-fit w-fit">
              Hello<span className=" text-green-700">!</span>
            </h1>
            <p className="text-xl">
              I am Aashish Kumar, a results-driven Software Developer at HCL
              Technologies with hands-on experience in .NET development, SAP BW,
              DataSphere Cloud, Python, Tableau, SQL Server, and Oracle. I have
              contributed to key enterprise projects including application
              support, S4 migration, and cloud platform optimization. Skilled in
              C#, Visual Studio, and modern development workflows using Git and
              CI, I also create impactful data visualizations and automate
              processes with Python. I’m passionate about building efficient,
              scalable solutions and eager to apply my skills to innovative and
              challenging projects.
            </p>
            <div className="flex gap-2 justify-between ">
              <div className="flex flex-col gap-4">
                <span className="info">kumaraashish56712@gmail.com</span>
                <span className="info">Reddit</span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="info"> @1kumar_0005</span>
                <span className="info">(+91) 97367 82785</span>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[69%] h-[78%]"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="home bg-amber-400 h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%]  outline outline-offset-2 flex items-center"></div>
      </section>
      {/* Section 4: Skills */}
      <section className="home bg-amber-400 h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%] outline outline-offset-2 flex items-center justify-around p-6 text-black">
          <div className="text-left">
            <h2 className="text-5xl mb-4">Tech Skills</h2>
            <ul className="list-disc pl-6 text-xl space-y-2">
              <li>C++, C#, Python, JavaScript</li>
              <li>.NET, ASP.NET Core, React, Tailwind CSS</li>
              <li>SQL Server, Oracle, Tableau</li>
              <li>Machine Learning, Web Scraping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Projects */}
      <section className="home bg-amber-300 h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%] outline outline-offset-2 p-6 text-black flex flex-col justify-center items-start">
          <h2 className="text-5xl mb-4">Projects</h2>
          <ul className="list-disc pl-6 text-xl space-y-2">
            <li>AI Skin Cancer Detection (ISIC 2024)</li>
            <li>Game Automation Tools for Android</li>
            <li>Web Scraping Bots for Financial Data</li>
            <li>Custom Linux Distribution (in-progress)</li>
          </ul>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section className="home bg-amber-200 h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-[94%] h-[94%] outline outline-offset-2 flex flex-col items-center justify-center gap-4">
          <h2 className="text-5xl">Let's Connect</h2>
          <p className="text-xl text-center">
            Interested in collaborating or have a project idea? <br />
            Feel free to reach out!
          </p>
          <div className="flex gap-4">
            <span className="info">Email: kumaraashish56712@gmail.com</span>
            <span className="info">GitHub: github.com/kumaraashish</span>
            <span className="info">LinkedIn: linkedin.com/in/kumaraashish</span>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
