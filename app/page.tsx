import Hero from "@/components/Hero";
import About from "@/components/About";
import PreviousWork from "@/components/PreviousWork";
import LatestMix from "@/components/LatestMix";
import BehindTheDecks from "@/components/BehindTheDecks";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PreviousWork />
      <LatestMix />
      <BehindTheDecks />
      <Contact />
    </>
  );
}