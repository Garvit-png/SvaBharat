import { motion, useScroll, useTransform } from "framer-motion";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";
import { useRef } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const principles = [
  "Question inherited assumptions before accepting inherited answers.",
  "Return to what is fundamentally true on the ground.",
  "Build responses that are rooted, open, and useful.",
];

const contributors = [
  {
    name: "Researchers",
    role: "Patterns & Evidence",
    text: "They reveal long arcs, hidden structures, and the context needed for better public imagination.",
  },
  {
    name: "Practitioners",
    role: "Ground Reality",
    text: "They carry the lived knowledge of classrooms, farms, workshops, communities, and institutions.",
  },
  {
    name: "Builders",
    role: "New Possibilities",
    text: "They translate questions into prototypes, ventures, systems, and tools that can be tested.",
  },
];

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex w-full flex-col gap-6 md:gap-8 lg:gap-12 pb-12" ref={containerRef}>
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-cream px-6 pb-24 pt-32 md:px-12 lg:px-24 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <Navbar />
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-5xl mx-auto relative z-10 pt-12 md:pt-20 text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            About SvaBharat
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-6xl font-serif font-extrabold tracking-tight md:text-8xl text-charcoal leading-[1.1]"
          >
            Thinking from our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">own centre.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-xl font-serif font-semibold leading-relaxed text-neutral-500 md:text-2xl"
          >
            SvaBharat is a movement for original thought, rooted inquiry, and public imagination shaped by Bharat's own realities.
          </motion.p>
        </motion.div>
      </section>

      {/* ── OUR PHILOSOPHY (BENTO GRID STYLE) ── */}
      <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#FAFAFA] px-6 py-24 md:px-12 lg:px-24 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <CutTitle position="top-left">Our Philosophy</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-20 max-w-7xl grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Main Statement Card */}
          <div className="flex flex-col justify-center rounded-[2.5rem] bg-white p-10 md:p-14 border border-neutral-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
            <h3 className="text-3xl md:text-4xl font-serif font-bold leading-tight text-charcoal mb-8 relative z-10">
              Before we build the future, we must ask where our thinking begins.
            </h3>
            <div className="space-y-6 text-lg font-medium leading-relaxed text-neutral-500 relative z-10">
              <p>
                SvaBharat begins with a simple conviction: Bharat should learn from the world without losing the ability to think, judge, adapt, and create from its own centre.
              </p>
              <p>
                This is not isolation. It is not nostalgia. It is the discipline of remaining rooted while staying open, and the courage to ask better questions when borrowed frameworks do not explain the life around us.
              </p>
            </div>
            
            <div className="mt-10 border-l-4 border-secondary pl-6 py-2 bg-gradient-to-r from-secondary/5 to-transparent rounded-r-2xl relative z-10">
              <p className="text-xl md:text-2xl font-serif font-bold text-charcoal italic">
                What becomes possible when Bharat studies itself with clarity and builds with confidence?
              </p>
            </div>
          </div>
          
          {/* Principles Stack */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-charcoal p-8 text-white h-full flex flex-col border border-neutral-800 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="mb-8 text-xs font-bold uppercase tracking-widest text-neutral-400">Philosophy in practice</p>
              <div className="space-y-4 flex-grow flex flex-col justify-center relative z-10">
                {principles.map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={item} 
                    className="flex items-start gap-5 rounded-2xl bg-white/5 p-5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    <span className="text-lg font-serif font-extrabold text-secondary mt-1">0{index + 1}</span>
                    <p className="text-neutral-200 font-medium text-base leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── MEANING OF SVA & LOGO ── */}
      <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-charcoal-deep px-6 py-24 md:px-12 lg:px-24 border border-white/10 shadow-2xl">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        
        <CutTitle position="top-left" className="!bg-charcoal-deep !text-white [&_svg]:!fill-charcoal-deep">
          The Symbolism
        </CutTitle>
        
        <div className="mx-auto mt-20 max-w-7xl">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 md:grid-cols-2 mb-8"
          >
            <motion.div variants={staggerItem} className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-serif text-white">स्व</span>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Sva</p>
              <h2 className="mb-5 text-4xl font-serif font-extrabold text-white">Self. Own. One's own.</h2>
              <p className="text-lg font-medium leading-relaxed text-neutral-400">
                Sva points to agency, rootedness, discernment, and the ability to see the world without surrendering one's own standpoint.
              </p>
            </motion.div>
            
            <motion.div variants={staggerItem} className="rounded-[2.5rem] bg-white/5 backdrop-blur-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-serif text-white">भा</span>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">Bharat</p>
              <h2 className="mb-5 text-4xl font-serif font-extrabold text-white">Land. People. Civilisation.</h2>
              <p className="text-lg font-medium leading-relaxed text-neutral-400">
                Bharat holds memory and possibility together: the inherited, the living, and the future still waiting to be imagined.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div {...fadeUp} className="rounded-[2.5rem] bg-white p-10 md:p-16 border border-white/10 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cream rounded-full blur-[80px]" />
            <div className="flex justify-center relative z-10">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full bg-cream p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-100"
              >
                <img src="/logo.png" alt="SvaBharat logo" className="h-40 w-40 md:h-48 md:w-48 object-contain mix-blend-multiply" />
              </motion.div>
            </div>
            <div className="space-y-6 text-xl font-medium leading-relaxed text-neutral-600 relative z-10">
              <h3 className="text-3xl font-serif font-extrabold text-charcoal mb-6">Rooted Openness</h3>
              <p>
                The logo is treated as a symbol of rooted openness: a centre that holds, and a form that remains in motion.
              </p>
              <p>
                It reflects the idea that original thought does not begin by rejecting the world. It begins by knowing where one stands, then engaging widely with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FIRST PRINCIPLES THINKING ── */}
      <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#FAFAFA] px-6 py-24 md:px-12 lg:px-24 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <CutTitle position="top-left">First Principles</CutTitle>
        <div className="mx-auto mt-20 max-w-7xl">
          <motion.h2 {...fadeUp} className="mb-16 max-w-4xl text-5xl md:text-6xl font-serif font-extrabold leading-tight tracking-tight text-charcoal">
            We begin not with how things are usually done, but <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">with what must be true.</span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              { title: "Question the given", desc: "A working discipline for moving from inherited assumptions.", icon: "01" },
              { title: "Return to fundamentals", desc: "Strip away the unnecessary to find the undeniable core truth.", icon: "02" },
              { title: "Build anew", desc: "Construct scalable possibilities from a foundation of clarity.", icon: "03" }
            ].map((item) => (
              <motion.div 
                key={item.title} 
                variants={staggerItem}
                className="group rounded-3xl bg-white p-10 border border-neutral-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 transition-colors duration-500" />
                <div className="mb-8 w-12 h-12 rounded-full bg-cream flex items-center justify-center text-primary font-serif font-bold border border-primary/10">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-2xl font-serif font-extrabold text-charcoal">{item.title}</h3>
                <p className="font-medium leading-relaxed text-neutral-500 text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTRIBUTORS & MOVEMENT ── */}
      <section className="relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-cream px-6 py-24 md:px-12 lg:px-24 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <CutTitle position="top-left">The Movement</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-20 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-charcoal leading-tight mb-8">
                Shaped by many kinds of intelligence.
              </h2>
              <div className="space-y-6 text-lg font-medium text-neutral-500">
                <p>
                  SvaBharat is for people carrying questions that are too important to leave unanswered. Expertise matters, but insight is not limited to credentials.
                </p>
                <p>
                  The movement creates space for people who can connect lived experience, disciplined study, and practical building.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="flex flex-wrap gap-3">
                {[
                  "Students & teachers",
                  "Researchers & writers",
                  "Entrepreneurs",
                  "Public servants",
                  "Artists & storytellers",
                  "Community builders",
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    key={item} 
                    className="rounded-full bg-white px-6 py-3 border border-neutral-200 text-charcoal font-semibold text-sm shadow-sm hover:border-primary/50 hover:text-primary cursor-default transition-colors"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-6 md:grid-cols-3"
          >
            {contributors.map((person) => (
              <motion.div 
                key={person.name} 
                variants={staggerItem}
                className="rounded-[2rem] bg-white p-8 md:p-10 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="mb-8 h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center font-bold text-secondary text-2xl font-serif border border-secondary/20 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    {person.name[0]}
                  </div>
                  <h3 className="mb-2 text-2xl font-serif font-bold text-charcoal">{person.name}</h3>
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest text-primary">{person.role}</p>
                </div>
                <p className="font-medium leading-relaxed text-neutral-500 text-base border-t border-neutral-100 pt-6">
                  {person.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      
    </div>
  );
}
