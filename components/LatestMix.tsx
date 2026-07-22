import Image from "next/image";

export default function LatestMix() {
  return (
    <section className="bg-[#080808] text-[#F2EFE9]">
      <div className="mx-auto max-w-6xl px-6 py-32 md:px-8 md:py-40">
        <div className="text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Senaste mixen
          </p>

          <h2 className="text-2xl font-light leading-tight md:text-5xl">
 utvalda mixar
</h2>
        </div>

        <a
          href="https://soundcloud.com/miketedla/mike-tedla-tofta-beach-house"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mt-20 block max-w-3xl"
        >
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
            <Image 
              src="/latest-mix.jpg"
              alt="Mike Tedla live"
              width={1400}
              height={1400}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
           <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/45" />
          </div>
<div className="absolute inset-0 flex items-center justify-center">

  <div className="flex flex-col items-center transition-all duration-500 group-hover:scale-105">

    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-black/55 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70">
      <span className="ml-1 text-3xl text-white">
        ▶
      </span>
    </div>

    <p className="text-sm uppercase tracking-[0.35em] text-white">
      Lyssna på mixen
    </p>

  </div>

</div>
        </a>
      </div>
    </section>
  );
}