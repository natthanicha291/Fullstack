//เส้นรอบรูปของสี่เหลี่ยมผืนผ้า p = 2 * (lenght + width)
function calPeriRec(length, width) {
    return 2 * (length + width);
};

console.log(calPeriRec(6, 7))
console.log(calPeriRec(20, 10))
console.log(calPeriRec(2, 9))