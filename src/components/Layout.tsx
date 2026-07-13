import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <main className="relative min-h-dvh p-4 md:p-8 lg:p-10 bg-white box-border font-sans flex flex-col gap-4 md:gap-8 lg:gap-10">
      <Outlet />
      <Footer />
    </main>
  );
}
