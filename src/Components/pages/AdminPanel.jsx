import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import ProductList from "../Products/ProductList";

const API_URL = "https://687ad236abb83744b7edeff3.mockapi.io/Productos";

const AdminPanel = () => {
  const { logout } = useContext(AdminContext);
  const navigate = useNavigate();

  // Campos formulario
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [categoria, setCategoria] = useState('');
  const [animal, setAnimal] = useState('');
  const [stock, setStock] = useState('');

  // Productos y mensajes
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState('');

  // Cargar productos
  const cargarProductos = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos:", err));
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !descripcion || !imagen || !categoria || !stock) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    const nuevoProducto = {
      nombre,
      precio: Number(precio),
      descripcion,
      imagen,
      categoria,
      stock: Number(stock),
      animal
    };
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoProducto)
    })
      .then(res => res.json())
      .then(() => {
        setMensaje("Producto agregado correctamente");
        cargarProductos();
        setNombre('');
        setPrecio('');
        setDescripcion('');
        setImagen('');
        setCategoria('');
        setAnimal('');
        setStock('');
      })
      .catch(() => setMensaje("Error al agregar producto"));
  };

  const handleEliminar = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(() => {
        setMensaje("Producto eliminado");
        cargarProductos();
      })
      .catch(() => setMensaje("Error al eliminar producto"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Panel del Administrador</h2>

      <form onSubmit={handleAgregar} style={{ maxWidth: 500, margin: 'auto' }}>
        <h3>Agregar producto</h3>
        {/* Inputs para cada campo */}
        <label>Nombre:</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)} />

        <label>Precio:</label>
        <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} />

        <label>Descripción:</label>
        <textarea value={descripcion} onChange={e => setDescripcion(e.target.value)} />

        <label>Imagen:</label>
        <input value={imagen} onChange={e => setImagen(e.target.value)} />

        <label>Categoría:</label>
        <input value={categoria} onChange={e => setCategoria(e.target.value)} />

        <label>Animal (opcional):</label>
        <input value={animal} onChange={e => setAnimal(e.target.value)} />

        <label>Stock:</label>
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} />

        <button type="submit" style={{ marginTop: 10 }}>Agregar</button>
      </form>

      {mensaje && <p style={{ textAlign: 'center', color: 'green' }}>{mensaje}</p>}

      <hr />

      <h3 style={{ textAlign: 'center' }}>Productos existentes</h3>

      {/* Pasamos modoAdmin y onEliminar a ProductList */}
      <ProductList productos={productos} modoAdmin={true} onEliminar={handleEliminar} />

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default AdminPanel;
