import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import {
  FaInstagram,
  FaSoundcloud,
} from "react-icons/fa6";

import { HiOutlineEnvelope } from "react-icons/hi2";

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
      <div className="absolute inset-0 bg-black/80 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,.75)_100%)] pointer-events-none" />
      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent via-black/40 to-[#0D0D0D] pointer-events-none" />
<nav className="absolute top-0 left-0 z-20 w-full px-6 py-8 md:px-8 md:py-8">
  <div className="mx-auto flex max-w-7xl items-center justify-between">

  <img
  src="/branding/MT-monogram-master.svg"
  alt="Mike Tedla"
  className="h-10 w-auto md:h-14"
/>

 <div className="flex items-center gap-5 text-white/60">
  <a
  href="https://instagram.com/micketedla"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition-colors duration-300 hover:text-[#C8A86A]"
  aria-label="Instagram"
>
  <FaInstagram size={22} />
</a>

  <a
  href="https://soundcloud.com/miketedla"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/60 transition-colors duration-300 hover:text-[#C8A86A]"
  aria-label="SoundCloud"
>
  <FaSoundcloud size={24} />
</a>

 <a
  href="mailto:booking@miketedla.com"
  className="text-white/60 transition-colors duration-300 hover:text-[#C8A86A]"
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


          <h1 className="mt-2 text-3xl md:text-6xl font-light tracking-[0.45em] text-white/95">
            MIKE TEDLA
          </h1>

          <div className="mx-auto mt-6 h-px w-16 bg-[#C8A86A]" />

          <p className="mt-5 text-xs uppercase tracking-[0.6em] text-[#C8A86A]">
            FOR EVENTS & EXPERIENCES
          </p>

          <h2
            className={`${cormorant.className} mt-10 text-2xl md:text-5xl font-medium`}
          >
            Äntligen lite fest. Det var så längesen sist.
          </h2>

          <p className="mx-auto mt-6 max-w-md text-[15px] leading-7 text-white/70 md:max-w-lg md:text-base md:leading-8">
            Musikupplevelser för företag, restauranger,
            nattklubbar och privata tillställningar.
          </p>

          <a
            href="mailto:booking@miketedla.com"
            className="mt-10 inline-flex border border-[#C8A86A] px-7 py-4 text-xs uppercase tracking-[0.3em] md:px-10 md:text-sm transition-all duration-500 hover:bg-[#C8A86A] hover:text-black"
          >
            Berätta om ditt event
          </a>

        </div>

      </section>

    </main>
  );
}