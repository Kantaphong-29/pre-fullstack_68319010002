const prisma = require('../prisma');

// ดึงข้อมูลทั้งหมด และ ค้นหาจากชื่อ
exports.getAllStudents = async (req, res) => {
    try {
        const search = req.query.search || '';
        const students = await prisma.student.findMany({
            where: { name: { contains: search}},
            orderBy: { id: 'asc'},
        });
        res.json(students); 
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
}