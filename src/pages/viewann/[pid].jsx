import Page from "@/ui/page";
import AnnotateView from "@/features/annotateView/form";
export default function ViewAnnotation({ data }) {
  // console.log(data);
  return (
    <Page
      title="About - Atlas"
      description="Learn more about Atlas, our crowdsourcing platform for street accessibility."
      contribute={false}
    >
      <p>{data.username}</p>
      <p>{data.accessibilityRating}</p>
      <p>{data.date}</p>
      <p>{data.url}</p>
      <p>{data.pavementType}</p>

      <AnnotateView
        selectedObjects={data.selectedObjects}
        newObjects={data.newObjects}
        detectedObjects={data.detectedObjects}
        url={data.url}
        id={data.imageID}
      ></AnnotateView>
    </Page>
  );
}

export const getServerSideProps = async ({ query }) => {
  const annotationID = query.pid;

  const res = await fetch(
    "http://localhost:3000/api/getAnnotation/" + annotationID,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
};
