
import Hero from "@/components/Hero/hero";
import HeaderPage from "../components/Header/headerPage";
import Statedisplay from "./components/State-display/displayState";


export default function Home() {
  return (
    <>
    <HeaderPage/>
    

    
      <Hero/>
     <div className="bg-white" >
      <Statedisplay />
     
    </div>
    </>
  );
}