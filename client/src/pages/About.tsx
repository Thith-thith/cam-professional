import { Component, For, Show } from "solid-js";
import Members from "../data/Members";
import MemberCard from "../components/Member-cart";
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
        <div class="mt-32">
          <h1 class="text-center text-primary font-extrabold md:text-2xl w-96 m-auto">
            Our Vision, Mission and Policy
          </h1>
          <p class=" text-center  text-gray-600">
            We Believe In Hard Work And Commitment
          </p>
        </div>
        <div class="mt-12">
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-base-200 p-10 rounded">
              <div class="flex justify-center">
                <img class="w-12" src="/images/focus.png" />
              </div>
              <div class=" mt-3 ">
                <p class="text-pink-600 font-bold text-center">Vision</p>
                <p class="text-gray-600 mt-4">
                  Becoming a perfect company in supplying products and
                  technology services.
                </p>
              </div>
            </div>
            <div class="bg-base-200 p-10 rounded">
              <div class="flex justify-center">
                <img class="w-12" src="/images/mission.png" />
              </div>
              <div class=" mt-3 ">
                <p class="text-pink-600 font-bold text-center">Mission</p>
                <p class="text-gray-600 mt-4">
                  Make customers peaceful and prosperous with the company’s use
                  of service products.
                </p>
              </div>
            </div>
            <div class="bg-base-200 p-10 rounded">
              <div class="flex justify-center">
                <img class="w-12" src="/images/privacy-policy.png" />
              </div>
              <div class=" mt-3 ">
                <p class="text-pink-600 font-bold text-center">Policies</p>
                <p class="text-gray-600 mt-4">
                  1. All company employees and professionals are the number one
                  property, then customers...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-32">
          <h1 class="text-center text-primary font-extrabold md:text-2xl w-96 m-auto">
            Meeting Our Amazing Team
          </h1>
          <p class=" text-center  text-gray-600">
            We Couldn't Do It Without Them
          </p>
          <div class="grid grid-cols-3 gap-4 mt-12">
            <For each={Members}>
              {(members) => {
                return (
                  <Show when={members} fallback={<p>Loading...</p>}>
                    <MemberCard props={members} />
                  </Show>
                );
              }}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
