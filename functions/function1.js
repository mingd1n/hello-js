/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}     改写成||形式
*/
let Age = prompt("age?")
function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?')
}
alert(checkAge(Age))