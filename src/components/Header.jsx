import { CubeIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div class="bg-blue-900 fixed top-0 left-0 right-0 ">
      <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div class="relative flex items-center justify-between ">
          <Link
            to="/home"
            aria-label="QUIZ HUB"
            class="inline-flex items-center"
          >
            <div className="flex-shrink-0 text-white">
              <CubeIcon className="w-8 h-8"></CubeIcon>
            </div>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              QUIZ HUB
            </span>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                aria-label="Home"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-gray-400 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/topics"
                aria-label="Topics"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-gray-400"
              >
                Topics
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                aria-label="Statistics"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-gray-400"
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-300 hover:text-gray-400"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-300 rounded focus:outline-none focus:shadow-outline border border-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div className="">
                      <Link
                        to="/home"
                        aria-label="QUIZ HUB"
                        class="inline-flex items-center"
                      >
                        <div className="flex-shrink-0 text-blue-900">
                          <CubeIcon className="w-8 h-8"></CubeIcon>
                        </div>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          QUIZ HUB
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <hr />
                    <ul class="space-y-4 border-b">
                      <li className="hover:bg-gray-200 rounded ">
                        <Link
                          to="/home"
                          aria-label="Home"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="hover:bg-gray-200 rounded ">
                        <Link
                          to="/topics"
                          aria-label="Topics"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          Topics
                        </Link>
                      </li>
                      <li className="hover:bg-gray-200 rounded ">
                        <Link
                          to="/statistics"
                          aria-label="Statistics"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          Statistics
                        </Link>
                      </li>
                      <li className="hover:bg-gray-200 rounded ">
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
