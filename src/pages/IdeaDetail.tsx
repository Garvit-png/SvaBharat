import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { CutTitle } from "../components/CutTitle";
import {
  getIdeas,
  saveIdeas,
  type Idea,
  type AcceptanceCriterion,
} from "../utils/storage";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Play,
  Pause,
  Download,
  Users,
  CheckCircle2,
  Clock,
  Circle,
  BookOpen,
  MessageSquare,
  Sparkles,
  Layers,
  Calendar,
  MapPin,
  Share2,
  Check,
} from "lucide-react";

export function IdeaDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [idea, setIdea] = useState<Idea | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState<"all" | "completed" | "in_progress" | "pending">("all");

  useEffect(() => {
    if (!id) return;
    const ideas = getIdeas();
    const found = ideas.find(
      (item) => item.id === id || item.id === id.toLowerCase()
    );
    if (found) {
      setIdea(found);
    }
  }, [id]);

  if (!idea) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-cream-light">
        <div className="pt-32 pb-16 px-6 md:px-12 lg:px-24 text-center">
          <Navbar />
          <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">Idea Not Found</h2>
          <p className="text-neutral-600 mb-8">We couldn't find the idea you were looking for.</p>
          <Link
            to="/ideas"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ideas
          </Link>
        </div>
      </div>
    );
  }

  // Calculate Acceptance Criteria stats
  const totalCriteria = idea.acceptanceCriteria.length;
  const completedCriteria = idea.acceptanceCriteria.filter(
    (c) => c.status === "completed"
  ).length;
  const progressPercent = totalCriteria > 0 ? Math.round((completedCriteria / totalCriteria) * 100) : 0;

  // Toggle criteria status locally for demo/extension
  const toggleCriterionStatus = (criterionId: string) => {
    if (!idea) return;
    const updatedCriteria = idea.acceptanceCriteria.map((c) => {
      if (c.id === criterionId) {
        const nextStatus: AcceptanceCriterion["status"] =
          c.status === "completed"
            ? "in_progress"
            : c.status === "in_progress"
            ? "pending"
            : "completed";
        return { ...c, status: nextStatus };
      }
      return c;
    });

    const updatedIdea = { ...idea, acceptanceCriteria: updatedCriteria };
    setIdea(updatedIdea);

    // Save to global ideas state
    const allIdeas = getIdeas();
    const newIdeas = allIdeas.map((i) => (i.id === idea.id ? updatedIdea : i));
    saveIdeas(newIdeas);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const filteredCriteria = idea.acceptanceCriteria.filter((c) => {
    if (filterCriteria === "all") return true;
    return c.status === filterCriteria;
  });

  const jumpToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full gap-6 md:gap-10 pb-20">
      {/* SECTION 1: HERO */}
      <section id="hero" className="relative w-full pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white shadow-sm">
        <Navbar />
        
        {/* Top bar with back link & share */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/ideas")}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-neutral-600 hover:text-primary transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Ideas in Motion
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-charcoal hover:text-primary transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <Share2 className="w-4 h-4" />}
            {copied ? "Link Copied!" : "Share Idea"}
          </button>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="bg-primary text-white font-mono font-bold text-xs px-3 py-1.5 rounded-lg tracking-wide uppercase">
            {idea.category}
          </span>
          <span className="bg-secondary/15 text-secondary font-mono font-bold text-xs px-3 py-1.5 rounded-lg border border-secondary/20 uppercase tracking-wide flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {idea.status}
          </span>
          <span className="bg-white/70 text-neutral-600 font-semibold text-xs px-3 py-1.5 rounded-lg border border-white flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {idea.location}
          </span>
          <span className="bg-white/70 text-neutral-500 font-semibold text-xs px-3 py-1.5 rounded-lg border border-white flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-neutral-400" />
            Updated {idea.lastUpdated}
          </span>
        </div>

        {/* Idea Title & Tagline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-charcoal tracking-tight leading-tight mb-6">
          {idea.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl font-serif font-semibold leading-relaxed mb-10">
          {idea.tagline}
        </p>

        {/* Jump-to Navigation Bar */}
        <div className="pt-6 border-t border-white/60 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2 shrink-0">
            Quick Jump:
          </span>
          {[
            { id: "brief", label: "Idea Brief" },
            { id: "notion", label: "Notion Note" },
            { id: "conversations", label: "Conversations" },
            { id: "resources", label: "Resources" },
            { id: "contributors", label: "Contributors" },
            { id: "criteria", label: "Acceptance Criteria" },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => jumpToSection(nav.id)}
              className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-white/60 hover:bg-white text-charcoal hover:text-primary transition-all border border-white shrink-0"
            >
              {nav.label}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 2: IDEA BRIEF */}
      <section id="brief" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Idea Brief</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto space-y-8">
          {/* Executive Summary Box */}
          <div className="bg-white rounded-2xl p-8 border-2 border-white shadow-md">
            <h3 className="text-sm font-mono font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Executive Summary
            </h3>
            <p className="text-lg md:text-xl font-serif font-bold text-charcoal leading-relaxed">
              "{idea.brief.summary}"
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <div className="bg-white rounded-2xl p-8 border-2 border-white shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold mb-4">
                !
              </div>
              <h4 className="text-xl font-serif font-bold text-charcoal mb-3">Core Problem Statement</h4>
              <p className="text-neutral-600 font-semibold leading-relaxed text-sm md:text-base">
                {idea.brief.problemStatement}
              </p>
            </div>

            {/* Proposed Framework */}
            <div className="bg-white rounded-2xl p-8 border-2 border-white shadow-md flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                ✓
              </div>
              <h4 className="text-xl font-serif font-bold text-charcoal mb-3">Proposed Framework & Vision</h4>
              <p className="text-neutral-600 font-semibold leading-relaxed text-sm md:text-base">
                {idea.brief.proposedFramework}
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="bg-white rounded-2xl p-8 border-2 border-white shadow-md">
            <h4 className="text-xl font-serif font-bold text-charcoal mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" /> Key Principles & Pillars
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {idea.brief.corePrinciples.map((principle, idx) => {
                const parts = principle.split(":");
                return (
                  <div key={idx} className="p-5 rounded-xl bg-cream-light border border-white flex flex-col">
                    <span className="text-xs font-mono font-bold text-secondary mb-2">0{idx + 1}</span>
                    <h5 className="font-serif font-bold text-charcoal text-base mb-2">
                      {parts[0]}
                    </h5>
                    <p className="text-xs font-semibold text-neutral-600 leading-relaxed">
                      {parts[1] || principle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOTION LINK */}
      <section id="notion" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Notion Integration</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-white shadow-lg flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-charcoal text-white font-serif font-bold text-2xl flex items-center justify-center shadow-md">
                  N
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Live Document
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    {idea.notionLink.workspaceName}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-600 text-sm font-semibold">
                This idea is actively maintained in Notion with draft notes, meeting summaries, and raw research material.
              </p>

              <div className="pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  Document Outline Preview:
                </h5>
                <ul className="space-y-2">
                  {idea.notionLink.documentOutline.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-semibold text-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch lg:items-end justify-center shrink-0 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5 bg-cream-light px-3 py-2 rounded-xl border border-white">
                <Clock className="w-3.5 h-3.5 text-primary" />
                Synced: {idea.notionLink.lastSynced}
              </div>

              <a
                href={idea.notionLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3.5 rounded-2xl font-bold hover:bg-neutral-800 transition-all shadow-md group"
              >
                <span>Open in Notion</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: RELATED CONVERSATION */}
      <section id="conversations" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Related Conversations</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto space-y-6">
          {idea.relatedConversations.map((conv) => {
            const isPlaying = isPlayingAudio === conv.id;
            return (
              <div
                key={conv.id}
                className="bg-white rounded-2xl p-8 border-2 border-white shadow-md flex flex-col md:flex-row gap-6 items-start justify-between"
              >
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {conv.type}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {conv.date}
                    </span>
                    {conv.duration && (
                      <span className="text-xs font-semibold text-neutral-400">
                        · {conv.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-charcoal">
                    {conv.title}
                  </h3>

                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Speakers: <span className="text-charcoal font-semibold">{conv.speakers}</span>
                  </p>

                  {conv.summary && (
                    <p className="text-sm font-semibold text-neutral-600 leading-relaxed">
                      {conv.summary}
                    </p>
                  )}

                  {conv.keyQuotes && conv.keyQuotes.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {conv.keyQuotes.map((quote, qIdx) => (
                        <blockquote
                          key={qIdx}
                          className="border-l-4 border-secondary pl-4 italic text-sm text-charcoal/80 bg-cream-light py-2 rounded-r-lg font-serif"
                        >
                          "{quote}"
                        </blockquote>
                      ))}
                    </div>
                  )}
                </div>

                {conv.audioUrl && (
                  <div className="w-full md:w-auto shrink-0 flex flex-col items-center justify-center pt-4 md:pt-0">
                    <button
                      onClick={() => setIsPlayingAudio(isPlaying ? null : conv.id)}
                      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-md ${
                        isPlaying
                          ? "bg-secondary text-white scale-105"
                          : "bg-primary text-white hover:bg-primary-hover hover:scale-105"
                      }`}
                    >
                      {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                    </button>
                    <span className="text-xs font-bold text-neutral-500 mt-2 uppercase tracking-wider">
                      {isPlaying ? "Playing Snippet" : "Listen Audio"}
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Join Discussion Box */}
          <div className="bg-white/60 rounded-2xl p-6 border border-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-charcoal">Have thoughts on this idea?</h4>
                <p className="text-xs text-neutral-600 font-semibold">Join our community discourse or submit feedback.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-primary-hover transition-colors shrink-0 uppercase tracking-wider"
            >
              Start Discussion
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESOURCES */}
      <section id="resources" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Resources & Artifacts</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {idea.resources.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl p-6 border-2 border-white shadow-md flex flex-col justify-between group hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-bold text-xs px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      <FileText className="w-3.5 h-3.5" />
                      {res.type}
                    </span>
                    {res.size && (
                      <span className="text-xs font-semibold text-neutral-400">{res.size}</span>
                    )}
                  </div>

                  <h4 className="text-lg font-serif font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                    {res.title}
                  </h4>

                  <p className="text-xs font-semibold text-neutral-600 leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <a
                  href={res.url}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-primary group-hover:text-secondary pt-4 border-t border-neutral-100 uppercase tracking-wider"
                >
                  <span>Download Resource</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTRIBUTORS */}
      <section id="contributors" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream-dark rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Contributors & Team</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {idea.contributors.map((contrib) => (
              <div
                key={contrib.id}
                className="bg-white rounded-2xl p-6 border-2 border-white shadow-md flex flex-col items-center text-center group hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 border-2 border-primary/20 shadow-sm">
                  <img
                    src={contrib.avatar}
                    alt={contrib.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h4 className="text-xl font-serif font-bold text-charcoal mb-1">
                  {contrib.name}
                </h4>
                <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                  {contrib.role}
                </p>
                <p className="text-xs font-semibold text-neutral-500 mb-4">
                  {contrib.affiliation}
                </p>

                <div className="mt-auto w-full pt-4 border-t border-neutral-100">
                  <span className="text-xs font-semibold text-neutral-600 block bg-cream-light py-1.5 px-3 rounded-lg border border-white">
                    Focus: {contrib.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: ACCEPTANCE CRITERIA */}
      <section id="criteria" className="relative w-full py-16 px-6 md:px-12 lg:px-24 bg-cream rounded-3xl md:rounded-[3rem] overflow-hidden border-2 border-white">
        <CutTitle position="top-left">Acceptance Criteria</CutTitle>

        <div className="mt-12 max-w-5xl mx-auto space-y-8">
          {/* Progress Overview Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-white shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-charcoal">
                  Milestone Progress
                </h3>
                <p className="text-xs font-semibold text-neutral-500">
                  {completedCriteria} of {totalCriteria} Criteria Met ({progressPercent}%)
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {(["all", "completed", "in_progress", "pending"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterCriteria(filter)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider transition-all border ${
                      filterCriteria === filter
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-primary"
                    }`}
                  >
                    {filter.replace("_", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-100 h-3 rounded-full overflow-hidden p-0.5 border border-neutral-200">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Criteria Checklist Items */}
          <div className="space-y-4">
            {filteredCriteria.map((criterion) => {
              const isCompleted = criterion.status === "completed";
              const isInProgress = criterion.status === "in_progress";

              return (
                <div
                  key={criterion.id}
                  onClick={() => toggleCriterionStatus(criterion.id)}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all cursor-pointer shadow-sm hover:shadow-md flex items-start gap-4 ${
                    isCompleted
                      ? "border-emerald-200 bg-emerald-50/20"
                      : isInProgress
                      ? "border-amber-200"
                      : "border-white opacity-85"
                  }`}
                >
                  <button className="mt-1 shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : isInProgress ? (
                      <Clock className="w-6 h-6 text-amber-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-neutral-300" />
                    )}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className={`text-lg font-serif font-bold ${isCompleted ? "text-emerald-950 line-through decoration-emerald-500/50" : "text-charcoal"}`}>
                        {criterion.title}
                      </h4>

                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${
                            isCompleted
                              ? "bg-emerald-100 text-emerald-800"
                              : isInProgress
                              ? "bg-amber-100 text-amber-800"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          {criterion.status.replace("_", " ")}
                        </span>
                        <span className="text-xs font-semibold text-neutral-400">
                          Target: {criterion.targetDate}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm font-semibold text-neutral-600 leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {filteredCriteria.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border-2 border-white p-6 shadow-sm">
                <p className="text-neutral-500 font-bold text-sm">
                  No criteria found for status "{filterCriteria.replace("_", " ")}".
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default IdeaDetail;
