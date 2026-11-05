//คำนวณเส้นรอบวงกลม
function circumference(r) {
    if (Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

    console.log(circumference("4.567abcdefgh"));

    console.log(circumference("abcdefgh"));

//Number.parseFloat(r) พยายามอ่านตัวเลขจากข้อความ
//ถ้าอ่านไม่ได้ จะได้ NaN และ return 0 จบฟังก์ชันทันที
//ถ้าอ่านได้ จะคำนวณ รัศมี × 2 × π