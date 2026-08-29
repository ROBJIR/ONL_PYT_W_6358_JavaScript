![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Write a function named ```distFromAverage```, which will take only one argument - an array. This function should also return an array. The returned array should contain the difference between the number in a particular cell and the average value of the array.
E.g.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (average of the input array is 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (average of the input array is 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (average of the input array is 5)
```


## Exercise 2

Create an array with a list of your favorite fruits. Then:

1. Print the first fruit in the console.
2. Print the last fruit in the console (use the ```length``` attribute).
3. Print all fruits using a loop (use the ```length``` attribute).


## Exercise 3

Look at the file `js/app.js`. There is a sample function that creates an array of numbers. Unfortunately it does not work well. Find the error and fix it so that the function worked properly.


## Exercise 4

Write a function named ```printTable(array)```, which takes only one parameter - an array. Then, using the appropriate array method, iterate (go through) each element and write its value in the console.


## Exercise 5

Write a function named ```multiply(array)```. The function should take only one argument - an array. Then a function named ```multiply``` should multiply all the numbers in the array using an appropriate array method and return the result.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```


## Exercise 6

Write a function named ```getEvenAverage``` which will take only one argument - an array. This function should return the average of the **even** numbers from this array. For the sake of simplicity, you can assume that the array only contains numbers. If there are no even numbers in the array, the function should return null.

```JavaScript
getEvenAverage([1,2,3,4,5,6,7]) => 4
getEvenAverage([1,1,1,1]) => null
getEvenAverage([2,8,3,7,4]) => 4.666
```


## Exercise 7

Write a function named ```sortArray``` which will take only one argument - an array of integers. This function should return an array of elements sorted in ascending order. You can use array methods.

```JavaScript
sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
```


## Exercise 8

Write a function named ```addArrays``` which should take two arguments - two arrays of integers. This function should return an array that will be the result of adding elements with the same index. If arrays are not equal, the excessive elements are copied to the output array.

```JavaScript
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]
```
