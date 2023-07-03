import { Component, createSignal } from "solid-js";
import { NavLink } from "@solidjs/router";
import { useCartContext } from "../context/CartContext";

const Navbar: Component = () => {
  const { cartItems } = useCartContext();
  return (
    <div>
      <div class="">
        <div class="md:px-44 navbar sticky top-0 bg-base-200 z-10 backdrop-blur-3xl opacity-90 ">
          <div class="flex-1">
            <NavLink href="/">
              <img
                class="md:w-24 w-24"
                src="/images/logo.png"
                alt="Solid logo"
              />
            </NavLink>
          </div>
          <div class="flex-none md:gap-6 gap-3">
            <div class="md:flex items-center hidden">
              <input
                type="text"
                placeholder="Search"
                class="w-72 border py-2 px-8 rounded-lg bg-base-300"
              />
              <img class="w-4 absolute ml-2" src="/images/search.png" />
            </div>
            <img class="w-4 md:hidden" src="/images/search.png" />
            {/* <div class="flex items-center">
              <div>
                <img class="w-5" src="/images/favorite.png" />
              </div>
              <div class="md:ml-2 md:block hidden">
                <NavLink href="/favorite">Favorite</NavLink>
              </div>
            </div> */}

            <NavLink href="/cart" class="md:ml-2 md:mr-0 mr-3">
              <div class="flex items-center space-x-2">
                <div class="indicator">
                  <img class="w-5" src="/images/cart.png" />
                  <span class="badge badge-xs badge-primary indicator-item">
                    {cartItems.length}
                  </span>
                </div>
                <p class="md:block hidden">Cart</p>
              </div>
            </NavLink>

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
