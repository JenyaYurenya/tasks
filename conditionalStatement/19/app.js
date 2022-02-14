let a= prompt("Введите число: ")
let b= prompt("Введите число: ")
let c= prompt("Введите число: ")
if (a != b != c || a != c != b)
alert('Разносторонний')
else if ( a == b == c)
{
    alert( 'Равносторонний' );
  } 
  else {
    alert( 'Равнобедренный' ); 
  }