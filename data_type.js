let str = "Hello";  //string
str = "World";

let num = 10;  //number

let bool = true;  //boolean ค่าจริงหรือเท็จ

let obj = { name: "John", age: 30 };  //object ข้อมูลที่รวมกันเป็นกลุ่ม เช่น ชื่อและอายุของบุคคล

let arr = [1, 2, 3, 4, 5];  //array

let func = function() {  //function เรียกใช้งานได้หลายครั้ง และสามารถรับค่าพารามิเตอร์และส่งค่ากลับได้
    return "This is a function"; 
//ลองนึกถึงเครื่องชงกาแฟ เราสร้างเครื่องไว้ครั้งเดียว พอกดปุ่ม เครื่องก็ทำงานตามขั้นตอนที่กำหนดไว้
}   //Function ก็คล้ายกัน เราสร้างชุดคำสั่งไว้ แล้วเรียกใช้เมื่อเราต้องการ

let symbol = Symbol("id");  //symbol ค่าที่ไม่ซ้ำกัน
symbol = Symbol("ID");

console.log(str);
console.log(num);
console.log(bool);
console.log(obj);
console.log(arr);
console.log(func());
console.log(symbol);