import React from "react";
import  SideBar  from "./components/SideBar";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
//import Overview from './pages/Overview';
//import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import { Team } from './pages/Team';
import { EmployeeContext  } from "./context/EmployeeContext";
import { AddEmployee } from "./pages/AddEmployee";
import { Dashboard } from "./pages/Dashboard";
import { EvCompetencias } from "./pages/EvCompetencias";
import { MiPerfil } from "./pages/MiPerfil";
import { Login } from "./components/Login";
import Home from "./pages/Home";
import DisplayEvaluacion from "./components/DisplayEvaluacion";




export const App = () => {

    
  return (
    <>
     <BrowserRouter>
        <div   className="pages">
          <Routes> 
                    <Route 
                      exact path='/login'  
                      element={<Login/>} />     
                      <Route 
                      exact  path='/'  
                      element={<Home/>} />  
                       <Route 
                      exact path='/team'  
                      element={<Team/>} />  
                       <Route 
                      exact path='/newemployee'  
                      element={<AddEmployee/>} />  
                         <Route 
                      exact  path='/displayev'  
                      element={<DisplayEvaluacion/>} />  
                     
            </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

