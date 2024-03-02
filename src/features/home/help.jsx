/* eslint-disable no-use-before-define */
import React, { useEffect, useState, useRef } from "react";

import H2 from "@/ui/heading/h2";
import H3 from "@/ui/heading/h3";
import P from "@/ui/heading/p";
import styles from "./styles.module.scss";

export default function Help() {
  const [isVisible, setIsVisible] = useState(false);
  const [passed, setPassed] = useState(false);
  const [passed1, setPassed1] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
    const callbackFunction = (entries) => {
      const [entry] = entries;

      if (isVisible) {
        setPassed1(false);
        setPassed(true);
      }

      if (!passed1 && !isVisible) {
        setPassed(false);
        setPassed1(true);
      }

      setIsVisible(entry.isIntersecting || (passed && passed1));
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);

    const refCurrent = ref.current;

    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
    };
  }, [ref, isVisible, passed, passed1]);

  return (
    <section className="container mx-auto py-5 px-5">
      <div>
        <H2 className="text-center">How can you help?</H2>
        <P className="text-center py-5 lg:mx-20">
          You must first sign up for our platform so that we can track the
          volunteers that are using the platform. No need to worry since we will
          not be collecting any personal identifiable information (PII) except
          your email address. The email address provided will primarily be used
          for communication. A short questionnaire will also be asked after you
          register so that we know the demographic of the volunteers! Once
          that&apos;s finished, you can start contributing to Atlas by doing 3
          tasks:
        </P>
      </div>
      <div ref={ref}>
        <ul className="flex flex-row flex-wrap justify-around ml-8">
          <li
            className={`duration-500 ease-in ${styles.card} ${
              !isVisible ? "opacity-0 pl-10" : "pt-0 opacity-100"
            }`}
          >
            <H3>
              <span>#1</span>
              <span>Identify</span>
            </H3>
            <P>
              Classify pre-labeled objects and determine whether they are
              obstructions that contribute to your accessibility score or not.
            </P>
          </li>
          <li
            className={`duration-700 ease-in ${styles.card} ${
              !isVisible ? "opacity-0 pl-10" : "pt-0 opacity-100"
            }`}
          >
            <H3>
              {" "}
              <span>#2</span>
              <span>Add Labels</span>{" "}
            </H3>
            <P>
              Label additional sidewalk obstructions that we might have missed!
            </P>
          </li>
          <li
            className={`duration-1000 ease-in ${styles.card} ${
              !isVisible ? "opacity-0 pl-10" : "pt-0 opacity-100"
            }`}
          >
            <H3>
              <span>#3</span>
              <span>Score</span>
            </H3>
            <P>
              Rate the accessibility of the sidewalk from 1-10 based on the
              labeled objects on the sidewalk image
            </P>
          </li>
        </ul>
      </div>
    </section>
  );
}
