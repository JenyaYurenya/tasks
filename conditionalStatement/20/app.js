let a = +prompt("Введите число: ");
let b = +prompt("Введите число: ");
let c = +prompt("Введите число: ");
if (c == "+") alert(a + b);
if (c == "-") alert(a - b);
if (c == "*") alert(a * b);
if (c == "/")
  if (b == 0) alert("На ноль делить нельзя!");
  else alert(a / b);
else alert("Неверная операция");
