import React from 'react'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const Rute = () => {
  return (
   <Router>
        <Routes>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/" element={<MainApp />} ></Route>
        </Routes>
   </Router>
  )
}

export default Rute;