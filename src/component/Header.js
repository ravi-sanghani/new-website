import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [walletAddress, setWalletAddress] = useState(null);
  console.log(walletAddress, "walletAddress");
  // detect wallet
  window.onload = async function () {
    try {
      if (window.ethereum) {
        const ethereum = window.ethereum;
        if (ethereum.isMetaMask) {
          // console.log(`Phantom wallet found`);
          const res = await ethereum.enable();
          // console.log(`connected with public key,`, res);
          setWalletAddress(res.toString());
        } else {
          window.open("https://metamask.io/download/");
          // alert("Phantom Wallet not found");
        }
      }
    } catch (err) {
      console.log(err, "err");
    }
  };
  // Connect Wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      const res = await ethereum.enable();
      setWalletAddress(res.toString());
    } else {
      // alert("Phantom Wallet not found");
      window.open("https://metamask.io/download/");
    }
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div>
      <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-50 bg-white top-0 left-0 border-b">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://decentrame.com/" className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/decentrame/logo/main/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Decentrame Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Decentrame
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-[#7B3FE4] hover:bg-[#6433b9] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              onClick={connectWallet}
            >
              {!walletAddress ? (
                <button>Connect Wallet</button>
              ) : (
                <p className="text-white">
                  {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
                </p>
              )}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className={splitLocation[1] === "" ? "active_class" : ""}>
                <NavLink
                  exact={true}
                  to="/"
                  href="#"
                  className="block py-2 pr-4 pl-3 md:hover:text-[#6433b9] md:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li
                className={
                  splitLocation[1] === "services" ? "active_class" : ""
                }
              >
                <NavLink
                  exact
                  to="/services"
                  href="https://decentrame.com/service"
                  className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-[#6433b9] md:p-0"
                >
                  Services
                </NavLink>
              </li>
              <li
                className={
                  splitLocation[1] === "certificate" ? "active_class" : ""
                }
              >
                <NavLink
                  exact
                  to="/certificate"
                  href="https://decentrame.com/certificate"
                  className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-[#6433b9] md:p-0"
                >
                  Certificate
                </NavLink>
              </li>
              <li
                className={splitLocation[1] === "resources" ? "active_class" : ""}
              >
                <NavLink
                  exact
                  to="/resources"
                  href="https://decentrame.com/resources"
                  className="block py-2 pr-4 pl-3 md:hover:bg-transparent md:hover:text-[#6433b9] md:p-0"
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6433b9] md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
