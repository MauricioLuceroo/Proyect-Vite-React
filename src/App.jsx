
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Gallery from './Components/pages/Gallery';  
import About from './Components/pages/About';  
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';
 import './App.css'; //
import ProductList from './Components/ProductList';
import Productos from "./Components/Productos";



function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data/data.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
      setTimeout(() => {
        setProducts(datos);
        setLoading(false);
      }, 3000);
    })
    .catch(error => {
      console.error("Error", error);
      setError(true);
      setLoading(false);
    })
  } , []);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home productos ={products} loading ={loading} error={error} />} />
          <Route path="/Productos" element={<Gallery productos ={products} loading ={loading} error={error} />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/SobreNosotros" element={<About />} />       
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
    
