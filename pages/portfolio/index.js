import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function Portfolio() {
  return (
    <LayoutComponent
      metaTitle="Portfolio"
      metaDescription="ini adalah halaman Portfolio Page"
      metaKeyword="Portfolio, Belajar Next"
    >
      <h1>Ini adalah Portfolio</h1>

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
