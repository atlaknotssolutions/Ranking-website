export default function InternationalPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d7a8e]">
          International
        </p>
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">
          Connected across borders
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4d5665]">
          Through exchange programs, global research collaborations, and a
          diverse student community, Goethe University connects knowledge
          worldwide.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            "Exchange programs",
            "Global partnerships",
            "Diverse campus community",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#ebe7e1] bg-[#faf9f7] p-5 text-[#1a1a1a]"
            >
              <h2 className="text-xl font-semibold">{item}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
