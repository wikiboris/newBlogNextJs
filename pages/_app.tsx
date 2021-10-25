import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/global.css";
import { AuthProvider } from "../context/AuthContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />{" "}
    </AuthProvider>
  );
}
