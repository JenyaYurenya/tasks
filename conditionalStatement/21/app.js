let rul = prompt("Рулетка");

let message =
  rul < 0
    ? "Зеленый"
    : rul < 11
      ? "Черный!"
      : rul < 19
        ? "Красный"
        : rul < 29
          ? "Черный"
          : rul < 37
            ? "Красный"
            : "Ошибка ввода";

alert(message);
