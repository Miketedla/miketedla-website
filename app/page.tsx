import Hero from "@/components/Hero";
import About from "@/components/About";
import PreviousWork from "@/components/PreviousWork";
import LatestMix from "@/components/LatestMix";
import BehindTheDecks from "@/components/BehindTheDecks";
import Contact from "@/components/Contact";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <div className="overflow-x-clip bg-background">
      <ScrollSection index={1}>
        <Hero />
      </ScrollSection>
      <ScrollSection index={2}>
        <About />
      </ScrollSection>
      <ScrollSection index={3}>
        <PreviousWork />
      </ScrollSection>
      <ScrollSection index={4}>
        <LatestMix />
      </ScrollSection>
      <ScrollSection index={5}>
        <BehindTheDecks />
      </ScrollSection>
      <ScrollSection index={6} last>
        <Contact />
      </ScrollSection>
    </div>
  );
}
