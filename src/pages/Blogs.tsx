import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

export function Blogs() {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">Thinking in Public</h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl">
          Essays, reflections, questions, field observations, and emerging perspectives.
        </p>
      </section>

      {/* Blogs Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden min-h-[60vh]">
        <CutTitle position="top-left">All Blogs</CutTitle>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-xl font-medium text-neutral-800 mb-12">
            SvaBharat is a space for ideas before certainty.
          </p>
          
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start group hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-full md:w-1/3 aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-50 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 font-medium mb-4">
                    <span>By Author Name</span>
                    <span>·</span>
                    <span>Oct 12, 2026</span>
                    <span>·</span>
                    <span>5 min read</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                    The Architecture of Indian Thought
                  </h3>
                  
                  <p className="text-neutral-600 text-lg mb-8 line-clamp-2">
                    A compelling introduction to the central question or argument exploring why we must look back to see forward.
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 font-semibold text-orange-600 group-hover:gap-3 transition-all">
                      Read More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
