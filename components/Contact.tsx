export default function Contact() {
  return (
    <section className="bg-[#080808] text-[#F2EFE9]">
      <div className="mx-auto max-w-5xl px-6 py-32 text-center md:py-48">

        <h2 className="text-xl font-light uppercase tracking-[0.45em] text-neutral-500">
          Berätta om ditt event
        </h2>

        <a
          href="mailto:booking@miketedla.com"
          className="mt-10 inline-block border-b border-transparent text-3xl font-light transition-all duration-300 hover:border-[#F2EFE9] hover:text-white md:text-5xl"
        >
          booking@miketedla.com
        </a>

        <p className="mt-32 text-xs uppercase tracking-[0.35em] text-neutral-800">
          © 2026 Mike Tedla
        </p>

      </div>
    </section>
  );
}