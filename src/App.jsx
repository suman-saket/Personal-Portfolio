import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { appShell } from './utils/styles';
import About from './pages/About';

function App() {
  return (
    <div className={`min-h-screen flex flex-col ${appShell}`}>
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
