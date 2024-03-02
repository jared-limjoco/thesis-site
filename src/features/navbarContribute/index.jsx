import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { signOut } from "next-auth/client";

import Logo from "@/ui/logo";
import SolidButton from "ui/buttons/buttonSolid";
import styles from "./styles.module.css";

export default function Nav() {
  const [menuState, setMenuState] = useState(false);

  const logoutFunction = () => {
    window.localStorage.setItem("annotationTotalCount", null);
    window.localStorage.setItem("annotationCurrentCount", null);
    window.localStorage.setItem("annotationSetData", null);
    signOut();
  };

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
        <a>
          <Logo height={30} subTitle="contribute" />
        </a>
      </div>
      <div ref={wrapperRef} className="flex flex-grow align-middle justify-end">
        <SolidButton
          onClick={() => menuToggle()}
          className={`mr-2 md:mr-5 pt-4 z-10 hover:bg-red-500 hover:text-white border-red-500 ${
            menuState
              ? "bg-red-500 text-white"
              : "text-red-500 bg-transparent focus:outline-none"
          }`}
        >
          Menu
        </SolidButton>
        <div
          className={
            menuState
              ? "transition-all duration-300 ease-in-out absolute mt-16 mr-5 cursor-default w-32 z-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "absolute opacity-0 left-0 h-0 w-0 cursor-default z-0"
          }
        >
          <ul className={`${styles.ul} ${menuState ? "block" : "hidden"}`}>
            <Link passHref href="/">
              <li>Home</li>
            </Link>
            <hr className="my-1" />
            <Link passHref href="/contribute/">
              <li>Dashboard</li>
            </Link>
            <Link passHref href="/contribute/annotate">
              <li>Annotate</li>
            </Link>
            <Link passHref href="/contribute/help">
              <li>Help</li>
            </Link>
            <hr className="my-1" />
            <button
              type="button"
              className="flex w-full"
              onClick={() => logoutFunction()}
            >
              <li>Logout</li>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
