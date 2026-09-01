import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";

import Footer from "./components/Footer";
import MiddleSections from "./components/MiddleSections";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#182235]">
      {/* <Navbar /> */}
      <Hero />
      <main className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <NewsSection />
        <MiddleSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
