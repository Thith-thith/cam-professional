import { Component } from "solid-js";

const About: Component = () => {
  return (
    <div>
      <div>
        <div class="about-header-img">
          <div data-aos="zoom-in">
            <div class="text-center relative top-52 left-0">
              <h1 class="text-6xl text-[#98A2AE] font-bold">About Us</h1>
              <p>Behind At Our CAM</p>
            </div>
          </div>
        </div>
      </div>
      <div class="px-44">
        <div class="mt-32 h-full ">
          <div class="about-bg-img bg-gradient-to-l from-cyan-500 to-blue-500 ">
            <div class="backdrop-blur-lg bg-white h-[60vh] bg-opacity-60 ">
              <div class="py-24 px-12">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    {" "}
                    <h1 class="text-primary font-extrabold md:text-2xl m-auto">
                      We Would Be Happy To Meet You And Cooperate Together
                    </h1>
                    <p class="mt-7 text-[#464c53]">
                      Our Company is one of leading company in consumer printer
                      field established in 2010, the main product is compatible
                      toner cartridges for HP, Canon, Epson, Lexmark, Samsung,
                      Dell, Brother, etc.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <h1 class="text-primary font-extrabold md:text-2xl m-auto">
                      We Are CAM Professional Technology
                    </h1>
                    <p class="mt-7 text-[#464c53]">
                      We are trying our best service for you with the best
                      quality and trust. Finding the best solutions, fixing and
                      solve issues with all our ability.
                    </p>
                    <p class="mt-7 text-[#464c53]">
                      We choose the best parts of consumables to make the whole
                      toner cartridge.
                    </p>
                    <p class="mt-7 text-[#464c53]">
                      We test each toner cartridge before delivery to make sure
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
