import React from 'react'
import { DisplayEmployees } from '../components/DisplayEmployees'
import { EmployeeForm } from '../components/EmployeeForm'

export const AddEmployee = () => {
  return (
    <div>
        <EmployeeForm/>
        <DisplayEmployees/>
    </div>
  )
}
