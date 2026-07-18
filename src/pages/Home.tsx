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
    <div className="flex flex-col w-full gap-3 md:gap-5">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-5rem)] bg-[#F4F1EA] rounded-2xl overflow-hidden">
        <Navbar />
        <Hero showAnimation={true} />
      </section>

      <section className="relative w-full py-14 md:py-20 px-6 md:px-14 lg:px-20 bg-[#F4F1EA] rounded-2xl rounded-tl-none overflow-hidden">
        <CutTitle position="top-left">What Does "SvaBharat" Mean?</CutTitle>

        <div className="mt-10 md:mt-14 max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-neutral-500 mb-12 leading-relaxed text-center">
            SvaBharat (स्वभारत) is formed from two Sanskrit words, each carrying centuries of meaning.
          </p>

          {/* Cards with slack rope */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-0 mb-12">
            <div className="w-full md:w-[42%] bg-white rounded-xl p-7 border border-neutral-200 text-center">
              <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-3">First word</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-2 text-neutral-900">Sva</h3>
              <p className="text-base font-medium text-[#C9591C] mb-3">स्व</p>
              <p className="text-neutral-500 text-sm leading-relaxed">Self, Own, One's own — the confidence to think and act from one's own centre.</p>
            </div>

            {/* Rope */}
            <div className="hidden md:flex flex-1 items-center justify-center px-2 -translate-y-3">
              <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0,8 Q50,38 100,8" fill="none" stroke="#2F6F5E" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </div>

            <div className="w-full md:w-[42%] bg-white rounded-xl p-7 border border-neutral-200 text-center">
              <p className="text-xs font-medium text-neutral-400 tracking-widest uppercase mb-3">Second word</p>
              <h3 className="text-2xl md:text-3xl font-medium mb-2 text-neutral-900">Bharat</h3>
              <p className="text-base font-medium text-[#C9591C] mb-3">भारत</p>
              <p className="text-neutral-500 text-sm leading-relaxed">India — the land, the people, the civilisation, and everything that has yet to be imagined.</p>
            </div>
          </div>

          <div className="border-l-2 border-[#C9591C]/40 pl-5 py-1 mx-auto">
            <p className="text-lg md:text-xl font-medium text-neutral-800 leading-snug text-center">
              Together: <span className="text-neutral-900">"Own India"</span> — a self-reliant, self-aware Bharat driven by the aspirations of its own people.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE THINK ── */}
      <section className="relative w-full py-14 md:py-20 px-6 md:px-14 lg:px-20 bg-[#F4F1EA] rounded-2xl rounded-tl-none overflow-hidden">
        <CutTitle position="top-left">From First Principles to New Possibilities</CutTitle>

        <div className="mt-10 md:mt-14 max-w-3xl">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-700 mb-8">
            We begin not with solutions, but with the right questions.
          </p>
          <div className="space-y-4 text-neutral-500 text-base leading-relaxed mb-10">
            <p>Not <span className="italic">"How can the existing system be improved?"</span></p>
            <p className="text-neutral-800 font-medium text-lg">"What are we actually trying to achieve?"</p>
            <p>We strip problems back to what is fundamentally true, and rebuild from there.</p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#10233D] hover:text-[#C9591C] transition-colors group"
          >
            Explore how we think
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED CONVERSATION ── */}
      <section className="relative w-full py-14 md:py-20 px-6 md:px-14 lg:px-20 bg-[#10233D] text-white rounded-2xl overflow-hidden">
        <CutTitle position="top-left" className="!bg-[#10233D] !text-white [&_svg]:!fill-[#10233D]">
          Featured Conversation
        </CutTitle>

        <div className="mt-10 md:mt-14 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Video placeholder */}
          <div className="w-full lg:w-1/2 aspect-video bg-[#16304f] rounded-xl overflow-hidden group cursor-pointer flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center bg-[#16304f] group-hover:bg-[#1c3a5e] transition-colors">
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center pl-1 group-hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-xs font-medium tracking-widest uppercase text-[#7f9db8] mb-4">With Guest Name</p>
            <h3 className="text-xl md:text-2xl font-medium leading-snug mb-3 text-white">
              The Future of Original Thought in Bharat
            </h3>
            <p className="text-[#a9bccf] text-sm leading-relaxed mb-6">
              A short, compelling introduction to the central question explored in the conversation.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 rounded-lg bg-white text-[#10233D] text-sm font-medium hover:bg-neutral-100 transition-colors">
                Watch the conversation
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-[#375777] text-[#a9bccf] text-sm font-medium hover:border-[#5b7fa1] transition-colors">
                All conversations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN THE MOVEMENT ── */}
      <section className="relative w-full py-14 md:py-20 px-6 md:px-14 lg:px-20 bg-[#F4F1EA] rounded-2xl rounded-tl-none overflow-hidden">
        <CutTitle position="top-left">Join the Movement</CutTitle>

        <div className="mt-10 md:mt-14 max-w-4xl">
          <p className="text-xl md:text-3xl font-medium leading-relaxed text-neutral-700 mb-10">
            Bharat cannot be reimagined by a few. There is space here for every person carrying a question that refuses to leave them.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-neutral-500 text-sm mb-10">
            {["A student", "A researcher", "A teacher", "An entrepreneur", "A public servant", "A technologist", "A community practitioner", "An artist", "A thinker"].map(p => (
              <p key={p}>{p}.</p>
            ))}
          </div>

          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10233D] text-white text-sm font-medium hover:bg-[#C9591C] transition-colors"
          >
            Contribute an Idea →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS (VOICES OF THE MOVEMENT) ── */}
      {testimonials.length > 0 && (
        <section className="relative w-full py-14 md:py-20 px-6 md:px-14 lg:px-20 bg-[#F4F1EA] rounded-2xl rounded-tl-none overflow-hidden">
          <CutTitle position="top-left">Voices of the Movement</CutTitle>

          <div className="mt-10 md:mt-14 max-w-6xl mx-auto">
            <p className="text-base md:text-lg text-neutral-500 mb-10 text-center">
              What researchers, practitioners, and builders say about the SvaBharat movement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-xl p-7 border border-neutral-200 hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 bg-[#2F6F5E]/10 text-[#2F6F5E] rounded-lg flex items-center justify-center mb-5">
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-neutral-600 text-base leading-relaxed mb-6 italic">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="border-t border-neutral-100 pt-5">
                    <h4 className="font-semibold text-neutral-900 text-sm">{test.name}</h4>
                    <p className="text-xs font-medium text-[#C9591C] mt-1">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ── */}
      <section className="relative w-full py-12 md:py-16 px-6 md:px-14 lg:px-20 bg-[#F4F1EA] rounded-2xl overflow-hidden">
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-neutral-900">Stay Close to Ideas That Matter</h2>
          <p className="text-neutral-500 text-sm mb-6">A thoughtful selection of ideas, questions, and reflections from the SvaBharat movement.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#10233D] text-sm"
            />
            <button className="px-6 py-2.5 rounded-lg bg-[#10233D] text-white text-sm font-medium hover:bg-[#C9591C] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}