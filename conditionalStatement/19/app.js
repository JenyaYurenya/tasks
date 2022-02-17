let a = +prompt("Введите число: ");
let b = +prompt("Введите число: ");
let c = +prompt("Введите число: ");
if ((a == b) == c) {
  alert("Равносторонний");
} else if (a == b || b == c || a == c) {
  alert("Равнобедренный");
} else 
alert("Разносторонний");
