//undefined ตัวแปรยังไม่มีค่า
function test(T) {  //T = Undefined
    if (T === undefined) {
        return "Undefined value";
    }   //ถ้า T มีค่าเป็น undefined ให้คืนค่าเป็น "Undefined value"
    return T;
}
 let x; //ประกาศตัวแปร x แต่ยังไม่ได้กำหนดค่าให้มัน จึงมีค่าเป็น undefined
 console.log(test(x));  //test(x) เรียกฟังก์ชัน test และส่งค่า x เข้าไป