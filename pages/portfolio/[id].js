import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));

const PortfolioByProject = () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <div>
      <LayoutComponent
        metaTitle="Portfolio"
        metaDescription={`ini adalah halaman Portfolio Page ${id}`}
        metaKeyword={`Portfolio, Belajar Next, ${id}`}
      >
        <h1>Portfolio Project {id}</h1>
      </LayoutComponent>
    </div>
  );
};

export default PortfolioByProject;
