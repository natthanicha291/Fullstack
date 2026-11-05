//.split() แยกข้อความออกเป็นส่วน ๆ แล้วเลือกสมาชิกด้วยตำแหน่ง index

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); //str.split(' ') แยกข้อความตรงช่องว่าง
console.log(words[3]);

const chars = str.split(''); //str.split('') แยกข้อความเป็นตัวอักษรทีละตัว
console.log(chars[8]);   