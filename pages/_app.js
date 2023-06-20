import "../styles/globals.css";
import { AuthContextProvider } from "./api/context/AuthContext";
import Navbar from "./api/components/Navbar";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider template={AlertTemplate} {...options}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </Provider>
    </AuthContextProvider>
  );
}
