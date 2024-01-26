import React from "react";
import withAuth from "../with-auth";
import dynamic from "next/dynamic";
const MenuComponent = dynamic(() => import("@/components/menu"));

const Header = () => {
  return (
    <div>
      <MenuComponent />
    </div>
  );
};

export default withAuth(Header);
