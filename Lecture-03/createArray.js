//เก็บข้อมูลหลายค่าไว้ในตัวแปรเดียว Array

let arrayLength = 7; //ตัวแปรมีค่าเท่ากับ 7
let arr1 = []; //สร้าง Array ว่างไม่มีสมาชิก
let arr2 = Array(arrayLength); //สร้าง Array ที่มีความยาว 7 ช่อง แต่ยังไม่มีข้อมูล
let arr3 = ['A', false, 5] //สร้าง Array ที่มีข้อมูล 3 ค่า Str Boolean Number

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr3[0]);
console.log([2]);

//.length ใช้สำหรับนับจำนวนสมาชิกหรือความยาวของ Array