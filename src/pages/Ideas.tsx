import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

export function Ideas() {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">Ideas in Motion</h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl">
          Explorations, propositions, and fundamental questions we are currently working on.
        </p>
      </section>

      {/* All Ideas Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">All Ideas We Are Working On</CutTitle>
        
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Reimagining the University",
            "The Purpose of Entrance Exams",
            "Knowledge Systems of Bharat"
          ].map((title, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col h-full group hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-orange-500 font-mono text-sm mb-4">Idea {String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors">{title}</h3>
              <p className="text-neutral-600 mb-8 flex-grow">
                A bold proposition or fundamental question exploring the structural assumptions behind {title.toLowerCase()}.
              </p>
              
              <div className="space-y-3 mt-auto border-t border-neutral-100 pt-6">
                <a href="#" className="flex items-center justify-between text-sm font-medium hover:text-orange-600">
                  <span>Notion Note</span>
                  <span>↗</span>
                </a>
                <a href="#" className="flex items-center justify-between text-sm font-medium hover:text-orange-600">
                  <span>Idea Brief</span>
                  <span>↗</span>
                </a>
                <a href="#" className="flex items-center justify-between text-sm font-medium hover:text-orange-600">
                  <span>Conversations</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
