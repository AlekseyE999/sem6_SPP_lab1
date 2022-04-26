const Task = require("../models/Task.js");

exports.getTasks = function (request, response) {
    response.render("Tasks", {
        tasks: Task.getAll()
    })
};

exports.addTask = function (req, res, next) {
    const subject = req.body.subject;
    const number = req.body.number;
    const status = req.body.status;
    const deadline = req.body.deadline;  
    const attach = req.file?.originalname;
    const task = new Task(subject, number, status, deadline, attach);
    task.save();
    res.redirect("/");
};

