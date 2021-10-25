import { useContext, useState } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user, logout, error } = useContext(AuthContext);

  return (
    <div className="relative flex items-center justify-between pb-10 sm:pb-8 lg:pb-12 sm:mb-8 lg:mb-12">
      <div className="flex items-center">
        <Link href="/">
          <a
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <svg
              className="w-8 text-teal-600"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
            >
              About us
            </a>
          </li>
        </ul>
      </div>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        {!user ? (
          <>
            <li>
              <Link href="/account/login">
                <a
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
                >
                  Sign in
                </a>
              </Link>
            </li>
            <li>
              <Link href="/account/register">
                <a
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </Link>
            </li>{" "}
          </>
        ) : (
          <>
            <li className="font-medium">Hello {user.username}!</li>
            <li>
              <Link href="/account/login">
                <button
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
                  aria-label="Logout"
                  title="Logout"
                  onClick={logout}
                >
                  Logout
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-teal-accent-400 focus:bg-teal-accent-400"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
          <div className="absolute top-0 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                  >
                    <svg
                      className="w-8 text-teal-accent-400-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12" />
                      <rect x="3" y="17" width="7" height="6" />
                      <rect x="14" y="1" width="7" height="6" />
                      <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Company
                    </span>
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400-accent-400"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400-accent-400"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400-accent-400"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400-accent-400"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Sign in"
                      title="Sign in"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-400-accent-400"
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-600 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
