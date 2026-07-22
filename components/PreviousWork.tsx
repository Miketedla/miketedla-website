"use client";

import { useState } from "react";

const featuredLogos = [
  { name: "Adidas", file: "adidas.svg", height: 34 },
  { name: "Carlsberg", file: "carlsberg.svg", height: 34 },
  { name: "Teamtailor", file: "teamtailor.svg", height: 40 },
  { name: "Le Pacte", file: "lepacte.svg", height: 34 },
  { name: "Berns", file: "berns.svg", height: 34 },
  { name: "Sturehof", file: "sturehof.svg", height: 38 },
  { name: "Stadshuset", file: "stadshuset.svg", height: 48 },
  { name: "CAKE", file: "cake.png", height: 34 },
  { name: "Solvalla", file: "solvalla.svg", height: 34 },
];

const hiddenLogos = [
  { name: "Restaurang AG", file: "ag.svg", height: 34 },
  { name: "East", file: "east.png", height: 34 },
  { name: "Forefront", file: "forefront.png", height: 34 },
  { name: "Supper", file: "supper.png", height: 34 },
  { name: "Sperling & Co", file: "sperling.png", height: 34 },
  { name: "Broken", file: "broken.png", height: 34 },
  { name: "Omaka", file: "omaka.png", height: 34 },
  { name: "Teamtailor", file: "teamtailor.svg", height: 40 },
];


function LogoRow({
  logos,
}: {
  logos: {
    name: string;
    file: string;
    height: number;
  }[];
}) {
  return (
    <div className="flex flex-wrap justify-center gap-y-12 md:flex md:flex-wrap md:justify-center md:gap-x-20 md:gap-y-16">
      {logos.map((logo) => (
        <div
          key={logo.name}
         className="flex w-full items-center justify-center md:w-[180px] transition-opacity duration-300 hover:opacity-100"
          style={{
            height: `${logo.height}px`,
            opacity: 0.5,
          }}
        >
          <img
            src={`/logos/${logo.file}`}
            alt={logo.name}
            style={{
              height: `${logo.height}px`,
              width: "auto",
            }}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function PreviousWork() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#080808] text-[#F2EFE9]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-40">

        <div className="text-center">

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Tidigare uppdrag
          </p>

          <h2 className="text-3xl font-light md:text-6xl">
            Ett urval
          </h2>

        </div>

        <div className="mt-10 md:mt-14">
          <LogoRow logos={featuredLogos} />
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 ${
            showMore ? "mt-16 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <LogoRow logos={hiddenLogos} />
        </div>

        <div className="mt-14 md:mt-20 flex justify-center">

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm uppercase tracking-[0.35em] text-neutral-500 transition-colors duration-300 hover:text-white"
          >
            {showMore
              ? "− Visa färre uppdrag"
              : "+ Visa fler uppdrag"}
          </button>

        </div>

      </div>
    </section>
  );
}