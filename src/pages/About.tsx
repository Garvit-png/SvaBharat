import { motion } from "framer-motion";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const principles = [
  "Question inherited assumptions before accepting inherited answers.",
  "Return to what is fundamentally true on the ground.",
  "Build responses that are rooted, open, and useful.",
];

const contributors = [
  {
    name: "Researchers",
    role: "Patterns and evidence",
    text: "They reveal long arcs, hidden structures, and the context needed for better public imagination.",
  },
  {
    name: "Practitioners",
    role: "Ground reality",
    text: "They carry the lived knowledge of classrooms, farms, workshops, communities, and institutions.",
  },
  {
    name: "Builders",
    role: "New possibilities",
    text: "They translate questions into prototypes, ventures, systems, and tools that can be tested.",
  },
];

export function About() {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-8 lg:gap-10">
      <section className="relative w-full overflow-hidden rounded-3xl bg-[#Fdf6e3] px-6 pb-16 pt-32 md:rounded-[3rem] md:px-12 lg:px-24">
        <Navbar />
        <motion.div {...fadeUp} className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase text-orange-600">About SvaBharat</p>
          <h1 className="mb-6 text-5xl font-light tracking-normal md:text-7xl">
            Thinking from our own centre.
          </h1>
          <p className="max-w-3xl text-xl font-light leading-relaxed text-neutral-600 md:text-2xl">
            SvaBharat is a movement for original thought, rooted inquiry, and public imagination
            shaped by Bharat's own realities.
          </p>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-[#Fdf6e3] px-6 py-24 md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left">Our Philosophy</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-700">
            <p className="text-2xl font-normal leading-snug text-neutral-900">
              Before we build the future, we must ask where our thinking begins.
            </p>
            <p>
              SvaBharat begins with a simple conviction: Bharat should learn from the world
              without losing the ability to think, judge, adapt, and create from its own centre.
            </p>
            <p>
              This is not isolation. It is not nostalgia. It is the discipline of remaining rooted
              while staying open, and the courage to ask better questions when borrowed frameworks
              do not explain the life around us.
            </p>
            <p className="border-l-2 border-orange-400 pl-6 text-2xl font-normal text-neutral-900">
              What becomes possible when Bharat studies itself with clarity and builds with
              confidence?
            </p>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
            <p className="mb-6 text-sm font-medium uppercase text-neutral-400">Philosophy in practice</p>
            <div className="space-y-4">
              {principles.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-orange-50/60 p-5">
                  <span className="text-sm font-semibold text-orange-600">0{index + 1}</span>
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-[#F4ebd8] px-6 py-24 md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left">Meaning of Sva</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8">
              <p className="mb-4 text-xs font-medium uppercase text-neutral-400">Sva</p>
              <h2 className="mb-4 text-4xl font-light tracking-normal">Self. Own. One's own.</h2>
              <p className="font-light leading-relaxed text-neutral-600">
                Sva points to agency, rootedness, discernment, and the ability to see the world
                without surrendering one's own standpoint.
              </p>
            </div>
            <div className="rounded-3xl bg-neutral-900 p-8 text-white">
              <p className="mb-4 text-xs font-medium uppercase text-neutral-400">Bharat</p>
              <h2 className="mb-4 text-4xl font-light tracking-normal">Land. People. Civilisation.</h2>
              <p className="font-light leading-relaxed text-neutral-300">
                Bharat holds memory and possibility together: the inherited, the living, and the
                future still waiting to be imagined.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-[#Fdf6e3] px-6 py-24 md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left">Logo Explanation</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 grid max-w-5xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <div className="rounded-full bg-white p-10 shadow-sm">
              <img src="/logo.png" alt="SvaBharat logo" className="h-44 w-44 object-contain" />
            </div>
          </div>
          <div className="space-y-5 text-lg font-light leading-relaxed text-neutral-700">
            <p>
              The logo is treated as a symbol of rooted openness: a centre that holds, and a form
              that remains in motion.
            </p>
            <p>
              It reflects the idea that original thought does not begin by rejecting the world. It
              begins by knowing where one stands, then engaging widely with confidence.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-[#F4ebd8] px-6 py-24 md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left">First Principles Thinking</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 max-w-5xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-light leading-tight tracking-normal">
            We begin not with how things are usually done, but with what must be true.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {["Question the given", "Return to fundamentals", "Build anew"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-8">
                <h3 className="mb-4 text-2xl font-normal">{item}</h3>
                <p className="font-light leading-relaxed text-neutral-600">
                  A working discipline for moving from inherited assumptions to new possibilities.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-neutral-900 px-6 py-24 text-white md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left" className="!bg-neutral-900 !text-white [&_svg]:!fill-neutral-900">
          The Movement
        </CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 max-w-5xl">
          <p className="mb-12 max-w-4xl text-3xl font-light leading-snug text-neutral-100 md:text-5xl">
            SvaBharat is for people carrying questions that are too important to leave unanswered.
          </p>
          <div className="grid gap-4 text-neutral-300 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Students and teachers",
              "Researchers and writers",
              "Entrepreneurs and technologists",
              "Public servants and practitioners",
              "Artists and storytellers",
              "Communities building from experience",
            ].map((item) => (
              <p key={item} className="rounded-2xl border border-white/10 p-5">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative w-full overflow-hidden rounded-3xl bg-[#Fdf6e3] px-6 py-24 md:rounded-[3rem] md:px-12 lg:px-24">
        <CutTitle position="top-left">Contributors</CutTitle>
        <motion.div {...fadeUp} className="mx-auto mt-16 max-w-6xl">
          <div className="mb-12 max-w-3xl space-y-5 text-lg font-light leading-relaxed text-neutral-700">
            <p>
              SvaBharat is shaped by many kinds of intelligence. Expertise matters, but insight is
              not limited to credentials.
            </p>
            <p>
              The movement creates space for people who can connect lived experience, disciplined
              study, and practical building.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contributors.map((person) => (
              <div key={person.name} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-6 h-16 w-16 rounded-full bg-orange-100" />
                <h3 className="mb-2 text-2xl font-normal">{person.name}</h3>
                <p className="mb-5 text-sm font-medium text-orange-600">{person.role}</p>
                <p className="font-light leading-relaxed text-neutral-600">{person.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
