import { Link } from "react-router-dom";
import { Settings } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-[#f5ebd7] text-neutral-900 py-16 px-6 md:px-12 rounded-3xl md:rounded-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Mission */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.png" alt="SvaBharat Logo" className="w-12 h-12 object-contain mix-blend-multiply" />
            <span className="font-semibold text-xl tracking-tight">SvaBharat</span>
          </div>
          <p className="text-lg font-medium mb-4">
            Think from the Sva.<br />Build for Bharat.
          </p>
          <p className="text-neutral-700 max-w-sm">
            A movement to question assumptions, think from first principles, and imagine new possibilities for Bharat.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Explore</h4>
          <ul className="space-y-3 text-neutral-700">
            <li><Link to="/" className="hover:text-orange-600 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition-colors">About</Link></li>
            <li><Link to="/ideas" className="hover:text-orange-600 transition-colors">Ideas</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-600 transition-colors">Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Participate & Connect Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6">Participate</h4>
          <ul className="space-y-3 text-neutral-700 mb-8">
            <li><a href="#" className="hover:text-orange-600 transition-colors">Join the Movement</a></li>
            <li><Link to="/ideas" className="hover:text-orange-600 transition-colors">Contribute an Idea</Link></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Become a Contributor</Link></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Subscribe</a></li>
          </ul>
          
          <h4 className="font-semibold text-lg mb-4">Connect</h4>
          <ul className="space-y-3 text-neutral-700">
            <li><a href="mailto:hello@svabharat.in" className="hover:text-orange-600 transition-colors">Email</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-orange-600 transition-colors">Twitter / X</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold text-lg mb-4">Ideas worth thinking about.</h4>
          <p className="text-neutral-700 mb-6 text-sm">
            Receive new ideas, conversations, and reflections from the SvaBharat movement.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
            <button className="w-full px-4 py-3 rounded-xl bg-neutral-900 text-white font-medium hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-300/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} SvaBharat. All rights reserved.</p>
        <Link 
          to="/admin" 
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/5 hover:bg-neutral-900/10 border border-neutral-300/60 text-xs font-semibold text-neutral-700 hover:text-neutral-900 transition-all shadow-sm"
        >
          <Settings className="w-3.5 h-3.5" />
          Admin Portal
        </Link>
      </div>
    </footer>
  );
}
