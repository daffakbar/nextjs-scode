import Hero from "@/components/hero";
import Layout from "@/layouts/index";

export default function Home() {
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
