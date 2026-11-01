//Template Literals คือ การสร้างข้อความที่แทรกตัวแปรได้
console.log("\n******Concatenation with template literals******\n");

let str1 = "JavaScript";
let str2 = "fun";

console.log(`I am writing code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}`);

console.log("\n******Expressions in template literals******\n");

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
//สิ่งที่อยู่ใน ${} ไม่จำเป็นต้องเป็นตัวแปรอย่างเดียว แต่สามารถเป็นการคำนวณได้ด้วย

console.log(`The opposite of true is ${!bool1}`);

//Backtick สามารถแทรกตัวแปรและคำสั่งคำนวณลงในข้อความได้โดยตรง 
//แต่เครื่องหมาย ' ' และ " " ทำไม่ได้