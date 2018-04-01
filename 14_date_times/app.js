let val;

const today = new Date();
let birthday = new Date('11-10-1992 04:30');
birthday = new Date('November 10 1992');
birthday = new Date('11/10/1992');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();

birthday.setMonth('11');
birthday.setDate('26');
birthday.setFullYear('1988');
birthday.setHours('12');
birthday.setMinutes('30');
birthday.setSeconds('59');

console.log(birthday);