let Employee = require("../models/Employee");
module.exports = {
    createUserEmployeeId: function () {
        const response = Employee.find().then((employees) => {
            if (employees.length > 0) {
                let last = employees.length + 1;
                let empId = last;
                return empId;
            }
            else if (employees.length <= 0) {
                const empId = 1;
                return empId;
            }
        })
        return response;
    }
}