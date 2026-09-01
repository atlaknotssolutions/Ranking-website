export default function NewsSection() {
  const newsCards = [
    {
      category: "Press Release",
      date: "08/18/2025",
      title: "23rd Frankfurt Children's University: From Salty Money, Deep Sleep, Social Networks, and Thirsty Plants",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    },
    {
      category: "Press Release",
      date: "08/17/2025",
      title: "Joint Statement: Hessian Higher Education Institutions Criticize Planned Changes to the Hessian Climate Protection Act",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop",
    },
    {
      category: "Press Release",
      date: "08/13/2025",
      title: "When Transparency Changes Creativity",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2fe5b6d5f?w=600&h=400&fit=crop",
    },
    {
      category: "Publication",
      date: "08/08/2025",
      title: "How Dangerous Bacteria Survive",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="bg-[#f8f5f0] pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ========== HEADER ========== */}
        <div className="pt-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Goethe University Frankfurt
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[#444] sm:text-xl">
            Excellent and International: Knowledge for Development, Sustainability and Equity
          </p>
        </div>

        {/* ========== LATEST NEWS HEADER ========== */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-semibold text-[#1a1a1a]">Latest News</h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
          >
            Visit Our Newsroom For More →
          </a>
        </div>

        {/* ========== FEATURED NEWS (Big Card) ========== */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Left big card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#e8f0d8] p-7">
            <div>
              <div className="mb-4 flex items-center justify-between text-xs text-[#555]">
                <span className="rounded-full bg-white/70 px-3 py-1">Press Release</span>
                <span>08/21/2025</span>
              </div>
              <h3 className="text-xl font-semibold leading-snug text-[#1a1a1a]">
                Semen facilitates infection with Monkeypox virus
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#444]">
                Monkeypox virus used to be transmitted predominantly from animals to humans. In
                recent years, however, new virus variants have become increasingly capable of
                spreading from person to person. Researchers at Goethe University and
                Universitätsmedizin Frankfurt have now found that seminal fluid facilitates the
                uptake of monkeypox virus into cells.
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Discover News →
            </a>
          </div>

          {/* Right image card */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop"
              alt="Microscope"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-xs text-white/80">
                Distribution of infectious monkeypox virus particles (red) on the surface of a cell.
              </p>
            </div>
          </div>
        </div>

        {/* ========== 4 SMALL NEWS CARDS ========== */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newsCards.map((card, index) => (
            <article
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center justify-between text-[11px] text-[#666]">
                  <span className="rounded-full bg-[#f0f0f0] px-2.5 py-0.5">{card.category}</span>
                  <span>{card.date}</span>
                </div>
                <h3 className="flex-1 text-sm font-semibold leading-snug text-[#1a1a1a]">
                  {card.title}
                </h3>
                <div className="mt-4 flex justify-end">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d2d2d] text-white transition hover:bg-black">
                    →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========== EXCELLENCE STRATEGY ========== */}
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                Excellence Strategy: RMU-EXCITE
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#555]">
                “RMU-EXCITE – Excellent. Collaborative. Transformative.”, the Rhine-Main
                Universities (RMU), of which Goethe University Frankfurt is a part, are applying as
                a University Excellence Consortium.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-[#2d2d2d] transition hover:bg-[#2d2d2d] hover:text-white"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* ========== APPLY NOW SECTION ========== */}
        <div className="mt-6 rounded-2xl bg-[#f0ebe3] p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                Apply now for a non-restricted degree program!
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#555]">
                Submit your application by September 30, 2026, and secure your spot for the winter
                semester 2026/27.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
              >
                Bachelor →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-[#2d2d2d] transition hover:bg-[#2d2d2d] hover:text-white"
              >
                Degree in Education →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}