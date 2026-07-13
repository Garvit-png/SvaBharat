import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

export function About() {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">About SvaBharat</h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl">
          Understanding the roots, philosophy, and people behind the movement.
        </p>
      </section>

      {/* Our Philosophy Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">The Idea of “Sva”</CutTitle>
        
        <div className="mt-16 max-w-4xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 space-y-6 text-lg text-neutral-800 leading-relaxed">
            <p className="font-semibold text-xl text-black">
              Before we build the future, we must ask: From where do we think?
            </p>
            <p>The word “Sva” evokes the self. But the self is not merely individual. It can also speak to identity, consciousness, rootedness, agency, and the ability to see the world from one’s own centre.</p>
            <p>For SvaBharat, “Sva” represents the confidence to think independently. To know where we stand. To understand the realities around us. To examine the assumptions we have inherited.</p>
            <p>To engage with knowledge from everywhere without surrendering the ability to judge, adapt, question, and create.</p>
            
            <div className="bg-orange-50/50 p-6 rounded-2xl border-l-4 border-orange-500 my-8">
              <ul className="space-y-2 font-medium">
                <li>Sva is not isolation.</li>
                <li>Sva is not rejection.</li>
                <li>Sva is not nostalgia.</li>
              </ul>
            </div>
            
            <p>It is the capacity to remain rooted while being open. To learn while retaining discernment. To remember while continuing to create. To engage globally while thinking independently.</p>
            
            <p className="text-2xl font-medium text-orange-600 pt-6">
              SvaBharat asks: What becomes possible when Bharat thinks from its own centre?
            </p>
          </div>
          
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center">
               <img src="/logo.png" alt="SvaBharat Logo" className="w-32 h-32 object-contain mb-6 drop-shadow-sm" />
               <h4 className="font-semibold text-xl mb-4">The SvaBharat Logo</h4>
               <p className="text-neutral-600 text-sm mb-6">A visual representation of rooted openness and independent thought.</p>
               <button className="text-orange-600 font-medium hover:text-orange-700 transition-colors">Discover the Meaning →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F4ebd8] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">First-Principles Thinking</CutTitle>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Begin at the Beginning.</h3>
          
          <div className="space-y-6 text-lg text-neutral-800 leading-relaxed">
            <p>
              At SvaBharat, we believe meaningful change begins by questioning what we take for granted.
            </p>
            <p>
              Too often, we inherit problems along with the assumptions, frameworks, and boundaries used to solve them. First-principles thinking asks us to go deeper—to strip a problem down to what is fundamentally true and build from there.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div className="bg-white/60 p-8 rounded-3xl">
                <p className="text-neutral-500 mb-2">Instead of asking,</p>
                <p className="text-xl font-medium line-through decoration-orange-300 decoration-2">“How is this usually done?”</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100">
                <p className="text-neutral-500 mb-2">we ask,</p>
                <p className="text-xl font-bold text-orange-600">“What are we truly trying to achieve?”</p>
              </div>
            </div>
            
            <p>
              Instead of improving within inherited constraints, we question whether those constraints should exist at all.
            </p>
            <p>
              This is how we approach the questions that matter to Bharat: by examining assumptions, returning to fundamentals, and reimagining possibilities from the ground up.
            </p>
            
            <div className="flex items-center gap-4 text-xl font-bold text-black pt-8">
              <span>Question the given.</span>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>Return to fundamentals.</span>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>Build anew.</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Movement Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">The Movement</CutTitle>
        <div className="mt-16 max-w-4xl mx-auto min-h-[20vh] flex items-center justify-center">
           <p className="text-2xl text-neutral-500 italic text-center">To be expanded...</p>
        </div>
      </section>

      {/* Our Contributors Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F4ebd8] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">The Minds Shaping the Movement</CutTitle>
        
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="max-w-3xl mb-16 space-y-6 text-lg text-neutral-800">
            <p>
              SvaBharat is shaped by people who bring different forms of knowledge, experience, and imagination. We value expertise. But we do not believe insight is limited to credentials.
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-orange-300">
              <li>A practitioner may understand what a framework misses.</li>
              <li>A community may know what a distant institution cannot see.</li>
              <li>A student may ask the question an expert has stopped asking.</li>
              <li>An entrepreneur may recognise a possibility others consider impossible.</li>
              <li>A researcher may reveal patterns hidden beneath individual experience.</li>
            </ul>
            <p className="font-medium text-xl text-black pt-4">
              SvaBharat creates space for these perspectives to meet.
            </p>
          </div>
          
          {/* Contributor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-neutral-200 rounded-full mb-6"></div>
                <h4 className="text-xl font-bold mb-1">Contributor Name</h4>
                <p className="text-orange-600 font-medium text-sm mb-4">Position / Field / Affiliation</p>
                <p className="text-neutral-600 mb-8 line-clamp-3">
                  Biography highlighting the contributor’s work, perspective, and areas of interest. They focus on bridging the gap between theory and ground reality.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <button className="text-sm font-semibold hover:text-orange-600 transition-colors">View Contributions</button>
                  <a href="#" className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
