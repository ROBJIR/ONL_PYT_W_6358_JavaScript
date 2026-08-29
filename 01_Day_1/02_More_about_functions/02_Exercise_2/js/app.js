function callOtherFunction(nameOfFunction) {
  console.log("Hi, I am a function named 'callOtherFunction' and call a function that someone threw to me as a parameter");

  const randomNumber1 = Math.random() * 20;
  const randomNumber2 = Math.random() * 10;
  nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
  console.log("First number:", a);
  console.log("Second number", b);
  console.log("Result", a + b);
});
