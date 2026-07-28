// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import { AboutPage } from './pages/About';
import { ProjectsPage } from './pages/Projects';
import { ProjectDetailPage } from './pages/projectDetails';
import { ContactPage } from './pages/Contact';
import { ServicesPage } from './pages/Services';
import Scrolltotop from './components/ScrtollToTop';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
       <Scrolltotop/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/projects" element={<ProjectsPage />} />
       <Route path="/projects/:id" element={<ProjectDetailPage />} />
       <Route path="/contact" element={<ContactPage />} />
       <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;