export default function KnowledgeTransferPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7a8e]">
          Knowledge Transfer
        </p>
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">
          Science with and for society
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4d5665]">
          We collaborate with citizens, institutions, and industry to bring
          research into public dialogue and everyday life.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Public engagement", "Partnerships", "Innovation initiatives"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#0e2a47] p-5 text-white"
              >
                <h2 className="text-xl font-semibold">{item}</h2>
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
