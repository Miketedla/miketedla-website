import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function Hero() {
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
      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent via-black/40 to-[#0D0D0D]" />
<nav className="absolute top-0 left-0 z-20 w-full px-6 py-8 md:px-8 md:py-8">
  <div className="mx-auto flex max-w-7xl items-center justify-between">

  <img
  src="/branding/MT-monogram-master.svg"
  alt="Mike Tedla"
  className="h-12 w-auto md:h-14"
/>

    <div className="flex items-center text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/70">
  <a
    href="https://instagram.com/micketedla"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    Instagram
  </a>

  <span className="mx-4 text-white/30">·</span>

  <a
    href="https://soundcloud.com/miketedla"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    SoundCloud
  </a>

  <span className="hidden md:inline mx-4 text-white/30">·</span>

<a
  href="mailto:booking@miketedla.com"
  className="hidden md:inline transition hover:text-white"
>
  Kontakt
</a>

</div>

  </div>
</nav>
      {/* Content */}
      <section className="relative z-10 flex h-full items-center justify-center px-8">

        <div className="max-w-4xl text-center text-white">


          <h1 className="mt-2 text-4xl md:text-6xl font-light tracking-[0.45em] text-white/95">
            MIKE TEDLA
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#C8A86A]" />

          <p className="mt-5 text-[11px] uppercase tracking-[0.6em] text-[#C8A86A]">
            FOR EVENTS & EXPERIENCES
          </p>

          <h2
            className={`${cormorant.className} mt-16 text-3xl md:text-5xl font-medium`}
          >
            Äntligen lite fest. Det var så längesen sist.
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/70">
            Musikupplevelser för företag, restauranger,
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