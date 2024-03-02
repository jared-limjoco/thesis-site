import { useRouter } from "next/router";

import H2 from "ui/heading/h2";

export default function AnnotationSessionSelection() {
  const router = useRouter();

  const setAnnotationSession = async (annotationTotalCount) => {
    const annotationResponse = await fetch("/api/annotationGet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(annotationTotalCount),
    });
    const annotationJson = await annotationResponse.json();
    window.localStorage.setItem(
      "annotationTotalCount",
      JSON.stringify(annotationTotalCount)
    );
    window.localStorage.setItem("annotationCurrentCount", JSON.stringify(1));
    window.localStorage.setItem(
      "annotationSetData",
      JSON.stringify(annotationJson)
    );

    router.reload(window.location.pathname);
  };

  return (
    <section className="container px-5 mx-auto">
      <section className="pb-12 mt-12">
        <div className="flex flex-col border px-12 py-12 my-5 rounded-md shadow-xl mb-64">
          <H2>How many annotations do you want to do for this session?</H2>
          <p className="mt-4 text-gray-800 pr-20">
            Each image takes, on average, around 1 minute to accomplish. In each
            image you want to annotate, you will be required to identify
            obstructions, rate sidewalk accessibility, and identify the surface
            type. Click on the buttons below on how many images you are willing
            to annotate for the session.{" "}
          </p>
          <hr className="mt-4" />
          <div className="flex flex-wrap justify-center">
            <div className="px-4 mt-4">
              <button
                className="bg-red-600 text-white py-5 px-5 transition-all duration-300 ease-in-out rounded-md border-black hover:text-white hover:bg-gray-800 text-5xl shadow-lg"
                onClick={() => setAnnotationSession(5)}
              >
                05
              </button>
            </div>
            <div className="px-4 mt-4">
              <button
                className="bg-red-600 text-white py-5 px-5 transition-all duration-300 ease-in-out rounded-md border-black hover:text-white hover:bg-gray-800 text-5xl shadow-lg"
                onClick={() => setAnnotationSession(10)}
              >
                10
              </button>
            </div>
            <div className="px-4 mt-4">
              <button
                className="bg-red-600 text-white py-5 px-5 transition-all duration-300 ease-in-out rounded-md border-black hover:text-white hover:bg-gray-800 text-5xl shadow-lg"
                onClick={() => setAnnotationSession(15)}
              >
                15
              </button>
            </div>
            <div className="px-4 mt-4">
              <button
                className="bg-red-600 text-white py-5 px-5 transition-all duration-300 ease-in-out rounded-md border-black hover:text-white hover:bg-gray-800 text-5xl shadow-lg"
                onClick={() => setAnnotationSession(20)}
              >
                20
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
