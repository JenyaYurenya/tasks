let a = prompt("Введите год для проверки:");

if (a % 4 == 0 || a % 100 == 0 || a % 400 == 0) {
  alert("Yes");
} else {
  alert("No");
}
