import React from "react";
import Menu from "../menu";
import withAuth from "../with-auth";
import NavigationMenuDemo from "@/components/menu";
const Header = () => {
  return (
    <div>
      <NavigationMenuDemo />
    </div>
  );
};

export default withAuth(Header);
