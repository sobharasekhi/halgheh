let sum = 0;
for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 10) + 1;
  sum += num;
}
console.log("جمع اعداد رندوم: " + sum);