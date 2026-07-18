import { useState, useEffect } from "react";
import { CutTitle } from "../components/CutTitle";
import { Navbar } from "../components/Navbar";
import { getBlogs, type Blog } from "../utils/storage";
import { X, Calendar, Clock, User, Tag } from "lucide-react";


export function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  useEffect(() => {
    // Initial fetch
    setBlogs(getBlogs());

    // Event listener for tab updates
    const handleUpdate = () => {
      setBlogs(getBlogs());
    };
    window.addEventListener("svabharat_blogs_updated", handleUpdate);
    return () => {
      window.removeEventListener("svabharat_blogs_updated", handleUpdate);
    };
  }, []);

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
            {blogs.map((blog) => (
              <div 
                key={blog.id} 
                onClick={() => setSelectedBlog(blog)}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start group hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Blog Cover Image */}
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-100 flex-shrink-0">
                  {blog.coverPhoto.startsWith("linear-gradient") ? (
                    <div 
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      style={{ background: blog.coverPhoto }}
                    />
                  ) : (
                    <img 
                      src={blog.coverPhoto} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                
                {/* Blog Card Info */}
                <div className="flex-1 flex flex-col justify-center h-full">
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-neutral-500 font-semibold mb-4">
                    <span className="inline-flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {blog.authorName}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric"
                      })}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">
                      <Tag className="w-3 h-3" />
                      {blog.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-lg mb-8 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 font-semibold text-orange-600 group-hover:gap-3 transition-all">
                      Read More <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {blogs.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-neutral-100 p-8">
                <p className="text-neutral-500 font-semibold text-lg">No published articles yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FULL BLOG VIEW OVERLAY MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in">
          <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-neutral-100 animate-slide-up">
            {/* Header / Cover Area */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0 flex items-end">
              {selectedBlog.coverPhoto.startsWith("linear-gradient") ? (
                <div className="absolute inset-0 w-full h-full" style={{ background: selectedBlog.coverPhoto }} />
              ) : (
                <img src={selectedBlog.coverPhoto} alt="" className="absolute inset-0 w-full h-full object-cover" />
              )}
              {/* Cover dim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/10 z-10"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title inside cover */}
              <div className="relative p-6 sm:p-10 w-full text-white">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white mb-3 tracking-wider uppercase">
                  {selectedBlog.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {selectedBlog.title}
                </h2>
              </div>
            </div>

            {/* Meta bar */}
            <div className="bg-neutral-50 px-6 sm:px-10 py-4 border-b border-neutral-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange-500" />
                <span>{selectedBlog.authorName}</span>
                <span className="text-neutral-400 font-normal text-xs">({selectedBlog.authorDesignation})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>
                  {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", {
                    month: "long", day: "numeric", year: "numeric"
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>{selectedBlog.readTime}</span>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 leading-relaxed max-w-none text-neutral-700 text-base sm:text-lg">
              <div 
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }} 
                className="rich-text-content"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Blogs;
