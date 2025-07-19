import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/pages/Gallery';
import Contact from './Components/pages/Contact';
import Offers from './Components/pages/Offers';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
import Login from "./Components/pages/Login";
import AdminPanel from "./Components/pages/AdminPanel";
import DetallesProductos from './Components/Products/DetallesProductos';
import FormularioProducto from './Components/Admin/FormularioProducto';
import RutasProtegidas from './Components/Rutas/RutasProtegidas';
import { useContext } from 'react';
import { AdminContext } from './Context/AdminContext'; // 👈 este es el bueno
import Layout from './Layout/Layout';
import ProductosFiltrados from './Components/pages/ProductosFiltrados';
import Checkout from './Components/Cart/Checkout';
import './App.css';

function App() {
  const { isAdminAuthenticated } = useContext(AdminContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Productos" element={<Gallery />} />
          <Route path="Productos/:id" element={<DetallesProductos />} />
          <Route path="Contacto" element={<Contact />} />
          <Route path="Ofertas" element={<Offers />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/productos/:animal" element={<ProductosFiltrados />} />
          <Route path="checkout" element={<Checkout />} />

          <Route
            path="/admin"
            element={
              <RutasProtegidas isAuthenticated={isAdminAuthenticated}>
                <AdminPanel />
              </RutasProtegidas>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
