let a= prompt("Введите число: ")
let b= prompt("Введите число: ")
let c= prompt("Введите число: ")

if ((c >= (a + b)) || (b >= (a + c)) && (a >= (b + c)))
{
    alert( 'Yes' );
  } 
  else {
    alert( 'No' ); 
  }