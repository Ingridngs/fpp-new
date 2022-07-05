import React from 'react'
import { useEffect,useState } from 'react'
import { useEmployeesContext } from '../hooks/useEmployeesContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import {es} from 'date-fns/locale'


export const DisplayEmployees = () => {
const { employees,dispatch} = useEmployeesContext()

      useEffect( () =>  {
        const fetchEmployees = async () => {
          const response = await fetch("/api/employees")
          
          const json = await response.json()
          console.log(json)

          if( response.ok){
              dispatch({ type: 'SET_EMPLOYEES', payload: json})
          }
        }
        fetchEmployees()
      }
      ,[ ] )
      const handleClick=  async () => {
        const response = await fetch(`/api/employees/${employees._id}`,{
          
          method:'DELETE'
        }
        )

        const json = await response.json()

        if(  response.ok ){
          dispatch({ type:'DELETE_EMPLOYEE', payload:json })
        }
      }

  return (
    <div class="table-responsive container">
       <table class="table table-hover ">
      <thead>
       <tr>
         <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Puesto</th>
          <th scope="col">Nivel</th>
          <th scope="col">Area</th>
          <th scope="col">Oficina</th>
          <th scope="col">Fecha Nacimiento</th>
          <th scope="col">Antigüedad </th>
        </tr>
      </thead>
      <tbody>
        
            {
              employees && employees.map( (employee) => (
                <>
                <tr>
                    <td key={employee._id}>{ employee.employeeId}</td>
                    <td>{employee.name}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.position}</td>
                    <td>{employee.level}</td>
                    <td>{employee.area}</td>
                    <td>{employee.office}</td>
                    <td>{employee.birthday }</td>
                    <td>{formatDistanceToNow(new Date(employee.entryDate))}</td>
                    <td onClick={ handleClick }>Delete</td>
                  </tr>
                </>
              ))
        }
      </tbody>
  </table> 
</div>
  )
}
