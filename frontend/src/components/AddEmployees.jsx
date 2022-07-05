import React , { useState, useContext } from 'react'
import EmployeeInfo from '../apis/EmployeeInfo';
import { EmployeeContext } from '../context/EmployeeInfoContext';
import { useNavigate } from 'react-router-dom';



export const AddEmployees = () => {
    const  { addEmployee }  =  useContext(EmployeeContext);
    let navigate = useNavigate()
    const [employeeId, setEmployeeId] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [position, setPosition] = useState('');
    const [area, setArea] = useState('');
    const [officeName, setOfficeName] = useState('');
    const [entrydate, setEntryDate] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await EmployeeInfo.post( "/addemployee", {
              employeeId: employeeId ,
              firstname: firstname,
              lastname: lastname,
              dateofbirth: dateofbirth ,
              position: position,
              area: area,
              officeName: officeName,
              entrydate: entrydate
          });
          addEmployee(response.data)
         
        } catch (err){    
              alert('Employee Info saved ')
              navigate('/team')
        }
    }
  return (
    <div className=' form-group container  px-4 '>
        <form action="" method="post">
            <div className="form-row   "> 
                <div className="col-md-6 b-5  mt-5  __in">
                   <label htmlFor="validationCustom01">Nombre</label>
                    <input 
                      value={ firstname }  
                      onChange={ e => 
                      setFirstName(e.target.value) }  
                      type="text"
                      className='form-control'  
                      placeholder='Nombre'/>
                </div>
                <div className="col-md-6 b-5 mt-5 __in ">
                   <label htmlFor="validationCustom01">Apellido</label>
                      <input 
                        value={ lastname }  
                        onChange={ e => 
                        setLastName(e.target.value) } 
                        type="text"
                        className='form-control'
                         placeholder='Apellido' />
                </div>
                <div className="col-md-6 b-5 mt-5 __in">
                   <label htmlFor="validationCustom01">Código de Empleado</label>
                    <input 
                      value={ employeeId }  
                      onChange={ e => 
                      setEmployeeId(e.target.value) }  
                      type="text"
                      className='form-control'  
                      placeholder='Código de Empleado'/>
                </div>
                <div className="col-md-6 b-5  mt-5 __in">
                   <label htmlFor="validationCustom01">Puesto</label>
                      <input 
                        value={ position}  
                        onChange={ e => setPosition(e.target.value) } 
                        type="text"className='form-control' 
                        placeholder='Puesto' />
                </div>
                 <div className="col-md-6 b-5 mt-5 __in">
                    <label htmlFor="validationCustom01">Area</label>
                      <input 
                        value={ area }  
                        onChange={ e => 
                        setArea(e.target.value) } 
                        type="text"
                        className='form-control'
                         placeholder='Area' />
                </div>
                 <div className="col-md-6 b-5 __in ">
                    <label htmlFor="validationCustom01">Oficina</label>
                      <input 
                        value={ officeName}  
                        onChange={ e => 
                        setOfficeName(e.target.value) } 
                        type="text"
                        className='form-control'
                         placeholder='Oficina' />
                </div>
                 <div className="col-md-6 b-5  __in">
                    <label htmlFor="validationCustom01">Fecha de Nacimiento</label>
                      <input 
                        value={ dateofbirth }  
                        onChange={ e => 
                        setDateOfBirth(e.target.value) } 
                        type="text"
                        className='form-control'
                        placeholder='Fecha de Nacimiento' />
                </div>
                 <div className="col-md-6 b-5  __in">
                   <label htmlFor="validationCustom01">Día de Ingreso</label>
                      <input 
                        value={ entrydate }  
                        onChange={ e => 
                        setEntryDate(e.target.value) } 
                        type="text"
                        className='form-control'
                         placeholder='Día de Ingreso' />
                </div>
            </div> 
            <button  onClick={ handleSubmit }   type='submit' className='btn btn-primary btn-background bt_in'>Add</button>      
        </form>
    </div>
  )
}
