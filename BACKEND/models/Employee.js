const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    EmpId: {
        type: String,
        required: true,
    },
    
    FullName: {
        type: String,
        required: true 
    },

    NameWithInitials: {
        type: String,
        required: true
    },

    DisplayName: {
        type: String,
        required: true
    },
    
    Gender: {
        type: String,
        required: true
    },
    
    DOB:{
        type: String,
        required: true
    },
    
    Email: {
        type: String,
        required: true
    },
    
    Mobile: {
        type: String,
        required: true
    },
    
    Destination: {
        type: String,
        required: true
    },
    
    EmpType: {
        type: String,
        required: true
    },
    
    JoinedDate: {
        type: String,
        required: true
    },
    
    Experiance: {
        type: String,
        required: true
    },
    
    Salary: {
        type: String,
        required: true
    },
    
    Notes: {
        type: String,
        required: true
    }
})

const Employee = mongoose.model( "Employee",EmployeeSchema);

module.exports = Employee;