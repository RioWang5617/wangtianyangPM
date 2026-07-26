import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '@/components/Nav';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import About from '@/pages/About';
import ProjectDetail from '@/pages/ProjectDetail';
import Chatbot from '@/components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
