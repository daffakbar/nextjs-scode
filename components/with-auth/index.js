import React from "react";

const withAuth = (Component) => {
  return function WithAuth(props) {
    const isLogin = false;

    if (!isLogin) return <>Anda Harus Login</>;
    return <Component {...props} />;
  };
};

export default withAuth;
