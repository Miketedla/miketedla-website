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
         <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image 
              src="/latest-mix.jpg"
              alt="Mike Tedla live"
              width={1400}
              height={1400}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          <div className="mt-7 text-center">
            <span className="inline-flex rounded-full border border-neutral-700 px-8 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
              ▶ Lyssna på mixen
            </span>

           
          </div>
        </a>
      </div>
    </section>
  );
}