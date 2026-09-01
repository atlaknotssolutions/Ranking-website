
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import HomeContent from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#182235]">
      <Navbar />
    
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;
