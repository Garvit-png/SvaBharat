import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
export function Layout() {
  return (
    <main className="relative min-h-dvh bg-white box-border font-sans overflow-x-hidden">
      <Outlet />
      <div className="px-4 md:px-8 lg:px-10 pb-48 md:pb-72 lg:pb-96">
        <Footer />
      </div>
      {/* Bottom Graphic */}
      <div className="absolute left-0 right-0 -bottom-8 md:-bottom-16 lg:-bottom-24 w-full pointer-events-none select-none">
        <img 
          src="/middle1.png" 
          alt="Bottom Graphic" 
          className="w-full h-auto min-w-[120%] -ml-[10%] lg:min-w-full lg:ml-0 object-cover object-bottom mix-blend-multiply opacity-90 transform translate-y-8 md:translate-y-12" 
        />
      </div>
      <ScrollToTop />
    </main>
  );
}