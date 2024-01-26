import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function About() {
  return (
    <LayoutComponent
      metaTitle="About"
      metaDescription="ini adalah halaman About Page"
      metaKeyword="About, Belajar Next"
    >
      <h1>Ini adalah About</h1>

      <Image
        src={
          "https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg"
        }
        alt="Hero Image"
        width={500}
        height={500}
      />
    </LayoutComponent>
  );
}
