import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    // 1. Fixed at top, centered with translate-x, and limited width
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 
                    bg-white/80 backdrop-blur-md border border-slate-200 
                    rounded-full px-6 py-3 shadow-lg shadow-slate-200/50">
      
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-light tracking-tight uppercase">Brand.Core</div>
        
        {/* Links - Hidden on mobile */}
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#work" className="hover:text-blue-600 transition">Work</a>
        </div>

        {/* Action Button / Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold">
            GET STARTED
          </button>
          <button className="md:hidden"><Menu /></button>
        </div>
      </div>
    </nav>
  );
}