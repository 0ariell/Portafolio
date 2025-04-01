import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
// App.tsx o tu archivo principal de React


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
