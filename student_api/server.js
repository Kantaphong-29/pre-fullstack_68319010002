require("dotenv").config();

const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/routers/student.route");
const subjectRoutes = require("./src/routers/subject.route");

const app = express();
const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({meassage : 'runbo'});
});

app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is running localhost:${PORT}`);
});