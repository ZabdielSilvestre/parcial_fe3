
import Card from "./Card";
import React, { useState } from "react";
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const[formData, setFormData]=useState({
    modelo: "",
    año: ""
  });
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (
      !formData.modelo||
      !formData.año
    ) {
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
      <h2>Ingresa tu automovil favorito</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Modelo:</label>
        <input id="modelo"
          type="text" 
          value={formData.modelo} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Año:</label>
        <input id="año"
          type="text" 
          value={formData.año} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default App;
