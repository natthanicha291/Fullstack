let plusFive = (num) => {
    return num + 5;
}

let f = plusFive; //f อ้างถึงฟังก์ชันเดียวกับ plusFive

console.log(plusFive(3));
console.log(f(9));