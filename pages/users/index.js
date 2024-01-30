import Hero from "@/components/hero";
import Layout from "@/layouts/index";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/layouts"));
const HeroComponent = dynamic(() => import("@/components/hero"));

export default function Users({ users }) {
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((res) => console.log("Response =>", res))
      .catch((err) => console.log("Error=>", err));
  }, []);
  console.log("User=>", users);
  return (
    <LayoutComponent
      metaTitle="Users"
      metaDescription="ini adalah halaman Users Page"
      metaKeyword="Users, Belajar Next"
    >
      {/* <HeroComponent /> */}
      <div>
        {users.map((user) => (
          <ul key={user.id}>
            <li>Name : {user.name}</li>
            <li>Username : {user.username}</li>
            <li>Email : {user.email}</li>
            <button className=" btn btn-primary">
              <Link href={`/users/${user.id}`}>Lihat Detail</Link>
            </button>
          </ul>
        ))}
      </div>
    </LayoutComponent>
  );
}
export async function getStaticProps() {
  //
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return { props: { users } };
}
