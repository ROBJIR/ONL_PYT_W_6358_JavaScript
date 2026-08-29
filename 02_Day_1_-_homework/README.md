![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1

Write a function named `getNumber`, which will take two arguments: a number and an array. This function will return `true` or `false`, depending on whether the passed number is an element of the passed array, or not.

```JavaScript
getNumber(2, [33, 54, 2, 1, 4, 100]) => true
getNumber(5, [33, 54, 2, 1, 4, 100] ) => false
```


## Exercise 2

Write a function named `addTheSameNumbers` that will take two parameters: a number and an array. The function should return the sum of all array elements that are equal to the number passed as the first argument of the function.

If the number passed as the first argument of the function does not appear in the array at all, return `null`.

```JavaScript
addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) => 14
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100] ) => 9
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0] ) => 0
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46] ) => null
```


## Exercise 3

In the file `js/app.js` there is an array of objects named `planets`. 

There are 8 planets of the Solar System in it, along with the number of moons they have.

Write a ```sortPlanet(planets)``` function that will **return** a new array with the number of moons sorted in descending order (starting with Jupiter, and ending with Venus).

Print out the sorted array in the console.


## Exercise 4 - additional

Write a function named `factors` that will take one argument only: a number greater than **0**.

The function should return an array with all divisors of the given number (in descending order).

If the number is less than or equal to **0**, the function should return an empty array.

```JavaScript
factors(2) => [2, 1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```


## Exercise 5 - additional

Write a function named `getMissingElement` that will accept one argument: an array containing integers in ascending order.

The function should return the first missing integer (in other words, the place where the values of array elements increase by 2 instead of 1).

If there are no missing integers in the array, the function should return `null`.

```JavaScript
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]) => -1
```


## Exercise 6 - additional

Write a function named `getLastNumbers` that will take two parameters: a number and an array.

The function should return a new array containing as many last elements of the passed array as the value of the first parameter (the number) states.

If there is no first parameter or it is not a number, the function should return an empty array.

```JavaScript
getLastNumbers(2, [1,2,3,4,5,6,7]) => [6, 7]
getLastNumbers(4, [6,7,8,10,11,12,13,14,15]) => [12, 13, 14, 15]
getLastNumbers([-4,-3,-2,0,1,2,3,4]) => []
getLastNumbers('alice', [-4,-3,-2,0,1,2,3,4]) => []
```
