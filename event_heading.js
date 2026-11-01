//event heading คือ การใช้ JavaScript เพื่อจัดการกับเหตุการณ์ (Event) ที่เกิดขึ้นบนหน้าเว็บ
//เช่น การคลิกปุ่ม การเลื่อนเมาส์ หรือการกรอกข้อมูลในฟอร์ม

let button = document.getElementById("MyButton");
//ค้นหาปุ่ม HTML ที่มี id="MyButton" แล้วเก็บไว้ในตัวแปร button

button.addEventListener("click", function(){
    alert("Button clicked!"); //แสดงกล่องข้อความแจ้งเตือนว่า Button clicked!
});   
//addEventListener() ใช้ตรวจจับเหตุการณ์ click" หมายถึงเหตุการณ์เมื่อมีคนคลิก
//function() คือคำสั่งที่จะให้ทำงานเมื่อเกิดเหตุการณ์นั้น