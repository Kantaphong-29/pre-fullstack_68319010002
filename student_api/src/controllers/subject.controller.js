const prisma = require("../prisma");

// GET /subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany({
      orderBy: { id: "asc" },
    });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /subjects/:id
const getSubjectById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const subject = await prisma.subject.findUnique({ where: { id } });

    if (!subject) {
      return res.status(404).json({ message: "ไม่พบรายวิชา" });
    }
    res.json(subject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /subjects
const createSubject = async (req, res) => {
  try {
    const {
      subjectCode,
      name,
      objective,
      description,
      theoryHour,
      practiceHour,
      credit,
      teacher,
    } = req.body;

    if (!subjectCode || !name || !objective || !description || credit === undefined || !teacher) {
      return res.status(400).json({ message: "กรอกข้อมูลไม่ครบ" });
    }

    const subject = await prisma.subject.create({
      data: {
        subjectCode,
        name,
        objective,
        description,
        theoryHour: Number(theoryHour) || 0,
        practiceHour: Number(practiceHour) || 0,
        credit: Number(credit),
        teacher,
      },
    });
    res.status(201).json(subject);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "รหัสวิชานี้มีอยู่แล้ว" });
    }
    res.status(500).json({ message: error.message });
  }
};

// PUT /subjects/:id
const updateSubject = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {
      subjectCode,
      name,
      objective,
      description,
      theoryHour,
      practiceHour,
      credit,
      teacher,
    } = req.body;

    const subject = await prisma.subject.update({
      where: { id },
      data: {
        subjectCode,
        name,
        objective,
        description,
        theoryHour: theoryHour !== undefined ? Number(theoryHour) : undefined,
        practiceHour: practiceHour !== undefined ? Number(practiceHour) : undefined,
        credit: credit !== undefined ? Number(credit) : undefined,
        teacher,
      },
    });
    res.json(subject);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "ไม่พบรายวิชา" });
    }
    if (error.code === "P2002") {
      return res.status(409).json({ message: "รหัสวิชานี้มีอยู่แล้ว" });
    }
    res.status(500).json({ message: error.message });
  }
};

// DELETE /subjects/:id
const deleteSubject = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await prisma.subject.delete({ where: { id } });
    res.json({ message: "ลบรายวิชาเรียบร้อย" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "ไม่พบรายวิชา" });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};