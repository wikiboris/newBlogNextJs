import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import * as React from "react";

type LayoutProps = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

export default function Layout({
  title = "First",
  keywords = "music, dj",
  description = "bimbo",
  children,
}: LayoutProps) {
  const router = useRouter();

  return (
    <div className="font-body">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>

        <Header />

        <div className="py-6 md:py-8 mb-8 md:mb-12 xl:mb-16">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
