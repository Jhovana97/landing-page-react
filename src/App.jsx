import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <Navbar />
      <HeroSection />
    </div>
  );
}
