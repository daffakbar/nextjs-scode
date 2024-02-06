import React, { useContext } from "react";
import withAuth from "../with-auth";
import dynamic from "next/dynamic";
import { UserContext } from "@/context/useContext";
// import { useQueries } from "@/hooks/useQueries";
// import Cookies from "js-cookie";
const MenuComponent = dynamic(() => import("@/components/menu"));

const Header = () => {
  const userData = useContext(UserContext);
  // const { data } = useQueries({
  //   prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/user/me",
  //   method: "GET",
  //   headers: { Authorization: `Bearer ${Cookies.get("user_token")}` },
  // });

  // console.log("DATAAA=>", data);
  return (
    <div>
      <MenuComponent user={userData?.name} />
    </div>
  );
};

export default withAuth(Header);
