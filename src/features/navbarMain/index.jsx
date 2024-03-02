import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import NavLink from "@/ui/navlink";
import Logo from "@/ui/logo";
import SolidButton from "ui/buttons/buttonSolid";
import styles from "./styles.module.css";

export default function Nav() {
  const [menuState, setMenuState] = useState(false);

  const menuToggle = () => {
    setMenuState(!menuState);
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuState(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <nav className="flex container mx-auto px-1 md:px-5 py-5 md:py-10 z-10 relative">
      <div>
        <a href="/">
          <Logo height={30} />
        </a>
      </div>
      <div className="hidden md:flex flex-grow align-middle justify-end">
        <ul className="flex align-bottom">
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/about">About</NavLink>
          </li>
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/demo">Demo</NavLink>
          </li>
          <li className="mr-2 md:mr-5 pt-4">
            <NavLink href="/contribute">Contribute</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        ref={wrapperRef}
        className="flex flex-grow align-middle justify-end md:hidden"
      >
        <SolidButton
          onClick={() => menuToggle()}
          className={`mr-2 md:mr-5 pt-4 z-10 hover:bg-red-500 hover:text-white border-red-500 ${
            menuState
              ? "bg-red-500 text-white"
              : "text-red-500 bg-transparent focus:outline-none"
          }`}
        >
          ☰
        </SolidButton>
        <div
          className={
            menuState
              ? "transition-all duration-300 ease-in-out absolute mt-16 mr-5 cursor-default z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "absolute opacity-0 left-0 h-0 w-0 cursor-default z-0"
          }
        >
          <ul className={`${styles.ul} ${menuState ? "block" : "hidden"}`}>
            <Link passHref href="/">
              <li>Home</li>
            </Link>
            <Link passHref href="/about">
              <li>About</li>
            </Link>
            <Link passHref href="/demo">
              <li>Demo</li>
            </Link>
            <Link passHref href="/contribute">
              <li>Contribute</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
