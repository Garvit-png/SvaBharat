import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-screen p-4 md:p-8 lg:p-10 bg-white box-border">
      <div className="relative w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <Hero showAnimation={true} />
      </div>
    </main>
  );
}

export default App;
