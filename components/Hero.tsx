import Image from "next/image";
import {
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa6";

import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Hero() {
  return (
    <main className={`font-sans relative h-screen overflow-hidden bg-background`}>

      {/* Video */}
<video
  src="/hero-loop-web.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  disablePictureInPicture
  controls={false}
  className="absolute inset-0 h-full w-full object-cover scale-110 pointer-events-none"
/>
   
     

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(10,10,10,.75)_100%)] pointer-events-none" />
      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
<nav className="absolute top-0 left-0 z-20 w-full px-6 py-8 md:px-8 md:py-8">
  <div className="mx-auto flex max-w-7xl items-center justify-between">

<Image
  src="/branding/MT-monogram-master.svg"
  alt="Mike Tedla"
  width={180}
  height={56}
  className="h-10 w-auto md:h-14"
/>

 <div className="flex items-center gap-5 text-white/60">
  <a
  href="https://instagram.com/micketedla"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition-colors duration-300 hover:text-accent"
  aria-label="Instagram"
>
  <FaInstagram size={22} />
</a>

  <a
  href="https://soundcloud.com/miketedla"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition-colors duration-300 hover:text-accent"
  aria-label="SoundCloud"
>
  <FaSoundcloud size={24} />
</a>

 <a
  href="mailto:booking@miketedla.com"
  className="text-white/60 transition-colors duration-300 hover:text-accent"
  aria-label="Kontakt"
>
  <HiOutlineEnvelope size={22} />
</a>
</div>

  </div>
</nav>
      {/* Content */}
      <section className="relative z-10 flex h-full items-center justify-center px-6 md:px-8">

        <div className="max-w-4xl text-center text-white">


          <h1 className="mt-2 whitespace-nowrap text-[26px] font-light tracking-[0.32em] pl-[0.32em] text-white/95 md:text-6xl md:tracking-[0.45em] md:pl-[0.45em]">
            MIKE TEDLA
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-accent" />

          <p className="mt-5 whitespace-nowrap text-[10px] uppercase tracking-[0.38em] pl-[0.38em] text-accent md:text-xs md:tracking-[0.6em] md:pl-[0.6em]">
            FOR EVENTS & EXPERIENCES
          </p>

          <h2
            className={`font-serif mt-10 text-balance text-2xl md:text-5xl font-medium`}
          >
            Äntligen lite fest. Det var så längesen sist.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-balance text-[15px] leading-7 text-white/70 md:max-w-lg md:text-base md:leading-8">
            Musikupplevelser för företag, restauranger,
            nattklubbar och privata tillställningar.
          </p>

<p className="sr-only">
  Mike Tedla är en professionell DJ i Stockholm som spelar på företagsevent,
  restauranger, nattklubbar och privata tillställningar.
</p>

          <a
            href="mailto:booking@miketedla.com"
            className="mt-10 inline-flex border border-accent px-7 py-4 text-xs uppercase tracking-[0.3em] md:px-10 md:text-sm transition-all duration-500 hover:bg-accent hover:text-black"
          >
            Berätta om ditt event
          </a>

        </div>

      </section>

    </main>
  );
}