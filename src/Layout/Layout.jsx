import Header from '../Components/Estatico/Header';
import Footer from '../Components/Estatico/Footer';
import Cart from '../Components/Cart/Cart';
import { Outlet } from 'react-router-dom';
import { useState } from 'react'; 


const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="layout">
      <Header setIsCartOpen={setIsCartOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
