import { Routes, Route } from 'react-router-dom';
import { Start } from './pages/Start/Start';
import { Navbar } from './components/Start/Navbar/Navbar';
import { Footer } from './components/Start/Footer/Footer';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage/ServicesPage';
import { ContactPage } from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
