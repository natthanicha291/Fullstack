//DOM Manipulation คือ การใช้ JavaScript เข้าไปจัดการหรือเปลี่ยนแปลง HTML บนหน้าเว็บไซต์

let heading = document.getElementById("heading");
//ค้นหา HTML ที่มี id="heading" แล้วเก็บไว้ในตัวแปร heading
//heading ชื่อตัวแปรที่เราตั้งเอง
//document หมายถึงหน้าเว็บ getElementById("heading") ค้นหา HTML ที่มี id="heading"
//นำ Element ที่ค้นหาเจอมาเก็บไว้ในตัวแปร heading

heading.innerHTML = "Hello, World!"; //เปลี่ยนเนื้อหาภายใน Element นั้นให้เป็น Hello, World!