import { useEffect } from "react";
import { useSession, getSession } from "next-auth/client";
import { useRouter } from "next/router";

import Navbar from "@/features/navbarContribute";
import Footer from "@/features/footerMain";
import H1 from "ui/heading/h1";

export default function Layout({ children }) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/login");
    }
  }, [session, loading, router]);

  if (typeof window !== "undefined" && loading) return null;

  if (session) {
    return (
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="">
        <Navbar />
        <section className="container mx-auto py-20">
          <H1>Protected page. Redirecting to login page</H1>
        </section>
        <Footer />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
