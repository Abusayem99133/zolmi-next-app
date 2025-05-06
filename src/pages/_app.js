import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Logo />
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
