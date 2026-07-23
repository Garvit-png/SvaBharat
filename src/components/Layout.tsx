import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { FooterPaths } from "./ui/footer-paths";
import { CustomCursor } from "./ui/custom-cursor";

export function Layout() {
  return (
    <main className="relative min-h-dvh p-4 md:p-8 lg:p-10 pb-32 md:pb-48 lg:pb-60 bg-white box-border font-sans flex flex-col gap-4 md:gap-8 lg:gap-10 overflow-hidden">
      {/* Custom 3D Rotating Ashok Chakra Cursor */}
      <CustomCursor />

      <Outlet />
      <Footer />
      {/* Bottom lines in the white margin below the footer card */}
      <div className="absolute left-0 right-0 bottom-0 h-[300px] md:h-[400px] lg:h-[500px] pointer-events-none overflow-hidden z-10">
        <FooterPaths />
      </div>
    </main>
  );
}
