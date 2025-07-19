import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://687ad236abb83744b7edeff3.mockapi.io/Productos"; 

  
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdminAuthenticated");
    if (adminStatus === "true") {
      setIsAdminAuthenticated(true);
    }
  }, []);

  const login = () => {
    setIsAdminAuthenticated(true);
    localStorage.setItem("isAdminAuthenticated", "true");
  };

  const logout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem("isAdminAuthenticated");
  };

  
  const obtenerProductos = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const agregarProducto = async (nuevoProducto) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      });
      obtenerProductos(); // Refresca lista
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      obtenerProductos(); 
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdminAuthenticated,
        login,
        logout,
        productos,
        loading,
        obtenerProductos,
        agregarProducto,
        eliminarProducto
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
