import { Link } from "react-router-dom";
import { Settings } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-[#EBE5D6] text-neutral-900 py-12 px-6 md:px-10 rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Brand & Mission */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src="/logo.png" alt="SvaBharat Logo" className="w-10 h-10 object-contain mix-blend-multiply" />
            <span className="font-semibold text-lg tracking-tight">SvaBharat</span>
          </div>
          <p className="text-base font-medium mb-3">
            Think from the Sva.<br />Build for Bharat.
          </p>
          <p className="text-neutral-700 text-sm max-w-sm leading-relaxed">
            A movement to question assumptions, think from first principles, and imagine new possibilities for Bharat.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-semibold text-sm mb-5">Explore</h4>
          <ul className="space-y-2.5 text-neutral-700 text-sm">
            <li><Link to="/" className="hover:text-[#C9591C] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#C9591C] transition-colors">About</Link></li>
            <li><Link to="/ideas" className="hover:text-[#C9591C] transition-colors">Ideas</Link></li>
            <li><Link to="/blogs" className="hover:text-[#C9591C] transition-colors">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9591C] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Participate & Connect Links */}
        <div>
          <h4 className="font-semibold text-sm mb-5">Participate</h4>
          <ul className="space-y-2.5 text-neutral-700 text-sm mb-7">
            <li><a href="#" className="hover:text-[#C9591C] transition-colors">Join the Movement</a></li>
            <li><Link to="/ideas" className="hover:text-[#C9591C] transition-colors">Contribute an Idea</Link></li>
            <li><Link to="/contact" className="hover:text-[#C9591C] transition-colors">Become a Contributor</Link></li>
            <li><a href="#" className="hover:text-[#C9591C] transition-colors">Subscribe</a></li>
          </ul>

          <h4 className="font-semibold text-sm mb-3">Connect</h4>
          <ul className="space-y-2.5 text-neutral-700 text-sm">
            <li><a href="mailto:hello@svabharat.in" className="hover:text-[#C9591C] transition-colors">Email</a></li>
            <li><a href="#" className="hover:text-[#C9591C] transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#C9591C] transition-colors">Twitter / X</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold text-sm mb-3">Ideas worth thinking about.</h4>
          <p className="text-neutral-700 mb-5 text-xs leading-relaxed">
            Receive new ideas, conversations, and reflections from the SvaBharat movement.
          </p>
          <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9591C] transition-all"
            />
            <button className="w-full px-3.5 py-2.5 rounded-lg bg-[#10233D] text-white text-sm font-medium hover:bg-[#C9591C] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-300/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
        <p>© {new Date().getFullYear()} SvaBharat. All rights reserved.</p>
        <Link
          to="/admin"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/5 hover:bg-neutral-900/10 border border-neutral-300/60 text-xs font-medium text-neutral-700 hover:text-neutral-900 transition-all"
        >
          <Settings className="w-3.5 h-3.5" />
          Admin Portal
        </Link>
      </div>
    </footer>
  );
}