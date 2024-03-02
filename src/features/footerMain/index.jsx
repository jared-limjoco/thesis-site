/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

import Logo from "@/ui/logo";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-6 md:pt-12 w-full relative z-10">
      <div className="px-4 mx-auto">
        <div className="md:flex justify-between md:flex-wrap md:-mx-4 md:pb-6">
          <Link passHref href="/">
            <div className="md:px-4 mt-4">
              <Logo height={50} white />
            </div>
          </Link>

          <div className="lg:w-1/3 md:px-4 mb-4">
            <h4 className="text-white text-2xl">
              Thank you for joining us in knowing our streets better.
            </h4>
            <p className="text-gray-400">
              Feel free to send us a message, view our repository, or read our
              paper.
            </p>
            <div className="flex flex-wrap">
              <a
                className={styles.button}
                href="mailto:wethestreetsdlsu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 512 512"
                  className="inline fill-current mr-2 -mt-1"
                >
                  <path d="M467 80.609H45c-24.813 0-45 20.187-45 45v260.782c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45V125.609c0-24.813-20.187-45-45-45zm-5.873 30l-6.006 5.001-181.267 150.941c-10.346 8.614-25.364 8.614-35.708 0L56.879 115.61l-6.006-5.001h410.254zM30 132.267L177.692 255.25 30 353.543V132.267zm437 269.124H45c-7.248 0-13.31-5.168-14.699-12.011l171.445-114.101 17.204 14.326a57.79 57.79 0 0037.051 13.407 57.793 57.793 0 0037.051-13.407l17.204-14.326 171.444 114.1c-1.39 6.845-7.452 12.012-14.7 12.012zm15-47.848l-147.692-98.292L482 132.267v221.276z" />
                </svg>
                Email
              </a>

              <a
                className={styles.button}
                href="https://github.com/Nicolas-Sy/we-the-streets-site"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 250"
                  className="inline fill-current mr-2 -mt-1"
                >
                  <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403z" />
                </svg>
                Github
              </a>
              <a
                className={styles.button}
                href="https://drive.google.com/file/d/1Ucw9Kz9emJ33nqZ7Ixbz9rignlKmRxJo/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 480 480"
                  className="inline fill-current mr-2 -mt-1"
                >
                  <path d="M160 344h-16a8 8 0 000 16h16a8 8 0 000-16zM384 344H192a8 8 0 000 16h192a8 8 0 000-16zM160 296h-16a8 8 0 000 16h16a8 8 0 000-16zM384 296H192a8 8 0 000 16h192a8 8 0 000-16zM160 248h-16a8 8 0 000 16h16a8 8 0 000-16zM384 248H192a8 8 0 000 16h192a8 8 0 000-16zM160 200h-16a8 8 0 000 16h16a8 8 0 000-16zM384 200H192a8 8 0 000 16h192a8 8 0 000-16zM160 152h-16a8 8 0 000 16h16a8 8 0 000-16zM384 152H192a8 8 0 000 16h192a8 8 0 000-16z" />
                  <path d="M439.896 119.496a7.557 7.557 0 00-.408-2.056c-.088-.256-.152-.504-.264-.752a7.998 7.998 0 00-1.6-2.344l-112-112a7.998 7.998 0 00-2.344-1.6c-.248-.112-.496-.176-.744-.264a7.967 7.967 0 00-2.072-.416C320.328.088 320.176 0 320 0H96a8 8 0 00-8 8v24H48a8 8 0 00-8 8v432a8 8 0 008 8h336a8 8 0 008-8v-40h40a8 8 0 008-8V120c0-.176-.088-.328-.104-.504zM328 27.312L412.688 112H328V27.312zM376 464H56V48h32v376a8 8 0 008 8h280v32zm48-48H104V16h208v104a8 8 0 008 8h104v288z" />
                  <path d="M192 72h-48a8 8 0 00-8 8v48a8 8 0 008 8h48a8 8 0 008-8V80a8 8 0 00-8-8zm-8 48h-32V88h32v32z" />
                </svg>
                Paper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                {/* &copy;
                {' '} */}
                <strong>We The Streets</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <Link href="/terms-of-use">
                <span className="cursor-pointer py-2 px-4 text-white inline-block hover:underline">
                  {" "}
                  Terms of Use{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
