// src/App.jsx
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'; // 👈 1. Importamos HashRouter
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Vende from './pages/Vende';
import Contacto from './pages/Contacto';
import './App.css';

function AppContent() {
  const location = useLocation();
  // Detecta si estamos en la ruta raíz (Home)
  const isHome = location.pathname === '/';

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/vende" element={<Vende />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      
      {/* El footer solo se renderiza si NO estamos en el Home */}
      {!isHome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HashRouter> {/* 👈 2. Envolvemos la app con HashRouter en lugar de BrowserRouter */}
      <AppContent />
    </HashRouter>
  );
}

export default App;