import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero showAnimation={true} />
      
      {/* Floating button removed */}
    </main>
  );
}

export default App;
