export default function MiddleSections() {
  return (
    <section className="bg-[#f8f5f0] pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ========== DEGREE PROGRAM FINDER ========== */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                Which course is right for me?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#555]">
                Our degree program finder helps you discover the field of study that best matches your interests with just a few clicks.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#333] outline-none focus:border-[#1a3a6e] sm:w-48">
                <option>I'm interested in...</option>
                <option>Natural Sciences</option>
                <option>Humanities</option>
                <option>Social Sciences</option>
                <option>Medicine</option>
                <option>Law & Economics</option>
              </select>

              <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#333] outline-none focus:border-[#1a3a6e] sm:w-40">
                <option>Degree</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>
                <option>State Examination</option>
              </select>

              <button className="rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black whitespace-nowrap">
                Study Programs (199) →
              </button>
            </div>
          </div>
        </div>

        {/* ========== PRESIDENT QUOTE ========== */}
        <div className="mt-10 flex flex-col items-start gap-8 rounded-2xl bg-white p-8 shadow-sm lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-sm text-[#666]">
              Enrico Schleiff | President of Goethe University Frankfurt
            </p>
            <blockquote className="mt-4 text-lg leading-relaxed text-[#1a1a1a]">
              “At Goethe University, we conduct research and teaching across a wide range of disciplines — from the humanities and social sciences to the natural, life, and medical sciences. Our disciplinary breadth and strength form the foundation for true interdisciplinarity, international collaboration, and open dialogue with society.”
            </blockquote>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-[#2d2d2d] transition hover:bg-[#2d2d2d] hover:text-white"
            >
              Learn more about our research profile →
            </a>
          </div>

          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
              alt="Enrico Schleiff"
              className="h-40 w-40 rounded-full object-cover object-top shadow-md"
            />
            <p className="mt-2 text-center text-xs text-[#888]">© Jürgen Lecher</p>
          </div>
        </div>

        {/* ========== THREE FEATURE CARDS ========== */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Research */}
          <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Research</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
              A driving force for development, sustainability, and equity: Since its foundation, Goethe University has provided space for innovative approaches, experiments, and ideas. Learn more about our research and research profile.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Learn more →
            </a>
          </div>

          {/* Study and Teaching */}
          <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Study and Teaching</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
              A wide range of subjects and innovative teaching and learning methods shape courses and teaching at Goethe University. Learn more about our diverse course offerings and our approach to teaching.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Learn more →
            </a>
          </div>

          {/* Knowledge Transfer */}
          <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
            <h3 className="text-lg font-semibold text-[#1a1a1a]">Knowledge Transfer and Exchange</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
              We conduct science with and for society. As the first German university rooted in civic tradition, we offer a wide variety of formats that strengthen dialogue with citizens and bring academics into society.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* ========== THIS IS US ========== */}
        <div className="mt-10 grid gap-6 overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8">
            <h3 className="text-2xl font-semibold text-[#1a1a1a]">This Is Us</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#555]">
              Students, researchers, and staff share what inspires them, drives them, and connects them to Goethe University.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
            >
              Watch the video →
            </a>
          </div>

          <div className="relative min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=500&fit=crop"
              alt="Sculpture"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-3 right-4 text-xs text-white/80">© Uwe Dettmar</p>
          </div>
        </div>

        {/* ========== UPCOMING EVENTS ========== */}
        <div className="mt-14">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">Upcoming Events</h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
            >
              Visit Our Calendar for More Events →
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            {[
              {
                date: "09/01",
                title: "Identifying and Understanding Changes in the Labor Market for Vulnerable Groups",
                time: "10:00 AM",
                location: "Campus Westend",
              },
              {
                date: "09/01",
                title: "Christian Faith and Namibian Liberation: Reflections on Salatiel Alonga's Biography",
                time: "2:00 PM",
                location: "Campus Westend",
              },
              {
                date: "09/01",
                title: "Understanding Clinical Studies: Insights into Practice",
                time: "04:30 PM",
                location: "Online Event",
                tag: "Understanding Cancer – In Conversation with Experts",
              },
              {
                date: "09/02",
                title: "Frankfurt Cancer Conference 2026",
                time: "12:00 PM",
                location: "Campus Westend",
                tag: "Frankfurt Cancer Conference 2026",
              },
              {
                date: "09/03",
                title: "Frankfurt Cancer Conference 2026",
                time: "09:00 AM",
                location: "Campus Westend",
                tag: "Frankfurt Cancer Conference 2026",
              },
              {
                date: "09/04",
                title: "Frankfurt Cancer Conference 2026",
                time: "09:00 AM",
                location: "Campus Westend",
                tag: "Frankfurt Cancer Conference 2026",
              },
            ].map((event, index) => (
              <div
                key={index}
                className={`flex flex-col gap-3 border-b border-gray-100 px-6 py-5 last:border-0 sm:flex-row sm:items-center sm:justify-between ${
                  index % 2 === 1 ? "bg-[#faf9f6]" : "bg-white"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 shrink-0 text-lg font-semibold text-[#1a1a1a]">
                    {event.date}
                  </div>
                  <div>
                    {event.tag && (
                      <p className="mb-1 text-xs text-[#888]">{event.tag}</p>
                    )}
                    <h4 className="text-sm font-medium text-[#1a1a1a]">{event.title}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-1.5 text-xs text-[#666]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#666]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d2d2d] text-white transition hover:bg-black">
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}