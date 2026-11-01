//การแปลงชนิดข้อมูล
let num1 = '150';
let flo1 = '1.50';

console.log("******Converting strings to integers******");
console.log(parseInt('100')); //parseInt() อ่านข้อความให้เป็นจำนวนเต็ม
console.log(parseInt(num1));
console.log(parseInt('ABC')); //แปลงเป็นตัวเลขไม่ได้ จะได้ NaN (Not a Number)
console.log(parseInt('0xF')); //แปลงเลขฐาน 16 เป็นเลขฐาน 10

console.log("******Converting strings to float******");
console.log(parseFloat('1.25abc')); //parseFloat() อ่านข้อความให้เป็นจำนวนทศนิยม
console.log(parseFloat(flo1)); 
console.log(parseFloat('ABC')); //แปลงเป็นตัวเลขไม่ได้ จะได้ NaN (Not a Number)

console.log("******More Conversion Examples******");
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));
console.log(parseInt(`${1 + 1}`));

console.log("******Converting numbers to strings******");
console.log(num1.toString()); //toString() แปลงตัวเลขเป็นข้อความ
console.log(flo1.toString()); 
console.log((100).toString());