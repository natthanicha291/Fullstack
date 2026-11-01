//การตรวจสอบชนิดของข้อมูล (Data Types) ใน JavaScript
const people = ["John", "Jane", "Mary", "Mark"]; // Array เก็บข้อมูลหลายค่าในตัวแปรเดียว
const one = 1; // Number
const str = "Hello, World!"; // String
const b = true; // Boolean ค่าจริงหรือเท็จ
const employee = {  //Object เก็บข้อมูลหลายค่าในตัวแปรเดียว
    firstName: "Thiwakorn",
    lastName: "Homchit",
};

function sayHello(person) { //ฟังก์ชันนี้รับข้อมูลเข้ามา 1 ค่า ผ่านตัวแปร person แล้วนำไปแสดงข้อความ
    console.log("Hello, " + person + "!");
}

console.log(typeof people); //typeof ใช้ตรวจสอบชนิดข้อมูล
//ทำไม output ไม่ใช่ Array เพราะใน JavaScript typeof จะคืนค่า "object" เมื่อใช้กับ Array ด้วย

console.log(typeof sayHello);
console.log(employee instanceof Array); //instanceof ใช้ตรวจสอบว่า Object เป็นประเภทที่ระบุหรือไม่
//ตรวจสอบว่า employee เป็น Array หรือไม่

sayHello(employee.firstName);