import mongoose from "mongoose";
const { Schema } = mongoose;

const employeesSchema = mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    office: {
        type: String,
        required: true,
    },
    entryDate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
}, { timestamps: true });

const EmployeesModel = mongoose.model('Employees', employeesSchema)
export default EmployeesModel;