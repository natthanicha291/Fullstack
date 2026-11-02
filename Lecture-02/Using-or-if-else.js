//การใช้ตัวดำเนินการ || (OR) ร่วมกับ if-else if-else
//| ใช้ตรวจสอบว่าเงื่อนไขอย่างน้อยหนึ่งข้อเป็นจริงหรือไม่
const status = 500;

if (status === 200) {
    console.log("OK");
} else if (status === 400 || status === 500) {
    console.log("Error");
} else {
    console.log("Unknown status");
}