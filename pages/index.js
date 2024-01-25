import Hero from "@/components/hero";
import Layout from "@/layouts/index";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((res) => console.log("Response =>", res))
      .catch((err) => console.log("Error=>", err));
  }, []);

  return (
    <Layout
      metaTitle="Home"
      metaDescription="ini adalah halaman Home Page"
      metaKeyword="Home, Belajar Next"
    >
      <Hero />
    </Layout>
  );
}
