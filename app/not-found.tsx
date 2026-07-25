export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] text-[#F2EFE9]">
      <div className="text-center">
        <h1 className="text-6xl font-light">404</h1>

        <p className="mt-6 text-neutral-400">
          Sidan kunde inte hittas.
        </p>

        <a
          href="/"
          className="mt-10 inline-block border border-[#C8A86A] px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-[#C8A86A] hover:text-black"
        >
          Till startsidan
        </a>
      </div>
    </main>
  );
}