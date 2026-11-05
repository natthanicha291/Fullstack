//การใช้ setTimeout() เพื่อหน่วงเวลา 2 วินาที แล้วค่อยแสดงผล
const start = Date.now(); //เวลาเริ่มต้น

console.log('starting timer...');

setTimeout(() => { //รอประมาณ 2 วินาที
    const millis = Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);

}, 2000);