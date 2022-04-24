const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "attaches");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname || " ");
    }
});

const app = express();
app.set("view engine", "ejs");

app.use(multer({ storage: storageConfig }).single("filedata"));

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const tasksController = require("./Middleware/TaskMiddleware");

app.post("/add", urlencodedParser, tasksController.addTask);

app.get("/", tasksController.getTasks);

app.listen(3000);