const video1 = new URL('../../assets/videos/video1.mp4', import.meta.url).href;


function Project() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen ">
        <div className="w-[97%] h-[94%]  outline outline-offset-2 flex items-center rounded-md">
          <video
            src={video1}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      </section>
      <section className="w-[100vw] h-[40vh] bg-amber-400">
        <p className="text-4xl tracking-wide">
          I design and build modern web solutions  that blend creativity <br /> with functionality. 
          My portfolio includes sleek websites and dynamic apps, <br /> all focused on great user
          experience. With a passion for innovation and <br /> attention to detail, I turn ideas into
          impactful digital products.
        </p>
      </section>
      <section className="flex gap-5 items-center justify-center h-screen bg-gray-400">
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-amber-700 rounded-md"></div>
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-amber-700 rounded-md"></div>
      </section>
      <section className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <div className="w-[97%] h-[94%]  outline outline-offset-2 flex items-center rounded-md"></div>
      </section>
      <section className="flex gap-5 items-center justify-center h-screen bg-gray-200">
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-amber-700 rounded-md"></div>
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-amber-700 rounded-md"></div>
      </section>
      <section className="flex gap-5 items-center justify-center h-screen bg-gray-200">
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-blue-700 rounded-md"></div>
        <div className="w-[48%] h-[94%]  outline outline-offset-2 flex items-center bg-red-700 rounded-md"></div>
      </section>
      <section className="flex flex-col  items-center justify-around h-screen bg-gray-200">
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-700 rounded-md"></div>
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-400 rounded-md"></div>
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-600 rounded-md"></div>
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-900 rounded-md"></div>
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-800 rounded-md"></div>
        <div className="w-[97%] h-[14%]  flex items-center bg-blue-700 rounded-md"></div>
      </section>
      <section className="flex flex-col  items-center gap-5 h-[140vh] bg-green-500">
        <div className="w-[97%] h-[14%] flex items-center bg-blue-700 rounded-md"></div>
        <div className="w-[97%] h-[14%] flex items-center bg-blue-400 rounded-md"></div>
        <div className="w-[97%] h-[14%] flex items-center bg-blue-600 rounded-md"></div>
        <div className="w-[97%] h-[14%] flex items-center bg-blue-900 rounded-md"></div>
        <div className="w-[97%] h-[14%] flex items-center bg-blue-800 rounded-md"></div>
        <div className="w-[97%] h-[14%] flex items-center bg-blue-700 rounded-md"></div>
      </section>
    </>
  );
}
export default Project;
