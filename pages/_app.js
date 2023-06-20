import "../styles/globals.css";
import { AuthContextProvider } from "./api/context/AuthContext";
import Navbar from "./api/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
