const message = "Hello";
const place = "World";

console.log('Hello, World!'); //พิมพ์ข้อความออกมาตรง ๆ ไม่ได้ดึงค่าจากตัวแปร
console.log('Hello, %s!', place); //ใช้ %s แทรกตัวแปร
//%s คือตำแหน่งสำหรับแทนที่ข้อความ (String) place คือค่าที่จะนำมาแทน %s

console.log(`${message}, ${place}!`); //ใช้ Template Literals แทรกตัวแปร
//Template Literals นิยมใช้เพราะเขียนง่าย
// และสามารถแทรกตัวแปรหรือคำนวณค่าภายใน $${variable} ได้ด้วย