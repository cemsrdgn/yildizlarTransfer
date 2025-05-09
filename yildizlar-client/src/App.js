import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
          <Route path="/kurumsal" element={<About />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
