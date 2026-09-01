import HeroImage from "../assets/image1.png";

export default function HomeContent() {
  const newsCards = [
    {
      category: "Press Release",
      date: "08/18/2025",
      title:
        "23rd Frankfurt Children's University: From Salty Money, Deep Sleep, Social Networks, and Thirsty Plants",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    },
    {
      category: "Press Release",
      date: "08/17/2025",
      title:
        "Joint Statement: Hessian Higher Education Institutions Criticize Planned Changes to the Hessian Climate Protection Act",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop",
    },
    {
      category: "Press Release",
      date: "08/13/2025",
      title: "When Transparency Changes Creativity",
      image:
        "https://community.nasscom.in/sites/default/files/styles/home_featured_events_860_x_540/public/media/images/loud%20%2818%29_0.png.webp?itok=ghigJ02-",
    },
    {
      category: "Publication",
      date: "08/08/2025",
      title: "How Dangerous Bacteria Survive",
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
    },
  ];

  const events = [
    {
      date: "09/01",
      title:
        "Identifying and Understanding Changes in the Labor Market for Vulnerable Groups",
      time: "10:00 AM",
      location: "Campus Westend",
    },
    {
      date: "09/01",
      title:
        "Christian Faith and Namibian Liberation: Reflections on Salatiel Alonga's Biography",
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
  ];

  return (
    <div className="relative bg-[#f8f5f0]">
      {/* ========== HERO IMAGE ========== */}
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HeroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
        </div>

        <div className="absolute bottom-28 left-6 z-10">
          <span className="rounded bg-white/80 px-2.5 py-1 text-xs text-black/70 backdrop-blur-sm">
            © Katrin Binner
          </span>
        </div>
      </div>

      {/* ========== OVERLAPPING TITLE CARD ========== */}
      <div className="relative z-20 -mt-20 px-3 sm:px-5 lg:px-6">
        <div className="mx-auto max-w-[1200px] rounded-[2rem] bg-[#f8f5f0] px-5 py-10 shadow-sm sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl lg:text-[3.1rem]">
              Goethe University Frankfurt
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#333] sm:text-lg lg:text-xl">
              Excellent and International: Knowledge for Development,
              Sustainability and Equity
            </p>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">
              Latest News
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black sm:px-5"
            >
              Visit Our Newsroom For More →
            </a>
          </div>
        </div>
      </div>

      {/* ========== NEWS SECTION ========== */}
      <section className="bg-[#f8f5f0] pb-10">
        <div className="mx-auto max-w-[1200px] px-3 sm:px-5 lg:px-6">
          {/* Featured News */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-2xl bg-[#e8f0d8] p-5 sm:p-7">
              <div>
                <div className="mb-4 flex items-center justify-between text-xs text-[#555]">
                  <span className="rounded-full bg-white/70 px-3 py-1">
                    Press Release
                  </span>
                  <span>08/21/2025</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug text-[#1a1a1a]">
                  Semen facilitates infection with Monkeypox virus
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#444]">
                  Monkeypox virus used to be transmitted predominantly from
                  animals to humans. In recent years, however, new virus
                  variants have become increasingly capable of spreading from
                  person to person. Researchers at Goethe University and
                  Universitätsmedizin Frankfurt have now found that seminal
                  fluid facilitates the uptake of monkeypox virus into cells.
                </p>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                Discover News →
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop"
                alt="Microscope"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-xs text-white/80">
                  Distribution of infectious monkeypox virus particles (red) on
                  the surface of a cell.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Small News Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {newsCards.map((card, index) => (
              <article
                key={index}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
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
                    <span className="rounded-full bg-[#f0f0f0] px-2.5 py-0.5">
                      {card.category}
                    </span>
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

          {/* Excellence Strategy */}
          <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  Excellence Strategy: RMU-EXCITE
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#555]">
                  “RMU-EXCITE – Excellent. Collaborative. Transformative.”, the
                  Rhine-Main Universities (RMU), of which Goethe University
                  Frankfurt is a part, are applying as a University Excellence
                  Consortium.
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

          {/* Apply Now */}
          <div className="mt-6 rounded-2xl bg-[#f0ebe3] p-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a]">
                  Apply now for a non-restricted degree program!
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#555]">
                  Submit your application by September 30, 2026, and secure your
                  spot for the winter semester 2026/27.
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

      {/* ========== MIDDLE SECTIONS ========== */}
      <section className="bg-[#f8f5f0] pb-20">
        <div className="mx-auto max-w-[1200px] px-3 sm:px-5 lg:px-6">
          {/* Degree Program Finder */}
          <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                  Which course is right for me?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-[#555]">
                  Our degree program finder helps you discover the field of
                  study that best matches your interests with just a few clicks.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:flex xl:flex-wrap xl:items-center">
                <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#333] outline-none focus:border-[#1a3a6e] xl:w-48">
                  <option>I'm interested in...</option>
                  <option>Natural Sciences</option>
                  <option>Humanities</option>
                  <option>Social Sciences</option>
                  <option>Medicine</option>
                  <option>Law & Economics</option>
                </select>

                <select className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#333] outline-none focus:border-[#1a3a6e] xl:w-40">
                  <option>Degree</option>
                  <option>Bachelor</option>
                  <option>Master</option>
                  <option>PhD</option>
                  <option>State Examination</option>
                </select>

                <button className="sm:col-span-2 xl:col-span-1 whitespace-nowrap rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black">
                  Study Programs (199) →
                </button>
              </div>
            </div>
          </div>

          {/* President Quote */}
          <div className="mt-10 flex flex-col items-start gap-8 rounded-2xl bg-white p-5 shadow-sm sm:p-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-sm text-[#666]">
                Enrico Schleiff | President of Goethe University Frankfurt
              </p>
              <blockquote className="mt-4 text-base leading-relaxed text-[#1a1a1a] sm:text-lg">
                “At Goethe University, we conduct research and teaching across a
                wide range of disciplines — from the humanities and social
                sciences to the natural, life, and medical sciences. Our
                disciplinary breadth and strength form the foundation for true
                interdisciplinarity, international collaboration, and open
                dialogue with society.”
              </blockquote>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-[#2d2d2d] transition hover:bg-[#2d2d2d] hover:text-white"
              >
                Learn more about our research profile →
              </a>
            </div>

            <div className="w-full shrink-0 sm:w-auto">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
                alt="Enrico Schleiff"
                className="mx-auto h-40 w-40 rounded-full object-cover object-top shadow-md sm:mx-0"
              />
              <p className="mt-2 text-center text-xs text-[#888] sm:text-left">
                © Jürgen Lecher
              </p>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Research</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
                A driving force for development, sustainability, and equity:
                Since its foundation, Goethe University has provided space for
                innovative approaches, experiments, and ideas. Learn more about
                our research and research profile.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                Learn more →
              </a>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">
                Study and Teaching
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
                A wide range of subjects and innovative teaching and learning
                methods shape courses and teaching at Goethe University. Learn
                more about our diverse course offerings and our approach to
                teaching.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                Learn more →
              </a>
            </div>

            <div className="flex flex-col rounded-2xl bg-[#e8f0d8] p-6">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">
                Knowledge Transfer and Exchange
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#444]">
                We conduct science with and for society. As the first German
                university rooted in civic tradition, we offer a wide variety of
                formats that strengthen dialogue with citizens and bring
                academics into society.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center gap-1 rounded-full bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                Learn more →
              </a>
            </div>
          </div>

          {/* This Is Us */}
          <div className="mt-10 grid gap-0 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
            <div className="flex flex-col justify-center p-5 sm:p-8">
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">
                This Is Us
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555]">
                Students, researchers, and staff share what inspires them,
                drives them, and connects them to Goethe University.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
              >
                Watch the video →
              </a>
            </div>

            <div className="relative min-h-[240px] md:min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=500&fit=crop"
                alt="Sculpture"
                className="h-full w-full object-cover"
              />
              <p className="absolute bottom-3 right-4 text-xs text-white/80">
                © Uwe Dettmar
              </p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-14">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">
                Upcoming Events
              </h2>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
              >
                Visit Our Calendar for More Events →
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 border-b border-gray-100 px-4 py-5 last:border-0 sm:px-6 sm:flex-row sm:items-center sm:justify-between ${
                    index % 2 === 1 ? "bg-[#faf9f6]" : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 shrink-0 text-base font-semibold text-[#1a1a1a] sm:w-14 sm:text-lg">
                      {event.date}
                    </div>
                    <div>
                      {event.tag && (
                        <p className="mb-1 text-[11px] text-[#888] sm:text-xs">
                          {event.tag}
                        </p>
                      )}
                      <h4 className="text-sm font-medium text-[#1a1a1a] leading-snug">
                        {event.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:gap-6 sm:gap-8">
                    <div className="flex items-center gap-1.5 text-xs text-[#666]">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#666]">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
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
    </div>
  );
}
