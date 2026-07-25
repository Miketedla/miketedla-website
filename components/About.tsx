import Image from "next/image";
export default function About() {
  return (
    <section
  className="text-[#F2EFE9]"
  style={{
    background:
      "radial-gradient(circle at top, #151515 0%, #0D0D0D 45%, #080808 100%)",
  }}
>
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-28 md:px-8 md:pt-48 md:pb-48">

        <div className="mb-16 flex justify-center transition-all duration-700 md:mb-32">
          <Image
  src="/branding/MT-monogram-medium.png"
  alt="MT-monogram för Mike Tedla"
  width={200}
  height={200}
  className="w-24 opacity-90 md:w-50"
/>
        </div>

        <div className="mx-auto max-w-3xl">
<p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#C8A86A]">
  DJ & EVENTPARTNER
</p>
          <h2 className="text-4xl font-light leading-[0.95] md:text-8xl">
            Musik som lyfter varje ögonblick.
          </h2>

          <div className="mt-14 max-w-xl space-y-7 text-lg leading-9 md:text-xl md:leading-10 text-neutral-300">

            <p>
              Varje event har sin egen puls. Min uppgift är att förstärka den.
            </p>

          <p>
  <span className="block">
    Från företagsevent och stilfulla middagar till pulserande dansgolv
    skapar jag skräddarsydda musikupplevelser där musik, publik och atmosfär möts.
  </span>

  <span className="mt-3 block">
    Med erfarenhet, fingertoppskänsla och ett genuint engagemang ser jag till
    att varje event får sitt eget uttryck.
  </span>
</p>

          </div>

        </div>

      </div>
    </section>
  );
}