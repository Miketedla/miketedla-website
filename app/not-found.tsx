export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-[#F2EFE9]">
      <div className="text-center">
        <h1 className="font-serif text-7xl font-light">404</h1>

        <p className="mt-6 text-neutral-400">
          Sidan kunde inte hittas.
        </p>

        <a
          href="/"
          className="mt-10 inline-block border border-accent px-8 py-4 text-xs uppercase tracking-[0.3em] transition hover:bg-accent hover:text-black"
        >
          Till startsidan
        </a>
      </div>
    </main>
  );
}