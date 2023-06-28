import { NavLink } from "@solidjs/router";
import { Component } from "solid-js";

const Footer: Component = () => {
  return (
    <div class="bg-base-200 mt-12">
      <div class="md:mx-44 mx-3 py-14">
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          <div>
            <img class="w-36" src="/images/footer-logo.png" />
            <div class="flex space-x-2 mt-8 items-center">
              <img class="w-5 h-5" src="/images/map.png" />
              <p class="text-xs font-bold">
                #18C1, Sangkat Tuek Thlar, Khan Sen Sok, Phnom Penh, Cambodia
              </p>
            </div>
            <div class="flex space-x-2 mt-4 items-center">
              <img class="w-5 h-5" src="/images/gmail.png" />
              <p class="text-xs font-bold">info@camprotec.com.kh</p>
            </div>
            <div class="flex space-x-2 mt-4 items-center">
              <img class="w-5 h-5" src="/images/phone.png" />
              <p class="text-xs font-bold">023 884 789</p>
            </div>
          </div>
          <div>
            <h1 class="font-bold text-lg">Quick Link</h1>
            <div class="flex flex-col mt-4">
              <NavLink class="text-sm" href="/">
                Home
              </NavLink>
              <NavLink class="text-sm mt-2.5 " href="/core-products">
                Core Products
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/lates-products">
                Lates Products
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/news">
                News
              </NavLink>
            </div>
          </div>

          <div>
            <h1 class="font-bold text-lg">About</h1>
            <div class="flex flex-col mt-4">
              <NavLink class="text-sm" href="/about-us">
                About
              </NavLink>
              <NavLink class="text-sm mt-2.5 " href="/contact-us">
                Contact
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/lates-products">
                Client
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/news">
                Help
              </NavLink>
            </div>
          </div>
          <div>
            <h1 class="font-bold text-lg">Social Media</h1>
            <div class="flex flex-col mt-4">
              <NavLink class="text-sm" href="/">
                <div class="flex space-x-2 items-center">
                  <img class="w-4 h-4" src="/images/facebook.png" />
                  <p class=" text-sm ">Facebook</p>
                </div>
              </NavLink>
              <NavLink class="text-sm mt-2.5 " href="/core-products">
                <div class="flex space-x-2 items-center">
                  <img class="w-4 h-4" src="/images/instagram.png" />
                  <p class=" text-sm ">Instagram</p>
                </div>
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/lates-products">
                <div class="flex space-x-2 items-center">
                  <img class="w-4 h-4" src="/images/telegram.png" />
                  <p class=" text-sm ">telegram</p>
                </div>
              </NavLink>
              <NavLink class="text-sm mt-2.5" href="/news">
                <div class="flex space-x-2 items-center">
                  <img class="w-4 h-4" src="/images/twitter.png" />
                  <p class=" text-sm ">twitter</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[#373F49] text-white text-center py-4">
        <h1 class="text-sm">
          2023 CAM PROFESSIONAL TECHNOLOGY CO., LTD. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
