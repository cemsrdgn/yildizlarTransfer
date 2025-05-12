import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BizKimiz from './pages/kurumsal/BizKimiz';
import VizyonMisyon from './pages/kurumsal/VizyonMisyon';
import Araclarimiz from './pages/kurumsal/Araclarimiz';
import ServiceDetail from './pages/hizmetlerimiz/ServiceDetail';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetlerimiz" element={<Services />} />
          <Route path="/hizmetlerimiz/ev-ofis-tasimaciligi" element={<Services initialTab="ev-ofis" />} />
          <Route path="/hizmetlerimiz/depolama-hizmetleri" element={<Services initialTab="depolama" />} />
          <Route path="/hizmetlerimiz/lojistik-destek" element={<Services initialTab="lojistik" />} />
          <Route path="/hizmetlerimiz/ev-ofis-tasimaciligi/:serviceId" element={<ServiceDetail />} />
          <Route path="/hizmetlerimiz/depolama-hizmetleri/:serviceId" element={<ServiceDetail />} />
          <Route path="/hizmetlerimiz/lojistik-destek/:serviceId" element={<ServiceDetail />} />
          <Route path="/kurumsal" element={<About />} />
          <Route path="/kurumsal/biz-kimiz" element={<BizKimiz />} />
          <Route path="/kurumsal/vizyon-misyon" element={<VizyonMisyon />} />
          <Route path="/kurumsal/araclarimiz" element={<Araclarimiz />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
