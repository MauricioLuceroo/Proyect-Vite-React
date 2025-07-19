import React, { useState } from "react";


const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por contactarte. Te responderemos pronto.");
    setFormulario({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <>
    
    <div className="container mt-5" style={{ marginBottom: "50px"}}>
      <h2 className="text-center mb-4" style={{ marginLeft: "30px" }}>Contacto</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px", backgroundColor: "#898c8fff", padding: "40px", borderRadius: "40px" }}>
        <div className="mb-3">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo" style={{ width: "100%", padding:"10px", borderRadius: "5px" }}
            value={formulario.nombre}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          
          <input
            type="email"
            name="email"
            placeholder="Correro electronico" style={{ width: "100%", padding:"10px", borderRadius: "5px" }}
            value={formulario.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">          
           <textarea
              name="mensaje"
              rows="4"
              value={formulario.mensaje}
              placeholder="Mensaje" style={{ width: "100%", padding:"10px", borderRadius: "5px" }}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100" > Enviar</button>
      </form>
    </div>
   
    </>
  );
};

export default Contacto;
