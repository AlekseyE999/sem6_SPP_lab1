const tasks = [];
module.exports = class Task {
    constructor(subject, number, status, deadline, attach) {
        this.subject = subject;
        this.number = number;
        this.status = status;
        this.deadline = deadline;
        this.attach = attach;
    }

    save() {
        tasks.push(this);
    }

    static getAll() {
        return tasks;
    }
}