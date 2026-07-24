import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";
import { getIdeas, type Idea } from "../utils/storage";
import { ArrowRight, Sparkles, FileText, MessageSquare, BookOpen } from "lucide-react";

export function Ideas() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    setIdeas(getIdeas());
    const handleUpdate = () => {
      setIdeas(getIdeas());
    };
    window.addEventListener("svabharat_ideas_updated", handleUpdate);
    return () => {
      window.removeEventListener("svabharat_ideas_updated", handleUpdate);
    };
  }, []);

  const categories = ["All Categories", ...Array.from(new Set(ideas.map((i) => i.category)))];

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch =
      idea.title.toLowerCase().includes(search.toLowerCase()) ||
      idea.tagline.toLowerCase().includes(search.toLowerCase()) ||
      idea.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All Categories" || idea.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full gap-4 md:gap-8 lg:gap-10">
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <Navbar />
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight mb-6 text-charcoal">
          Ideas in Motion
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl font-serif font-bold">
          Explorations, propositions, and fundamental questions we are currently working on.
        </p>
      </section>

      {/* All Ideas Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">All Ideas We Are Working On</CutTitle>
        
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search ideas by title, tagline, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-3 border-2 border-white bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm font-semibold transition-all"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full md:w-1/3 px-4 py-3 border-2 border-white bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm font-semibold transition-all cursor-pointer"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map((idea, i) => (
            <Link
              key={idea.id}
              to={`/ideas/${idea.id}`}
              className="bg-white rounded-2xl p-8 shadow-md border-2 border-white flex flex-col h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-secondary font-mono font-bold text-xs uppercase tracking-wider">
                  Idea {String(i + 1).padStart(2, "0")}
                </span>
                <span className="bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {idea.category}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold mb-3 text-charcoal group-hover:text-primary transition-colors leading-tight">
                {idea.title}
              </h3>

              <p className="text-neutral-600 mb-6 flex-grow font-semibold text-sm leading-relaxed line-clamp-3">
                {idea.tagline}
              </p>

              <div className="space-y-2.5 mt-auto border-t border-neutral-100 pt-6 text-xs font-bold text-neutral-600">
                <div className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <BookOpen className="w-3.5 h-3.5 text-primary" /> Idea Brief
                  </span>
                  <span className="text-neutral-400">Read →</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <FileText className="w-3.5 h-3.5 text-secondary" /> Notion Note
                  </span>
                  <span className="text-neutral-400">View →</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="flex items-center gap-1.5 text-neutral-500">
                    <MessageSquare className="w-3.5 h-3.5 text-success" /> Related Conversations
                  </span>
                  <span className="text-neutral-400">Listen →</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-primary group-hover:text-secondary transition-colors uppercase tracking-wider">
                <span>Explore Full Idea Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {filteredIdeas.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border-2 border-white p-8 shadow-md">
              <Sparkles className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600 font-serif font-bold text-lg">No ideas matched your search query.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategoryFilter("All Categories");
                }}
                className="mt-4 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Ideas;

