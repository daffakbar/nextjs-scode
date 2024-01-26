import Hero from "@/components/hero";
import Layout from "@/layouts/index";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));
const HeroComponent = dynamic(() => import("@/components/hero"));

export default function Home() {
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((res) => console.log("Response =>", res))
      .catch((err) => console.log("Error=>", err));
  }, []);

  return (
    <LayoutComponent
      metaTitle="Home"
      metaDescription="ini adalah halaman Home Page"
      metaKeyword="Home, Belajar Next"
    >
      <HeroComponent />
    </LayoutComponent>
  );
}
