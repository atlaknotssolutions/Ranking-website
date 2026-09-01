import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-white p-10 shadow-sm sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7a8e]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1a1a1a]">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-[#4d5665]">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#0e2a47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#15375f]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
