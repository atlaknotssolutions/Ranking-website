export default function Footer() {
  return (
    <footer className="bg-[#f8f5f0]">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* ========== LEFT SIDE (Logo) ========== */}
        <div className="flex items-center justify-center bg-[#f8f5f0] px-8 py-12 lg:w-[32%] lg:justify-start lg:px-12">
          <div className="flex items-center gap-4">
            {/* Goethe Head Logo */}
            <div className="flex h-16 w-16 items-center justify-center rounded border border-black/10 bg-white">
              <svg viewBox="0 0 40 48" className="h-12 w-auto text-black">
                <path
                  fill="currentColor"
                  d="M20 2c-6 0-11 5-11 12 0 4 2 7 4 9-3 2-6 6-6 12v3h26v-3c0-6-3-10-6-12 2-2 4-5 4-9 0-7-5-12-11-12zm0 4c4 0 7 3 7 8s-3 8-7 8-7-3-7-8 3-8 7-8z"
                />
              </svg>
            </div>

            <div className="leading-tight">
              <div className="text-2xl font-semibold tracking-tight text-[#1a1a1a]">
                Goethe
              </div>
              <div className="text-2xl font-semibold tracking-tight text-[#1a1a1a]">
                Universität
              </div>
            </div>
          </div>
        </div>

        {/* ========== RIGHT SIDE (Links) ========== */}
        <div className="flex-1 bg-[#2d2d2d] px-8 py-12 text-white lg:px-14">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Column 1 */}
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:underline">
                Imprint
              </a>
              <a href="#" className="block text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm hover:underline">
                Accessibility
              </a>
              <a href="#" className="block text-sm hover:underline">
                Netiquette
              </a>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:underline">
                Newsroom
              </a>
              <a href="#" className="block text-sm hover:underline">
                Press & Communication
              </a>
              <a href="#" className="block text-sm hover:underline">
                Contact & Directions
              </a>
              <a href="#" className="block text-sm hover:underline">
                Cookie Settings
              </a>
            </div>

            {/* Column 3 + Social */}
            <div className="space-y-3">
              <a href="#" className="block text-sm hover:underline">
                Conflicts and Emergencies
              </a>
              <a href="#" className="block text-sm hover:underline">
                Science Garden
              </a>
              <a href="#" className="block text-sm hover:underline">
                University Sports
              </a>
              <a href="#" className="block text-sm hover:underline">
                Rhine-Main Universities (RMU)
              </a>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4">
                {/* Instagram */}
                <a href="#" className="text-white/80 transition hover:text-white" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="text-white/80 transition hover:text-white" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Bluesky */}
                <a href="#" className="text-white/80 transition hover:text-white" aria-label="Bluesky">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.507 1.43.5 2.5c-.6.65-.9 1.8-.5 2.9.8 2.2 3.3 6.5 6.5 9.5 1.8 1.7 3.5 2.8 5.5 2.8s3.7-1.1 5.5-2.8c3.2-3 5.7-7.3 6.5-9.5.4-1.1.1-2.25-.5-2.9-1.007-1.07-2.066-1.556-4.702.305C16.046 4.747 13.087 8.686 12 10.8z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="text-white/80 transition hover:text-white" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="text-white/80 transition hover:text-white" aria-label="YouTube">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm text-white/60">
              © 2026 Goethe University Frankfurt/ Main
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}