import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${manrope.className} relative h-screen overflow-hidden bg-black`}>

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,.75)_100%)]" />

      {/* Content */}
      <section className="relative z-10 flex h-full items-center justify-center px-8">

        <div className="max-w-4xl text-center text-white">


          <h1 className="mt-2 text-4xl md:text-6xl font-light tracking-[0.45em] text-white/95">
            MIKE TEDLA
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#C8A86A]" />

          <p className="mt-5 text-[11px] uppercase tracking-[0.6em] text-[#C8A86A]">
            DJ & EVENTPARTNER
          </p>

          <h2
            className={`${cormorant.className} mt-16 text-3xl md:text-5xl font-medium`}
          >
            Äntligen lite fest. Det var så längesen sist.
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/70">
            Musikupplevelser för företagsevent, restauranger,
            nattklubbar och privata tillställningar.
          </p>

          <a
            href="mailto:booking@miketedla.com"
            className="mt-14 inline-flex border border-[#C8A86A] px-10 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#C8A86A] hover:text-black"
          >
            Berätta om ditt event
          </a>

        </div>

      </section>

    </main>
  );
}