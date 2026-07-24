import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { CustomCursor } from "./ui/custom-cursor";

export function Layout() {
  return (
    <main className="relative min-h-dvh p-4 md:p-8 lg:p-10 pb-48 md:pb-72 lg:pb-96 bg-white box-border font-sans flex flex-col gap-4 md:gap-8 lg:gap-10 overflow-hidden">
      {/* Custom 3D Rotating Ashok Chakra Cursor */}
      <CustomCursor />

      <Outlet />
      <Footer />
      {/* Bottom Graphic replacing lines */}
      <div className="absolute left-0 right-0 -bottom-8 md:-bottom-16 lg:-bottom-24 w-full pointer-events-none select-none">
        <img 
          src="/middle1.png" 
          alt="Bottom Graphic" 
          className="w-full h-auto min-w-[120%] -ml-[10%] lg:min-w-full lg:ml-0 object-cover object-bottom mix-blend-multiply opacity-90 transform translate-y-8 md:translate-y-12" 
        />
      </div>
    </main>
  );
}
