import P from "ui/heading/p";
import HelpItem from "./helpItem";

export default function HelpDirectory() {
  return (
    <section className="shadow container mx-auto my-12">
      <HelpItem heading="Starting a new Annotation Session">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/how_to_annotate.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P> 1. Open your dashboard.</P>
            <P> 2. Click on <b>&quot;Start Annotating&quot;</b>. </P>
            <P>
              {" "}
              3. Select the number of annotations you are willing to do for the
              session.{" "}
            </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Classifying Obstructions">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/classify_obstruction.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P className="mb-2">
              {" "}
              We classify <b>&quot;obstructions&quot;</b> as objects that{" "}
              <b>block the pathway</b> for a pedestrian to easily walk along the
              sidewalk.{" "}
            </P>
            <P>
              {" "}
              1. Click on the <b>white boxes</b> that you think are blocking the
              sidewalk.{" "}
            </P>
            <P>
              {" "}
              2. If the object blocks the pathway of the sidewalk, select
              {" "}<b>&quot;Yes&quot;</b> as your option, otherwise select <b>&quot;No&quot;</b>.{" "}
            </P>
            <P>
              {" "}
              3. The object will appear on the <b>&quot;Selected Obstructions&quot;</b>{" "}
              list if you selected &quot;Yes&quot;.{" "}
            </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Labeling New Obstructions">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/label_obstruction.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P className="mb-2">
              If you see an obstruction on the image that{" "}
              <b>does not have a bounding box around it yet</b>, it&apos;s time
              to label it as an <b>obstruction</b>!
            </P>
            <P>
              {" "}
              1. <b>Draw a box</b> around the obstruction by clicking and dragging your
              mouse from the top left to the bottom right.{" "}
            </P>
            <P> 2. Select the type of object among the selection list. If the object is not found on the list, select <b>&quot;Others&quot;</b> as your option. </P>
            <P>
              {" "}
              3. Click the <b>&quot;check mark&quot;</b> icon to confirm your action,
              otherwise click the <b>&quot;trash bin&quot;</b> icon to delete your
              action.{" "}
            </P>
            <P className="mb-2">
              {" "}
              4. The new obstruction will appear on the <b>&quot;New Obstructions&quot;</b> list.
            </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Rating Sidewalk Accessibility">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/Rating Accessibility.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P>
              {" "}
              1. Place your mouse over the slider and drag it towards the
              accessibility rating of the sidewalk found in the image.
            </P>
            <P>
              {" "}
              2. An accessibility rating of 1 means that the sidewalk is
              completely <b> unsafe and inaccessible </b> for both abled
              pedestrians and PWPDs.{" "}
            </P>
            <P>
              {" "}
              3. An accessibility rating of 10 means that the sidewalk is very{" "}
              <b> safe and accessible </b>for both abled pedestrians and PWPDs.
            </P>
          </div>
        </div>
      </HelpItem>
      <HelpItem heading="Determining Surface Type">
        <div className="flex flex-col ">
          <div className="gifContainer border-black border-4 self-center">
            <img src="/images/help/Sidewalk Type.gif"></img>
          </div>
          <div className="mt-4 text-lg ml-0 lg:ml-16 xl:ml-32 2xl:ml-64">
            <P>
              {" "}
              1. Among the 3 choices, select the image that <b>best describes the surface type</b> of the sidewalk.{" "}
            </P>
            <P>
              {" "}
              2. If the image has no sidewalk, select the option of <b>&quot;No Sidewalk&quot;</b>.{" "}
            </P>
          </div>
        </div>
      </HelpItem>
    </section>
  );
}
