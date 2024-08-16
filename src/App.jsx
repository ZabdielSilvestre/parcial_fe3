import Card from "./Components/Card";
import React, { useState } from "react";


function App() {
  const [formData, setFormData] = useState({
    modelo: "",
    año: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (!formData.modelo || !formData.año) {
      setError("Todos los campos son obligatorios");
      return;
    }

  

    console.log(formData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (

    <div className="App">
      <h1>BIENVENIDO</h1>
      <h2>Ingresa tu automóvil favorito</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modelo">Modelo:</label>
          <input
            id="modelo"
            type="text" 
            value={formData.modelo} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="año">Año:</label>
          <input
            id="año"
            type="text" 
            value={formData.año} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      
      {error && (
        <p className="text-red-500 mt-3">{error}</p>
      )}
      <Card modelo = {formData.modelo} año ={formData.año}></Card>
    </div>
    
  );
}

export default App;