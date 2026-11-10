const prisma = require("../prisma");

exports.getAllStudents = async (req, res) => {
    try {
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: { name: { contains: search } },
            orderBy: { id: "asc" },
        });
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const student = await prisma.student.findUnique({
            where: { id },
        });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json({ message: "Please fill in all information" });
        }

        const newStudent = await prisma.student.create({
            data: { name, age: Number(age), major },
        });

        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: "Fail" });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, age, major } = req.body;

        const updated = await prisma.student.update({
            where: { id },
            data: {
                name,
                age: age !== undefined ? Number(age) : undefined,
                major,
            },
        });
        res.json(updated);
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(500).json({ message: "Fail" });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await prisma.student.delete({ where: { id } });
        res.json({ message: "Student deleted" });
    } catch (error) {
        if (error.code === "P2025") {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(500).json({ message: "Fail" });
    }
};