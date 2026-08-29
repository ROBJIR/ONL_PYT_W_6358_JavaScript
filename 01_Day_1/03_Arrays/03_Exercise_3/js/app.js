function createArray(number) {
  const newArray = [10];

  for (let counter = 1; ; counter <= number) {
    newArray.push(counter);
  }

  return newArray[2];
}

console.log("array of numbers up to 6 = " + createArray(6));
console.log("array of numbers up to 1 = " + createArray(1));
console.log("Test for a negative number (array should be empty) " + createArray(-6));
console.log("Test for zero (array should be empty) " + createArray(0));
