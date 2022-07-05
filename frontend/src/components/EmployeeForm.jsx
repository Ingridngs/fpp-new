import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEmployeesContext } from '../hooks/useEmployeesContext'

export const EmployeeForm = () => {
     const { dispatch } = useEmployeesContext();
     const [ employeeId, setEmployeeId ] = useState('');
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ level, setLevel ] = useState('');
    const [ area, setArea ] = useState('');
    const [ office, setOffice ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const [ entryDate, setEntryDate ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState( null );
    const [emptyFields,setEmptyFields] = useState( [] );
     let navigate = useNavigate()

    const handleSubmit = async (e)=> {
        e.preventDefault()

        const employee = { area,birthday,email,employeeId,entryDate,lastName,name,level,office,position }
        const response = await fetch('/api/employees',{
            method:'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if(  !response.ok ){
            setError( json.error ) 
            setEmptyFields(json.emptyFields)
        }
        if( response.ok){
            setEmployeeId("")
            setName("")
            setLastName("")
            setPosition("")
            setLevel("")
            setArea("")
            setOffice("")
            setBirthday("")
            setEntryDate("")
            setEmail("")
            setError(null)
            setEmptyFields([])
            console.log("new employee added ")
            alert('Información guardada exitosamente 👌')
           
            dispatch({ type: 'CREATE_EMPLOYEE' , payload: json})
        }
    }
    

  return (
      <div  className=' form-group container  px-4 '>
            <form className="create"   onSubmit={ handleSubmit }>
                <div className="form-row">
                    <div className="col-md-6 b-5  mt-5  __in">
                        <label>Id de Empleado</label>
                                    <input 
                                    type="text"
                                    onChange={ e => setEmployeeId(e.target.value) }  
                                    value={ employeeId }  
                                    className='form-control'  
                                    placeholder='Id Empleado'
                                    />
                   </div>
                   <div className="col-md-6 b-5  mt-5  __in">
                       <label>Nombre</label>
                                <input 
                                type="text"
                                onChange={ e =>  setName(e.target.value) }  
                                value={ name }  
                                className='form-control'  
                                placeholder='Nombre'
                                />
                   </div>
                    <div className="col-md-6 b-5  mt-5  __in">
                          <label>Apellido</label>
                                <input 
                                type="text"
                                onChange={ e => setLastName(e.target.value) }  
                                value={ lastName }  
                                className='form-control'  
                                placeholder='Apellido'
                                />
                    </div>
                  <div className="col-md-6 b-5  mt-5  __in">
                      <label>Puesto</label>
                                <input 
                                type="text"
                                onChange={ e => setPosition(e.target.value) }  
                                value={ position }  
                                className='form-control'  
                                placeholder='Puesto'
                                />
                  </div>
                     <div className="col-md-6 b-5  mt-5  __in">
                          <label>Nivel</label>
                                <input 
                                type="text"
                                onChange={ e => setLevel(e.target.value) }  
                                value={ level }  
                                className='form-control'  
                                placeholder='Nivel'
                                />
                     </div>
                   <div className="col-md-6 b-5  mt-5  __in">
                       <label>Area</label>
                                <input 
                                type="text"
                                onChange={ e => setArea(e.target.value) }  
                                value={ area }  
                                className='form-control'  
                                placeholder='Area'
                                />
                   </div>
                    <div className="col-md-6 b-5  mt-5  __in">
                        <label>Oficina</label>
                                <input 
                                type="text"
                                onChange={ e => setOffice(e.target.value) }  
                                value={ office }  
                                className='form-control'  
                                placeholder='Oficina'
                                />
                    </div>
                    <div className="col-md-6 b-5  mt-5  __in">
                        <label>Fecha de Nacimiento</label>
                                <input 
                                type="date"
                                onChange={ e => setBirthday(e.target.value) }  
                                value={ birthday }  
                                className='form-control'  
                                placeholder='Birthday'
                                />
                    </div>
                    <div className="col-md-6 b-5  mt-5  __in">
                         <label>Fecha de Ingreso</label>
                                <input 
                                type="date"
                                onChange={ e => setEntryDate(e.target.value) }  
                                value={ entryDate}  
                                className='form-control'  
                                placeholder='Fecha de Ingreso'
                                />
                    </div>
                   <div className="col-md-6 b-5  mt-5  __in">
                        <label>Email</label>
                                <input 
                                type="text"
                                onChange={ e => setEmail(e.target.value) }  
                                value={ email }  
                                className='form-control'  
                                placeholder='email'
                                />
                   </div>
                </div>
                <div>
                    <button  type='submit' className='btn btn-primary btn-background bt_in'>Add</button>   
                </div>
                
            </form>
    </div>
  )
}
