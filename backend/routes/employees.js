import express from "express";
import EmployeesModel from "../models/Employees.js"
import mongoose from "mongoose";


const router = express.Router();



//GET  all employees
router.get("/", async(req, res) => {
    const employees = await EmployeesModel.find({}).sort({ createdAt: -1 })

    res.status(200).json(employees)
})

//GET  a single employee

router.get("/:id", async(req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "Employee Id doenst exist" })
        }
        const singleEmployee = await EmployeesModel.findById(id)
        if (!singleEmployee) {
            return res.status(400).json({ error: "Employee doesn't exist" })
        }
        res.status(200).json({ singleEmployee })
    })
    //POST a new employee

router.post("/", async(req, res) => {
        const { employeeId, name, lastName, birthday, position, area, level, office, entryDate, email } = req.body

        let emptyFields = []

        if (!employeeId) {
            emptyFields.push('employee ID')
        }

        if (!name) {
            emptyFields.push('name')
        }

        if (!lastName) {
            emptyFields.push('lastName')
        }

        if (emptyFields.length > 0) {
            return res.status(400).json({ error: "Por favor completa todos los campos", emptyFields })
        }

        try {
            const employee = await EmployeesModel.create({ employeeId, name, lastName, birthday, position, area, level, office, entryDate, email })
            res.status(200).json(employee);
        } catch (err) {
            res.status(400).json({ error: error.message })
        }
    })
    //DELETE an employee

router.delete("/:id", async(req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "Employee Id doenst exist" })
        }

        const employee = await EmployeesModel.findOneAndDelete({ _id: id })
        if (!employee) {
            return res.status(400).json({ error: "Employee doesn't exist" })
        }
    })
    //UPDATE employee

router.patch("/:id", async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Employee Id doenst exist" })
    }

    const employee = await EmployeesModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!employee) {
        return res.status(400).json({ error: "Employee doesn't exist" })
    }

    res.status(200).json(employee)
})

export default router;