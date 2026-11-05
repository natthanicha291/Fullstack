//reverseแบบสั้น
function reverseString(value) {

    const reversedValue = value.split('').reverse().join('')
    return reversedValue;
}

console.log(reverseString("Hello JavaScript"));

//split('') แยกข้อความเป็นตัวอักษรทีละตัว
//reverse() กลับลำดับสมาชิกในอาร์เรย์
//join('') นำตัวอักษรทั้งหมดมาต่อกันเป็นข้อความ โดยไม่ใส่ตัวคั่น