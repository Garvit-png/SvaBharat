import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Ideas } from "./pages/Ideas";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar lives outside <main> so overflow-hidden on Layout never clips it */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

