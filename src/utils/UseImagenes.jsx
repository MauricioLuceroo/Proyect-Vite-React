import React from 'react';


const imagenes = import.meta.glob('../assets/*', { eager: true });

export function obtenerImagen(nombreArchivo) {
  const entrada = Object.entries(imagenes).find(([path]) =>
    path.includes(nombreArchivo)
  );
  return entrada ? entrada[1].default : '';
}
