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
          <img
            src="/branding/MT-monogram-medium.png"
            alt="Mike Tedla"
            className="w-24 opacity-90 md:w-36"
          />
        </div>

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-light leading-[0.95] md:text-8xl">
            Varje event har sin egen rytm.
          </h2>

          <div className="mt-14 max-w-xl space-y-10 text-lg leading-9 md:text-xl md:leading-10 text-neutral-300">

            <p>
              Musiken är mer än en spellista – den formar känslan, energin
              och minnena som människor tar med sig hem.
            </p>

            <p>
              Oavsett om det handlar om ett företagsevent, ett fullsatt
              dansgolv eller en elegant cocktailkväll skapar jag
              skräddarsydda musikupplevelser med känsla, precision och en
              förståelse för att inget event är det andra likt.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}