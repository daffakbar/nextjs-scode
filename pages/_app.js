import { UserContextProvider } from "@/context/useContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
