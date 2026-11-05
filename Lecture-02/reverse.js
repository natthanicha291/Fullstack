//กลับลำดับตัวอักษรในข้อความ
function reverseStr(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    }); //นำตัวอักษรใหม่ไป ต่อข้างหน้า ข้อความที่สะสมไว้ จึงกลับลำดับได้

    return reversedValue
}

console.log(reverseStr("Reverse Me"));

//alue.split("") แยกข้อความ เป็นตัวอักษรทีละตัว รวมถึงช่องว่าง
//.forEach() วนอ่านตัวอักษรทีละตัว โดยตัวแปร char คือตัวอักษรที่กำลังอ่าน