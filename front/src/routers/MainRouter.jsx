import React, { useState } from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/Home'
import { Tickets } from '../components/Tickets'
import { Menu } from '../components/Menu'
import { Contacto } from '../components/Contacto'
import { About } from '../components/About'
import { Login } from '../components/Login'
import { CreateAppointment } from '../components/CreateAppointment';


export const MainRouter = () => {
  // Definir un estado usando useState
  const [login, setLogin] = useState(true);
    
  return (
    <BrowserRouter>
          <Menu />
        
         
        <Routes >
            <Route path='/' element={<Home user = {login}/>} />
            <Route path='/citas' element={login ? <Tickets/> : <Login/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/create-appointment' element={<CreateAppointment/>} />
           

         
        </Routes>
     
    </BrowserRouter>
  )
}
