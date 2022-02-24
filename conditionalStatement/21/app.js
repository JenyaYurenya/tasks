let rul = prompt("Рулетка");


if (rul < 0) {
  alert("Зеленый")
}
else if (rul > 11) {
  alert("Черный")
}
else if (rul < 19) {
  alert("Красный")
}
else if (rul < 29) {
  alert("Черный")
}
else if (rul < 37) {
  alert("Красный")
}
else
  alert("Ошибка ввода")

