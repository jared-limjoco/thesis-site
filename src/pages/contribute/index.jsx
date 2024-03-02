import Link from "next/link";
import { getSession, useSession } from "next-auth/client";

import Page from "@/ui/page";
import H1 from "@/ui/heading/h1";
import H2 from "@/ui/heading/h2";
import OutlineButton from "ui/buttons/buttonOutline";
import DashboardInfo from "../../features/contribute/dashboard/infoSection";

export default function ContributePage() {
  const [session, loading] = useSession();

  if (typeof window !== "undefined" && loading) return null;

  return (
    <Page
      title="Dashboard - Atlas Contribute"
      description="Contribute to Atlas! Let's make our streets accessible for all."
      contribute
    >
      <section className="container flex flex-col pb-24 mx-auto px-5">
        <div className="lg:max-w-7xl lg:w-4/5 lg:mx-auto">
          <H1>Contribute to Atlas</H1>
          <div className="flex flex-col pt-8 md:flex-row justify-between">
            <H2>{session ? session.user.username : ""}</H2>
            <div className="mt-2">
              <OutlineButton className="mr-5 border hover:border-black">
                <Link href="/contribute/help">Annotation Guide</Link>
              </OutlineButton>
              <button className="bg-red-600 transition-all font-semibold text-white hover:bg-red-700 py-2 px-4 border border-red-600 rounded duration-500 ease-in-out">
                <Link href="/contribute/annotate">Start Annotating</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <DashboardInfo username={session ? session.user.username : ""} />
    </Page>
  );
}

ContributePage.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};
