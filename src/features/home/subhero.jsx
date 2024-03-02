import { useEffect, useState } from "react";
import Image from "next/image";

import H2 from "@/ui/heading/h2";
import P from "@/ui/heading/p";

export default function SubHero() {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = () => {
    setScrollState(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="flex container mx-auto flex-col-reverse content-center justify-around xl:flex-row p-5">
      <div
        className={`duration-300 ease-in ${scrollState < 300
          ? "opacity-0"
          : "opacity-100 mx-auto my-5 xl:mr-5 xl:w-1/3"
          }`}
      >
        <Image
          src="/images/home/subhero.png"
          height={350}
          width={350}
          alt="Manila Map"
        />
      </div>
      <div className="max-w-4xl flex flex-col justify-center xl:w-3/4">
        <div className={`xl:-mt-20 duration-300 ease-in ${scrollState < 300 ? "opacity-0" : "opacity-100"}`} >
          <H2>Help Us Assess the Accessibility of Metro Manila Sidewalks</H2>
        </div>
        <div className={`mt-4 duration-300 ease-in ${scrollState < 300 ? "opacity-0" : "opacity-100"}`}>
          <P>
            Many Filipinos living in urban areas rely heavily on roads and
            sidewalks to accomplish their daily routines. Given that only 31% of
            the nation’s households owns at least one car, quality public
            infrastructure must be made available and accessible to all people.
          </P>
        </div>
      </div>
    </section>
  );
}
