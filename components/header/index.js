import React from "react";
import withAuth from "../with-auth";
import Menu from "@/components/menu";
const Header = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

export default withAuth(Header);
