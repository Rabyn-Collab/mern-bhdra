import Hero from "../../components/Hero";
import ColorSection from "./ColorSection";
import CssSection from "./CssSection";

export default function Home() {
  return (
    <div>


      <Hero />

      <main className="px-5">
        <CssSection />
        <ColorSection />

      </main>



    </div>
  )
}
