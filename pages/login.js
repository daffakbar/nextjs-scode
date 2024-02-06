import dynamic from "next/dynamic";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useMutation();

  const router = useRouter();
  const handleLogin = async () => {
    const formLogin = { email, password };
    console.log("eee", formLogin);
    const res = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/login",
      payload: formLogin,
    });
    if (res?.success) {
      console.log("res", res);
      Cookies.set("user_token", res?.data?.token, {
        expires: new Date(res?.data?.expires_at),
        path: "/",
      });
      router.push("/");
    }
  };
  return (
    <LayoutComponent
      metaTitle="Login"
      metaDescription="ini adalah halaman Login Page"
      metaKeyword="Login, Belajar Next"
    >
      <div class="flex justify-center items-center h-screen ">
        <div class="  shadow-lg p-6">
          <h1 className=" text-2xl font-semibold mb-4">Form Login</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className=" btn btn-primary w-full mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </LayoutComponent>
  );
}
