import React, { useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const initialUserData = {
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    active: true,
  };

  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsArray = [];

    for (const key in userData) {
      if (!userData[key]) {
        errorsArray.push({ message: `${key} no puede estar en blanco` });
      }
    }

    if (!validateEmail(userData.email)) {
      errorsArray.push({ message: 'Correo electrónico inválido' });
    }

    if (userData.email !== userData.confirmEmail) {
      errorsArray.push({ message: 'Los correos electrónicos no coinciden' });
    }

    if (!validatePassword(userData.password)) {
      errorsArray.push({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    if (userData.password !== userData.confirmPassword) {
      errorsArray.push({ message: 'Las contraseñas no coinciden' });
    }

    if (errorsArray.length > 0) {
      setErrors(errorsArray);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/user', userData);
      setErrors([{ message: 'Usuario creado con éxito!' }]);
      setUserData(initialUserData);
      console.log(response)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorsFromServer = error.response.data.errors;
        setErrors(errorsFromServer);
      } else {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
    <div className="container">
      {errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {errors.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}
      <h2 className="h5">¡REGÍSTRATE GRATIS!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nombre de Usuario:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmEmail" className="form-label">
            Confirmar Correo Electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="confirmEmail"
            name="confirmEmail"
            value={userData.confirmEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
};
