//Create a function that takes an equation(e.g."1+1"),and returns the answer.
//Examples equation("1+1")->2 equation("7*4-2")->26 equation("1+1+1+1+1")->5
//รับสมการทางคณิตศาสตร์เข้ามาเป็นข้อความ (String) แล้วคำนวณและส่งค่าคำตอบกลับไป

function equation(eq) {
    return eval(eq);
}

console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));