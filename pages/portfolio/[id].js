import Layout from "@/layouts";
import { useRouter } from "next/router";
import React from "react";

const PortfolioByProject = () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <div>
      <Layout
        metaTitle="Portfolio"
        metaDescription={`ini adalah halaman Portfolio Page ${id}`}
        metaKeyword={`Portfolio, Belajar Next, ${id}`}
      >
        <h1>Portfolio Project {id}</h1>
      </Layout>
    </div>
  );
};

export default PortfolioByProject;
