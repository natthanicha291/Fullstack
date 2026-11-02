//Callback Function คือ การส่งฟังก์ชันหนึ่งเข้าไปให้อีกฟังก์ชันเรียกใช้

function createQuote(quote, callback) { //callback รับฟังก์ชันอีกตัวหนึ่ง
    let myQuote = "Like I always say, " + quote; //myQuote นำข้อความมาต่อกัน
    callback(myQuote); //เรียกฟังก์ชันที่ส่งเข้ามา พร้อมส่ง myQuote ไปให้
}

//ฟังก์ชัน logQuote รับข้อความ แล้วแสดงข้อความนั้นต่อด้วย Yes..
function logQuote(quote) {
    console.log(quote + 'Yes..');
}

createQuote("you will getting better!", logQuote);