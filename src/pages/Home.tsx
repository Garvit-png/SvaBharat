import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <Navbar />
        <Hero showAnimation={true} />
      </section>

      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">What Does "SvaBharat" Mean?</CutTitle>

        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-neutral-500 font-light mb-16 leading-relaxed text-center">
            SvaBharat (स्वभारत) is formed from two Sanskrit words, each carrying centuries of meaning.
          </p>

          {/* Cards with slack rope */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-0 mb-16">
            <div className="w-full md:w-[42%] bg-white rounded-2xl p-8 border border-neutral-100 text-center">
              <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-4">First word</p>
              <h3 className="text-3xl md:text-4xl font-light mb-2">Sva</h3>
              <p className="text-lg font-medium text-orange-600 mb-3">स्व</p>
              <p className="text-neutral-500 font-light leading-relaxed">Self, Own, One's own — the confidence to think and act from one's own centre.</p>
            </div>

            {/* Rope */}
            <div className="hidden md:flex flex-1 items-center justify-center px-2 -translate-y-3">
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,8 Q50,38 100,8" fill="none" stroke="#e5c99a" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="w-full md:w-[42%] bg-white rounded-2xl p-8 border border-neutral-100 text-center">
              <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-4">Second word</p>
              <h3 className="text-3xl md:text-4xl font-light mb-2">Bharat</h3>
              <p className="text-lg font-medium text-orange-600 mb-3">भारत</p>
              <p className="text-neutral-500 font-light leading-relaxed">India — the land, the people, the civilisation, and everything that has yet to be imagined.</p>
            </div>
          </div>

          <div className="border-l-2 border-orange-300 pl-6 py-2 mx-auto">
            <p className="text-xl md:text-2xl font-light text-neutral-800 leading-snug text-center">
              Together: <span className="font-medium text-neutral-900">"Own India"</span> — a self-reliant, self-aware Bharat driven by the aspirations of its own people.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">From First Principles to New Possibilities</CutTitle>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-700 mb-10">
            We begin not with solutions, but with the right questions.
          </p>
          <div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed mb-12">
            <p>Not <span className="italic">"How can the existing system be improved?"</span></p>
            <p className="text-neutral-800 font-normal text-xl">"What are we actually trying to achieve?"</p>
            <p>We strip problems back to what is fundamentally true, and rebuild from there.</p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors group"
          >
            Explore how we think
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED CONVERSATION ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-neutral-900 text-white rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left" className="!bg-neutral-900 !text-white [&_svg]:!fill-neutral-900">
          Featured Conversation
        </CutTitle>

        <div className="mt-16 md:mt-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Video placeholder */}
          <div className="w-full lg:w-1/2 aspect-video bg-neutral-800 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center bg-neutral-800 group-hover:bg-neutral-700 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center pl-1 group-hover:bg-white/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-5">With Guest Name</p>
            <h3 className="text-2xl md:text-3xl font-light leading-snug mb-4 text-white">
              The Future of Original Thought in Bharat
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              A short, compelling introduction to the central question explored in the conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors">
                Watch the conversation
              </button>
              <button className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 transition-colors">
                All conversations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN THE MOVEMENT ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <CutTitle position="top-left">Join the Movement</CutTitle>

        <div className="mt-16 md:mt-20 max-w-4xl">
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-700 mb-12">
            Bharat cannot be reimagined by a few. There is space here for every person carrying a question that refuses to leave them.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-neutral-500 font-light mb-12">
            {["A student", "A researcher", "A teacher", "An entrepreneur", "A public servant", "A technologist", "A community practitioner", "An artist", "A thinker"].map(p => (
              <p key={p}>{p}.</p>
            ))}
          </div>

          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            Contribute an Idea →
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="relative w-full py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-[#Fdf6e3] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-light mb-3">Stay Close to Ideas That Matter</h2>
          <p className="text-neutral-500 font-light mb-8">A thoughtful selection of ideas, questions, and reflections from the SvaBharat movement.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-1 focus:ring-neutral-400 text-sm font-light"
            />
            <button className="px-6 py-3 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
