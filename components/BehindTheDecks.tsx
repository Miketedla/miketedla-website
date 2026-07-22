import Image from "next/image";

export default function BehindTheDecks() {
  return (
    <section className="bg-[#080808] text-[#F2EFE9]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-40">

        <div className="mb-20 text-center">

          <p className="text-base uppercase tracking-[0.45em] text-neutral-500">
            Bakom spelarna
          </p>

        </div>

        <div className="space-y-8">

          <Image
            src="/behind-01.jpg"
            alt=""
            width={1800}
            height={1100}
            className="h-[360px] w-full rounded-[32px] object-cover brightness-90 contrast-105 md:h-[560px] transition duration-700"
          />

          <div className="grid gap-12 md:grid-cols-2">

            <Image
              src="/behind-04.jpg"
              alt=""
              width={900}
              height={1200}
              className="rounded-[32px] object-cover transition duration-700"
           loading="lazy"
           />

            <Image
              src="/behind-03.jpg"
              alt=""
              width={900}
              height={1200}
              className="rounded-[32px] object-cover transition duration-700"
           loading="lazy"
           />

          </div>

          <Image
            src="/behind-05.jpg"
            alt=""
            width={1800}
            height={1200}
            className="w-full rounded-[32px] object-cover transition duration-700"
         loading="lazy"
         />

          <div className="grid gap-12 md:grid-cols-2">

            <Image
              src="/behind-02.jpg"
              alt=""
              width={900}
              height={1200}
              className="rounded-[32px] object-cover transition duration-700"
              loading="lazy"
            />

            <Image
              src="/behind-06.jpg"
              alt=""
              width={900}
              height={1200}
              className="rounded-[32px] object-cover brightness-90 contrast-105 transition duration-700"
           loading="lazy"
           />

          </div>

        </div>

      </div>
    </section>
  );
}