const router = require("express").Router();
let Employee = require("../models/Employee");
const { v4: uuidv4 } = require("uuid");
const service = require('./supportFunction');

// create employee
router.route("/createEmp").post(async (req, res) => {
    const newOne = await service.createUserEmployeeId();

    const EmpId = newOne;
    const FullName = req.body.FullName;
    const NameWithInitials = req.body.NameWithInitials;
    const DisplayName = req.body.DisplayName;
    const Gender = req.body.Gender;
    const DOB = req.body.DOB;
    const Email = req.body.Email;
    const Mobile = req.body.Mobile;
    const Destination = req.body.Destination;
    const EmpType = req.body.EmpType;
    const JoinedDate = req.body.JoinedDate;
    const Experiance = req.body.Experiance;
    const Salary = req.body.Salary;
    const Notes = req.body.Notes;

    const newEmployee = await new Employee({
        EmpId,
        FullName,
        NameWithInitials,
        DisplayName,
        Gender,
        DOB,
        Email,
        Mobile,
        Destination,
        EmpType,
        JoinedDate,
        Experiance,
        Salary,
        Notes,
    })

    newEmployee.save().then(() => {
        res.json("Employee Added")
    }).catch((err) => {
        console.log(err);
    })

})


//get employees
router.route("/allEmp").get((req, res) => {
    Employee.find().then((employees) => {
        res.json(employees)
    }).catch((err) => {
        console.log(err)
    })
})

//get one employee
router.route("/getEmp/:id").get(async (req, res) => {
    let empId = req.params.id;
    console.log("getEMP..");

    await Employee.findById(empId).then((employee) => {
        res.json(employee)
    }).catch((err) => {
        console.log(err)
    })
})

// filter employees
router.route("/filter/:EmpType").get(async (req, res) => {
    let EmpType = req.params.EmpType;

    console.log("filter " + EmpType);

    await Employee.find({
        EmpType: {
            $regex: '.*' + EmpType + '.*',
            $options: 'i'
        }
    }).then((employee) => {
        res.json(employee);
    }).catch((err) => {
        console.log(err);
    })

})


// update employee
router.route("/updateEmp/:id").put(async (req, res) => {
    console.log("update...");
    let empId = req.params.id;
    const {
        EmpId,
        FullName,
        NameWithInitials,
        DisplayName,
        Gender,
        DOB,
        Email,
        Mobile,
        Destination,
        EmpType,
        JoinedDate,
        Experiance,
        Salary,
        Notes
    } = req.body;

    const updateEmployee = {
        EmpId,
        FullName,
        NameWithInitials,
        DisplayName,
        Gender,
        DOB,
        Email,
        Mobile,
        Destination,
        EmpType,
        JoinedDate,
        Experiance,
        Salary,
        Notes
    }

    await Employee.findByIdAndUpdate(empId, updateEmployee).then((employee) => {
        res.json(employee)
    }).catch((err) => {
        console.log(err)
    })
})


// delete employee
router.route("/deleteEmp/:id").delete(async (req, res) => {
    let EmpId = req.params.id;
    console.log(EmpId)
    console.log("delete employee", req.body);

    if (EmpId) {
        await Employee.findOneAndDelete(EmpId).then((employee) => {
            res.json(employee)
        }).catch((err) => {
            console.log(err);
        })
    } else {
        console.log("invalid request");
    }
});


module.exports = router;