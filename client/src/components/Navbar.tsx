import { Component, createSignal } from "solid-js";
import { NavLink } from "@solidjs/router";

const Navbar: Component = () => {
  return (
    <div>
      <div>
        <div class="px-44 navbar bg-base-200">
          <div class="flex-1">
            <NavLink href="/">
              <img class="w-24" src="/images/logo.png" alt="Solid logo" />
            </NavLink>
          </div>
          <div class="flex-none gap-6">
            <div class="flex items-center">
              <input
                type="text"
                placeholder="Search"
                class="w-72 border py-2 px-8 rounded-lg bg-base-300"
              />
              <img class="w-4 absolute ml-2" src="/images/search.png" />
            </div>
            <div class="flex items-center">
              <div>
                <img class="w-5" src="/images/favorite.png" />
              </div>
              <div class="ml-2">
                <NavLink href="/favorite">Favorite</NavLink>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <img class="w-5" src="/images/cart.png" />
              </div>
              <NavLink href="/cart" class="ml-2">
                <p>Cart</p>
              </NavLink>
            </div>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
