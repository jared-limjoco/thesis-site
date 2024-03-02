import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/client";

import H2 from "ui/heading/h2";
import H3 from "ui/heading/h3";
import P from "ui/heading/p";
import SolidButton from "ui/buttons/buttonSolid";

export default function AnnotationDone({ data, total }) {
  const [session, loading] = useSession();
  if (typeof window !== "undefined" && loading) return null;

  useEffect(() => {
    window.localStorage.setItem("annotationTotalCount", null);
    window.localStorage.setItem("annotationCurrentCount", null);
    window.localStorage.setItem("annotationSetData", null);

    async function postActivity() {
      await fetch("/api/userActivity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: session.user.username,
          date: new Date(),
          tag: "Annotation Session Done",
          activity: `You finished ${total} annotations`,
        }),
      });
    }
    postActivity();
  });

  const annotationData = data;
  const router = useRouter();

  return (
    <section className="container px-5 mx-auto">
      <div className="flex flex-col border px-5 py-5 my-5 rounded-md">
        <H2>Annotation session done!</H2>
        <div className="py-4">
          <SolidButton className="mr-2">
            <Link href="/contribute">Dashboard</Link>
          </SolidButton>
          <SolidButton
            onClick={() => {
              router.reload(window.location.pathname);
            }}
          >
            Start Another Session
          </SolidButton>
        </div>
        <H3 className="mt-4">You finished {total} annotations</H3>
        <P>You annotated the following images: </P>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gridGap: "1rem",
            marginTop: "1rem",
          }}
        >
          {annotationData.imgRecords.map((image, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <div key={image._id}>
              <img src={image.url} alt={`Annotation ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

AnnotationDone.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};
