import Hero from "@/components/hero";
import Layout from "@/layouts/index";

export default function Home() {
  return (
    <Layout metaTitle="Home" metaDescription="This is the home page">
      <Hero />
    </Layout>
  );
}
