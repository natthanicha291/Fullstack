//ฟังก์ชันเป็นเครื่องจักรที่รับข้อมูลเข้ามา แล้วทำงานตามคำสั่งที่เรากำหนดไว้

function printHello(name) { //name คือ Parameter หรือช่องรับข้อมูล
    console.log("Hello"+name) //output HelloThiwakorn
    return name +"Hello";
}

console.log(printHello.name) //output printHello

//การเรียกใช้ฟังก์ชัน
let result = printHello("Thiwakorn");
console.log(result); //output ThiwakornHello