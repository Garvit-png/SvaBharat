import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <Hero showAnimation={true} />
      </section>

      {/* Central Idea Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">What Does "SvaBharat" Mean?</CutTitle>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-neutral-800 mb-10 leading-relaxed">
            SvaBharat (स्वभारत) combines two Sanskrit words:
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12 w-full">
            
            <div className="w-full md:w-[40%] bg-white/60 p-8 rounded-3xl shadow-sm border border-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">Sva (स्व)</h3>
              <p className="text-lg text-neutral-700">Self, Own, One's own</p>
            </div>
            
            {/* Slack Rope SVG between the containers */}
            <div className="hidden md:flex flex-1 h-16 items-center justify-center -translate-y-2">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 100 50" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,10 Q50,50 100,10" 
                  fill="none" 
                  stroke="#fdba74" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="opacity-80"
                />
              </svg>
            </div>
            
            <div className="w-full md:w-[40%] bg-white/60 p-8 rounded-3xl shadow-sm border border-white/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">Bharat (भारत)</h3>
              <p className="text-lg text-neutral-700">India</p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-8 md:p-10 rounded-3xl border border-orange-100/50">
            <h4 className="text-xl font-semibold mb-4 text-orange-800">Full Meaning:</h4>
            <p className="text-2xl md:text-3xl font-medium leading-tight text-neutral-900">
              "Self India" or "Own India" — representing a self-reliant, self-aware India driven by its own people's aspirations
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F4ebd8] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">Why SvaBharat?</CutTitle>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto min-h-[30vh] flex items-center justify-center">
           {/* Placeholder for future detailed content */}
           <p className="text-2xl text-neutral-500 italic text-center">To be expanded...</p>
        </div>
      </section>

      {/* How Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">From First Principles to New Possibilities</CutTitle>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-neutral-800">
          <p className="font-medium text-2xl text-black">
            SvaBharat is a space where fundamental questions become living ideas.
          </p>
          <p>Our approach is simple in spirit and rigorous in practice.</p>
          <div className="pl-6 border-l-4 border-orange-400 space-y-4 py-2 my-8">
            <p>We begin with a question.</p>
            <p>A question that matters to the future of Bharat.</p>
          </div>
          <p>Not merely, <span className="italic">“How can the existing system be improved?”</span></p>
          <p>But often:</p>
          <p className="font-medium text-2xl text-orange-600">“What are we actually trying to achieve?”</p>
          <p>We uncover assumptions.</p>
          
          <div className="pt-8">
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold hover:bg-orange-600 transition-all duration-300 text-base shadow-lg hover:-translate-y-0.5">
              Explore How We Think
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Conversation Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#1a1a1a] text-white rounded-3xl md:rounded-[3rem] overflow-hidden">
        {/* Dark theme requires a different CutTitle or we stick to white for high contrast */}
        <CutTitle position="top-left" className="!bg-[#1a1a1a] !text-white [&_svg]:!fill-[#1a1a1a]">Conversations That Move Ideas Forward</CutTitle>
        
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 aspect-video bg-neutral-800 rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl">
               {/* Video Thumbnail Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center pl-2 shadow-lg transform group-hover:scale-110 transition-transform">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                  </div>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-orange-400 font-medium text-sm tracking-wider uppercase mb-2">Featured Conversation</div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">The Future of Original Thought in Bharat</h3>
              <p className="text-xl text-neutral-400">A short, compelling introduction to the central question explored in the conversation.</p>
              
              <div className="pt-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-neutral-700 rounded-full"></div>
                <div>
                  <p className="font-semibold text-lg">With Guest Name</p>
                  <p className="text-neutral-400">Position / Field / Organisation</p>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-300">
                  Watch the Conversation
                </button>
                <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
                  Explore All Conversations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">Bharat Cannot Be Reimagined by a Few.</CutTitle>
        
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-neutral-800 mb-10 leading-relaxed">
            SvaBharat is not a closed institution. It is a movement. A movement for people who believe that the future deserves deeper questions, people willing to examine assumptions, people willing to bring evidence, people willing to disagree thoughtfully, and people willing to imagine beyond what already exists.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-lg text-neutral-600 font-medium mb-12">
            <p>You may be a student.</p>
            <p>A researcher.</p>
            <p>A teacher.</p>
            <p>An entrepreneur.</p>
            <p>A public servant.</p>
            <p>A technologist.</p>
            <p>A community practitioner.</p>
            <p>An artist.</p>
            <p>A thinker.</p>
          </div>
          
          <p className="text-2xl md:text-3xl font-medium text-black mb-12 italic">
            Or simply a citizen carrying a question that refuses to leave you.
          </p>
          
          <div className="bg-white/60 rounded-3xl p-8 md:p-12 border border-white/80 shadow-sm backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-orange-600 mb-6">There is space for you here.</h4>
            <ul className="space-y-4 text-lg font-medium text-neutral-800 mb-10">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Bring a question.</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Contribute an idea.</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Challenge an assumption.</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Join a conversation.</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Help build what comes next.</li>
            </ul>
            
            <Link to="/ideas" className="inline-flex px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              Contribute an Idea
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
