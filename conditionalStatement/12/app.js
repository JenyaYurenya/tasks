let age = +prompt("Возраст?");

let message =
age < 14
? "Детство!"
: age < 25
? "молодость;!"
: age < 60
? "Зрелость!"
: age < 61
? "Старость!"
: "Старость!";

alert(message);
