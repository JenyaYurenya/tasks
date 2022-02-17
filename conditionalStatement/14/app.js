let number = prompt("Введите число: ");

if (number > 999 && number < 10000 && (number % 7 == 0 || number % 17 == 0)) {
  alert("Yes");
} else {
  alert("No");
}
