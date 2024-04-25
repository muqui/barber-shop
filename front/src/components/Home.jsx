import React from "react";
import { NavLink } from 'react-router-dom';
import { Register } from "./Register";

export const Home = ({user}) => {
  return (
    <div className="container">
      <div className=" row align-items-center  image-home">
        
        <div className="col-7">
          <h1 className=" titulo card-title text-center display-4 fw-bold fw-bold text-primary">
            LA MEJOR BARBERÍA DE GUADALAJARA
          </h1>
          <h2 class=" titulo card-title text-center  fw-bold text-primary">
            EL SERVICIO AL CLIENTE ES NUESTRA PASIÓN
          </h2>
          <h3 className="titulo">
          
          </h3>
        </div>
        {user ?
        (<div className="col-4 text-center mt-2 bg-white  border border-dark p-4 bg-light rounded-3">
          <Register />
        </div>) : null }
      </div>
   
    </div>
  );
};
