import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function About({ posts }) {
  return (
    <LayoutComponent
      metaTitle="About"
      metaDescription="ini adalah halaman About Page"
      metaKeyword="About, Belajar Next"
    >
      <h1>Ini adalah About</h1>

      {posts.map((post) => (
        <>
          <p>
            {post.id} - {post.title}
          </p>
        </>
      ))}
    </LayoutComponent>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // Pass data to the page via props
  return { props: { posts } };
}
