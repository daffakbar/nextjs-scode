import Head from "next/head";
import dynamic from "next/dynamic";
const HeaderComponent = dynamic(() => import("@/components/header"));
const FooterComponent = dynamic(() => import("@/components/footer"));

export default function Layout({
  children,
  metaTitle,
  metaDescription,
  metaKeyword,
}) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{`Belajar Next App - ${metaTitle}`}</title>
        <meta
          name="description"
          content={metaDescription || "ini adalah sebuah website Next App"}
        />
        <meta name="keywords" content={metaKeyword || "Belajar Next App"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
}
