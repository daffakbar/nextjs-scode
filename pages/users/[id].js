import Hero from "@/components/hero";
import Layout from "@/layouts/index";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/layouts"));
const HeroComponent = dynamic(() => import("@/components/hero"));

export default function Home({ users }) {
  console.log("User=>", users);
  return (
    <LayoutComponent
      metaTitle="Home"
      metaDescription="ini adalah halaman Home Page"
      metaKeyword="Home, Belajar Next"
    >
      {/* <HeroComponent /> */}
      <div>
        <ul key={users.id}>
          <li>Name : {users.name}</li>
          <li>Username : {users.username}</li>
          <li>Email : {users.email}</li>
        </ul>
      </div>
    </LayoutComponent>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
  return {
    paths,
    fallback: false, // false or "blocking"
  };
}
export async function getStaticProps(context) {
  console.log("c===", context);
  const { id } = context.params;

  //
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await res.json();
  return { props: { users } };
}
