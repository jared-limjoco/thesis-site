import H2 from "ui/heading/h2";
import P from "ui/heading/p";

export default function MobileWarning() {
  return (
    <section className="container px-5 mx-auto">
      <div className="flex flex-col border px-5 py-5 my-5 rounded-md">
        <H2>Mobile Browser Detected</H2>
        <P className="mt-2 mb-8">
          The current version of the annotation tool only allows support for
          desktop.
        </P>
      </div>
    </section>
  );
}
