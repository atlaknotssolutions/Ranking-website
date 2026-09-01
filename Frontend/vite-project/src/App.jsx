import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./pages/Home";
import UniversityDashboard from "./components/UniversityDashboard";
import ResearchPage from "./pages/Research";
import StudyTeachingPage from "./pages/StudyTeaching";
import KnowledgeTransferPage from "./pages/KnowledgeTransfer";
import InternationalPage from "./pages/International";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#182235]">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/university-dashboard" element={<UniversityDashboard />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/study-and-teaching" element={<StudyTeachingPage />} />
        <Route path="/knowledge-transfer" element={<KnowledgeTransferPage />} />
        <Route path="/international" element={<InternationalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
