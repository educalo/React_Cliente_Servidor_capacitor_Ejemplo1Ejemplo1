import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    correo: '',
    edad: ''
  });

  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate(); // Para redirigir al componente Mostrar

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setMensaje('Datos guardados con éxito.');
        setFormValues({ nombre: '', correo: '', edad: '' }); // Limpiar formulario
      } else {
        setMensaje('Error al guardar los datos.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setMensaje('Error de conexión con el servidor.');
    }
  };

  const handleMostrarDatos = () => {
    navigate('/mostrar'); // Redirige al componente Mostrar
  };

  return (
    <div>
      <h2>Formulario de Datos Personales</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formValues.nombre} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" name="correo" value={formValues.correo} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Edad:
          <input type="number" name="edad" value={formValues.edad} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleMostrarDatos} style={{ marginLeft: '10px' }}>
          Mostrar Datos
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Form;

