import React from "react";

const Hero = () => {
  return (
    <section className="w-full  bg-gray-50">
      <div className="border-b border-gray-200">
        <div className="w-10/12 mx-auto flex lg:flex-row flex-col-reverse items-center justify-around ">
          <div className="max-w-xl space-y-6 flex-1 ">
            <h1 className="text-8xl font-bold text-gray-100 absolute top-20 left-10 select-none opacity-10 tracking-widest">
              DEVELOPER
            </h1>

            <h2 className="text-7xl font-bold text-gray-900 relative z-10">
              Full Stack Web Devoloper
            </h2>

            <p className="mt-4 text-gray-600 tracking-widest uppercase text-sm">
              Md Soriful Hasan
            </p>

            <div className="flex gap-8">
              <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
                Contact Me
              </button>
              <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
                Download CV
              </button>
            </div>
          </div>

          <div className="relative z-10  p-8">
            <img
              src="/myphoto.png"
              alt="Developer"
              className="w-md border border-gray-300 rounded-full bg-gray-200"
            />
          </div>
        </div>
      </div>

      <button className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full hover:bg-gray-800">
        ↑
      </button>
    </section>
  );
};

export default Hero;
