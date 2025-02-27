import Hero from "@/components/Hero/hero";
import HeaderPage from "../components/Header/headerPage";
import Statedisplay from "./components/State-display/displayState";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <Head>
        <link rel="shortcut icon" href="/img/nysc.png" type="image/png" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <Hero />
      <div className="bg-white">
        <Statedisplay />
      </div>
    </div>
  );
}
