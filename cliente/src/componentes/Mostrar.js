import React, { useEffect, useState } from 'react';

const Mostrar = () => {
  const [datos, setDatos] = useState([]);

  // Función para obtener los datos desde el backend
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/mostrar'); // Endpoint para obtener datos
        if (respuesta.ok) {
          const datos = await respuesta.json();
          setDatos(datos); // Guardamos los datos en el estado
        } else {
          console.error('Error al obtener los datos');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div>
      <h2>Datos Guardados</h2>
      {datos.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.correo}</td>
                <td>{dato.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </div>
  );
};

export default Mostrar;

