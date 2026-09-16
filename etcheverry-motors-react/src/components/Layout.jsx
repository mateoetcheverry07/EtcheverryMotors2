// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; // 👈 Importamos el Footer

function Layout() {
  return (
    <div className="app-layout">
      <Navbar /> {/* Navbar fijo arriba */}
      
      <main>
        <Outlet /> {/* Contenido dinámico de cada página */}
      </main>

      <Footer /> {/* 👈 Footer flotante fijo abajo */}
    </div>
  );
}

export default Layout;