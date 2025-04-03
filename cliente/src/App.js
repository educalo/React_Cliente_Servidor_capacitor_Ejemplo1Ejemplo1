import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './componentes/Form';
import Mostrar from './componentes/Mostrar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/mostrar" element={<Mostrar />} />
      </Routes>
    </Router>
  );
};

export default App;


