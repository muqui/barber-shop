import React from 'react'
import { NavLink } from 'react-router-dom';

export const Tickets = () => {
  return (
    <div>
       <NavLink className="btn btn-primary " activeClassName="active" to="/create-appointment">Mis turnos</NavLink>
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Fecha</th>
        <th scope="col">Hora</th>
        <th scope="col">Status</th>
        <th scope="col">Asunto</th>
        <th scope="col">Cancelar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><button  className='btn btn-primary'>Cancelar</button></td>
      </tr>
      <tr>
      <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td><button  className='btn btn-primary'>Cancelar</button></td>
      </tr>
      <tr>
      <td>3</td>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td><button  className='btn btn-primary'>Cancelar</button></td>
      </tr>
      <tr>
      <td>4</td>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td><button  className='btn btn-primary'>Cancelar</button></td>
      </tr>
    </tbody>
  </table></div>
  )
}
