//ฟังก์ชันทั้งสองทำงานเหมือนกัน แต่เขียนต่างรูปแบบกัน

const add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3
// แบบสั้นเมื่อมีเพียงคำสั่งเดียว

const subtract = (a, b) => {
    const result = a - b;
    return result;
};
console.log(subtract(4, 2)); // Output: 2
//ใช้เมื่อมีหลายขั้นตอนหลายเงื่อนไข