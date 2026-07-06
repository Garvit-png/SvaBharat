import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero showAnimation={true} />
      
      {/* Floating Join Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <button className="px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-orange-500 text-white text-sm md:text-base font-semibold hover:bg-orange-600 transition-all duration-300 shadow-[0_8px_24px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_32px_rgba(249,115,22,0.5)] transform hover:scale-105">
          Join the Movement
        </button>
      </div>
    </main>
  );
}

export default App;
