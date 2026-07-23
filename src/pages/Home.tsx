import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";
import { getTestimonials, type Testimonial } from "../utils/storage";
import { Quote } from "lucide-react";



export function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(getTestimonials());
    const handleUpdate = () => {
      setTestimonials(getTestimonials());
    };
    window.addEventListener("svabharat_testimonials_updated", handleUpdate);
    return () => {
      window.removeEventListener("svabharat_testimonials_updated", handleUpdate);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <Navbar />
        <Hero showAnimation={true} />
      </section>

      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">What Does "SvaBharat" Mean?</CutTitle>

        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-neutral-600 font-bold mb-16 leading-relaxed text-center font-serif">
            SvaBharat (स्वभारत) is formed from two Sanskrit words, each carrying centuries of meaning.
          </p>

          {/* Cards with slack rope */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-0 mb-16">
            <div className="w-full md:w-[42%] bg-white rounded-2xl p-8 border-2 border-white text-center shadow-md">
              <p className="text-xs font-bold text-neutral-400 tracking-widest uppercase mb-4">First word</p>
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold mb-2 text-charcoal">Sva</h3>
              <p className="text-xl font-bold text-secondary mb-3">स्व</p>
              <p className="text-neutral-550 font-semibold leading-relaxed text-sm">Self, Own, One's own — the confidence to think and act from one's own centre.</p>
            </div>

            {/* Rope */}
            <div className="hidden md:flex flex-1 items-center justify-center px-2 -translate-y-3">
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,8 Q50,38 100,8" fill="none" stroke="#D89A5A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="w-full md:w-[42%] bg-white rounded-2xl p-8 border-2 border-white text-center shadow-md">
              <p className="text-xs font-bold text-neutral-400 tracking-widest uppercase mb-4">Second word</p>
              <h3 className="text-3xl md:text-4xl font-serif font-extrabold mb-2 text-charcoal">Bharat</h3>
              <p className="text-xl font-bold text-secondary mb-3">भारत</p>
              <p className="text-neutral-555 font-semibold leading-relaxed text-sm">India — the land, the people, the civilisation, and everything that has yet to be imagined.</p>
            </div>
          </div>

          <div className="border-l-4 border-secondary pl-6 py-2 mx-auto max-w-2xl bg-white/40 rounded-r-xl">
            <p className="text-lg md:text-xl font-bold text-charcoal leading-snug text-center font-serif">
              Together: <span className="font-extrabold text-primary">"Own India"</span> — a self-reliant, self-aware Bharat driven by the aspirations of its own people.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">From First Principles to New Possibilities</CutTitle>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="text-2xl md:text-3xl font-serif font-extrabold leading-relaxed text-charcoal mb-10">
            We begin not with solutions, but with the right questions.
          </p>
          <div className="space-y-6 text-neutral-600 font-semibold text-lg leading-relaxed mb-12">
            <p>Not <span className="italic font-serif text-neutral-500">"How can the existing system be improved?"</span></p>
            <p className="text-primary font-bold text-xl md:text-2xl font-serif">"What are we actually trying to achieve?"</p>
            <p>We strip problems back to what is fundamentally true, and rebuild from there.</p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group uppercase tracking-wider"
          >
            Explore how we think
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED CONVERSATION ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#857d6a] text-white rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">
          Featured Conversation
        </CutTitle>

        <div className="mt-16 md:mt-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Video placeholder */}
          <div className="w-full lg:w-1/2 aspect-video bg-[#1E1E1E]/40 rounded-2xl overflow-hidden group flex-shrink-0 border-2 border-white/30">
            <div className="w-full h-full flex items-center justify-center bg-[#1E1E1E]/20 group-hover:bg-[#1E1E1E]/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 flex items-center justify-center pl-1 group-hover:bg-white/35 transition-colors shadow-lg cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-5">With Guest Name</p>
            <h3 className="text-2xl md:text-3xl font-serif font-extrabold leading-snug mb-4 text-white">
              The Future of Original Thought in Bharat
            </h3>
            <p className="text-white/80 font-semibold text-sm leading-relaxed mb-8">
              A short, compelling introduction to the central question explored in the conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl bg-white text-charcoal text-xs font-bold hover:bg-[#FAF5EB] transition-all cursor-pointer active:scale-95 shadow-sm">
                Watch the conversation
              </button>
              <button className="px-6 py-3 rounded-xl border-2 border-white/30 text-white text-xs font-bold hover:bg-white/10 hover:border-white/50 transition-all cursor-pointer active:scale-95">
                All conversations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN THE MOVEMENT ── */}
      <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Join the Movement</CutTitle>

        <div className="mt-16 md:mt-20 max-w-4xl">
          <p className="text-2xl md:text-4xl font-serif font-extrabold leading-relaxed text-charcoal mb-12">
            Bharat cannot be reimagined by a few. There is space here for every person carrying a question that refuses to leave them.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-neutral-600 font-bold mb-12 text-sm md:text-base">
            {["A student", "A researcher", "A teacher", "An entrepreneur", "A public servant", "A technologist", "A community practitioner", "An artist", "A thinker"].map(p => (
              <p key={p} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                {p}.
              </p>
            ))}
          </div>

          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-secondary transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            Contribute an Idea
            <span className="ml-1">→</span>
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS (VOICES OF THE MOVEMENT) ── */}
      {testimonials.length > 0 && (
        <section className="relative w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
          <CutTitle position="top-left">Voices of the Movement</CutTitle>

          <div className="mt-16 md:mt-20 max-w-6xl mx-auto">
            <p className="text-lg md:text-xl text-neutral-600 font-bold mb-12 text-center font-serif">
              What researchers, practitioners, and builders say about the SvaBharat movement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((test) => (
                <div 
                  key={test.id} 
                  className="bg-white rounded-2xl p-8 border-2 border-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 bg-secondary-light text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <p className="text-charcoal/90 text-sm font-semibold leading-relaxed mb-8 italic font-serif">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6">
                    <h4 className="font-bold text-neutral-900 font-serif">{test.name}</h4>
                    <p className="text-xs font-bold text-primary mt-1">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ── */}
      <section className="relative w-full py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold mb-3 text-charcoal">Stay Close to Ideas That Matter</h2>
          <p className="text-neutral-600 font-semibold mb-8 text-sm md:text-base">A thoughtful selection of ideas, questions, and reflections from the SvaBharat movement.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl border-2 border-white bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-semibold transition-all"
            />
            <button className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-secondary transition-colors whitespace-nowrap cursor-pointer active:scale-95 shadow-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
