/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import AboutSlide from './aboutSlide';

export default function AboutSection() {
  const [slideState, setSlide] = useState(-1);
  const max = 3;

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (slideState === -1) {
      setSlide(0);
    }
  }, [slideState]);

  return (
    <section className="container mx-auto">
      <AboutSlide
        title="The Why"
        head="Unwalkable Cities"
        img="theWhy.jpg"
        desc="Many Filipinos living in urban areas rely heavily on roads and
                sidewalks to accomplish their daily routines. Given that only 31
                percent% of the nation’s households owns at least one car, quality
                public infrastructure must be made available and accessible to all
                people. However, this is not always the case. Hundreds if not thousands of sidewalks
                are either broken, narrow, unsafe, or uncomfortable to work with. With
                the use of our sidewalk rating and labeling platform, we hope to
                introduce a method of collecting sidewalk accessibility ratings in the Philippines."
        active={slideState === 0}
      />
      <AboutSlide
        title="The How"
        head="Rating Sidewalk Accessibility"
        img="theHow.jpg"
        desc="Using your annotations as training data, we hope to train a machine
        learning model capable of assessing sidewalk assessibility. We use object detection and object segmentation models to assess
        the preliminary assessibility score of a sidewalk."
        active={slideState === 1}
      />
      <AboutSlide
        title="The Who"
        head="Meet The Team"
        img="theWho.jpg"
        desc="We are a group of Computer Science majors from the College of
        Computer Studies, De La Salle University, and we are currently
        working on building this sidewalk rating and labeling platform for our undergraduate
        thesis. "
        active={slideState === 2}
      />
      <div className="z-10 flex justify-end max-w-5xl mx-auto mt-10 relative mb-12">
        <button type="button" className="outline-none focus:outline-none border-black border px-4 text-gray-800 text-5xl transition-colors duration-300 ease-in-out hover:text-white hover:bg-gray-800" onClick={() => { setSlide((slideState - 1 + max) % max); scrollTop(); }}> 🠐</button>
        <button type="button" className="mr-5 md:mr-0 outline-none focus:outline-none border-black border px-4 text-gray-800 text-5xl transition-colors duration-300 ease-in-out hover:text-white hover:bg-gray-800" onClick={() => { setSlide((slideState + 1) % max); scrollTop(); }}> 🠒 </button>
      </div>
    </section>
  );
}
