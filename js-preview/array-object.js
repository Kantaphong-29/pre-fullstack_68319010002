// อาร์เรย์ และ ออบเจคด์

// Array
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];
console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการแสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน`);

// Object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major: "Information Technology",
};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

// Array and Object
const studentList = [
    {id: 101, name: "Ice", age: 20, major: "IT"},
    {id: 102, name: "Ball", age: 19, major: "CG"},
    {id: 103, name: "Korn", age: 30, major: "IT PUBG"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการแสดงผล
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age}`);
console.log(`ข้อมูลที่ใช้ในการ map : ${names}`);

// filter : คัดกรองเฉพาะตัวที่เลือกและตรงเงื่อนไข
const isStudents = studentList.filter((s) => s.id === 102);
console.log(`กรองช้อมูล : ${isStudents.length}`);

// find : หาตัวแรก(ตัวอักษร ตัวเลข)ที่ตรงเงื่อนไข
const found = studentList.find((s) => s.id === 103);
console.log("ผลการค้นหา", found);
console.log(`ผลการค้นหา ${found.name}`);

// ค้นหาจากฃื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "ba";
const searchResult = studentList.filter((s) => s.name.toLowerCase().includes(keyword.toLowerCase()));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.name));

// ทีนี้ นศ. ปรับให้ลองค้นหาชื่อสาขา และให้แสดงข้อมูลทั้งหมดที่ตรงกับการพิมพ์ชื่อสาขาแค่บางอักขระ (keyword : i)
const keyword2 = "i";
const searchResult2 = studentList.filter((s) => s.major.toLowerCase().includes(keyword2.toLowerCase()));
console.log(`ผลการค้นหา : ${keyword2}`, searchResult2.map((s) => s.major));
