import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import router from "./routes/employees.js"



//App Config

const app = express();
const env = dotenv.config();
const employeesRoutes = router;

//const connection_url = "mongodb+srv://admin:wJvEJEITq9CTYH6y@evfpp.heejypt.mongodb.net/fppdb?retryWrites=true&w=majorityt";

//Middleware 
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(Cors());

//Routes
app.use('/api/employees', employeesRoutes)


//Connect to DB

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('connected to db & listening on port', process.env.PORT));
    })
    .catch((error) => {
        console.log(error)
    })

//API endpoints


/*
app.post('/', (req, res) => {
    const dbEmployee = req.body;

    Employee.create(dbEmployee, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
})


app.get('/employees', (req, res) => {

    EmployeesModel.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
})
*/
//Listener