//การเขียนฟังก์ชันแบบลูกศร
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); //output 7

const printHello = () => { //ฟังก์ชันที่ไม่รับค่า
    console.log("hello"); //output hello
}
printHello();

//ฟังก์ชันรับน้ำหนักกระเป๋า
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilogram.`);
};
checkWeight(25);

const multiply = (a, b) => a * b;
console.log(multiply(2, 30));