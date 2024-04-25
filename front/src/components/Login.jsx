import React, { useState } from 'react';

export const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para manejar el envío del formulario

 
      console.log("Usuario:", usuario);
      console.log("Contraseña:", contrasena);
    };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Inicio de Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input 
                type="text" 
                className="form-control" 
                id="usuario" 
                placeholder="Introduce tu nombre de usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                id="contrasena" 
                placeholder="Introduce tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  )
}
