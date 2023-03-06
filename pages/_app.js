import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import localFont from "@next/font/local";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
const myFont = localFont({
  src: "../public/fonts/circular.woff2",
  variable: "font-circle",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${myFont.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
