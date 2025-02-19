const express = require("express");

const router = express.Router();

const Employees = require("../models/employee");
const employee = require("../models/employee");

//test
router.get("/test", (req, res) => res.send("Employee routes is working"));

router.post("/", (req, res) => {
  Employees.create(req.body)
    .then(() => res.json({ msg: "Employee addred successfully" }))
    .catch(() => res.status(400).json({ msg: "Employee adding faild" }));
});

router.get("/", (req, res) => {
  Employees.find()
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({ msg: "No employees found" }));
});

router.get("/:id", (req, res) => {
  Employees.findById(req.params.id)
    .then((employees) => res.json(employees))
    .catch(() => res.status(400).json({ msg: "cannot find this employee" }));
});

router.put("/:id", (req, res) => {
  Employees.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ msg: "Update Successfully!" }))
    .catch(() => res.status(400).json({ msg: "Update Faild" }));
});

router.delete("/:id", (req, res) => {
  Employees.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Delete Successfully" }))
    .catch(() => res.status(400).json({ msg: "Connot be Delete" }));
});

module.exports = router;
