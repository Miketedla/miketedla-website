import Hero from "@/components/Hero";
import About from "@/components/About";
import PreviousWork from "@/components/PreviousWork";
import LatestMix from "@/components/LatestMix";
import BehindTheDecks from "@/components/BehindTheDecks";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
     <>
  <Hero />

  <FadeIn>
    <About />
  </FadeIn>

  <FadeIn>
    <PreviousWork />
  </FadeIn>

  <FadeIn>
    <LatestMix />
  </FadeIn>

  <FadeIn>
    <BehindTheDecks />
  </FadeIn>

  <FadeIn>
    <Contact />
  </FadeIn>
</>
    </>
  );
}