let accessAllowed;
let num = +prompt(' Число');
if (num > 4) {
  accessAllowed = 'Это число и остаток от деления на 3 равен 0';
}
else if (num) {
  accessAllowed = 'Это число, но остаток от деления на 3 не равен 0';
}
else { console.log("неопознанный язык") }
alert(accessAllowed)





