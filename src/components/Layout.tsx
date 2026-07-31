import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
export function Layout() {
  return (
    <main className="relative min-h-dvh p-4 md:p-8 lg:p-10 bg-white box-border font-sans flex flex-col gap-4 md:gap-8 lg:gap-10 overflow-hidden">
      <Outlet />
      <Footer />

      <ScrollToTop />
    </main>
  );
}