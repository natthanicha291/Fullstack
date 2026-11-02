//การแปลงตัวอักษรให้เป็นตัวพิมพ์เล็ก และการเปรียบเทียบ String
const status = 'error';

//มีค่าเป็น 'error' เมื่อนำมาแปลงเป็นตัวพิมพ์เล็ก
// และเปรียบเทียบกับ 'error' แล้ว เงื่อนไขจึงเป็นจริง
if (status.toLocaleLowerCase() === 'error') { 
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}
//.toLocaleLowerCase() ใช้แปลงตัวอักษรใน String ให้เป็นตัวพิมพ์เล็ก