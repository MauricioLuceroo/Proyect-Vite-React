import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import { AdminProvider } from './Context/AdminContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </AdminProvider>
  </StrictMode>
);





