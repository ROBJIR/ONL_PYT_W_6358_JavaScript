![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

In the file `js/app.js` create a `Basket` constructor. Based on it, create an object with the following fields:
* products - an array with all the products
* sum - amount to pay for all the products

Add the following methods to the prototype of the constructor:
* `addProduct(name, price)`, which will take the product name and price as parameters. Pass the price as a number, and the name as a string. Place the data as an object in this.products array.
* `showBasket()`, that will show all the products from the basket with their price and the amount to pay.

Call example:

```JavaScript
const aliceBasket = new Basket();
aliceBasket.addProduct("tomato",10);
aliceBasket.addProduct("watermelon",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("mun mushrooms",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
```


## Exercise 2 - done with the lecturer

In the `js/app.js` file you can find a sample constructor for a robot. The constructor expects you to give only the name of the robot.

Methods are added to the function prototype.

Create several robots and look for errors in the written code.

Check in the console how the individual robots and the constructor itself look like.


## Exercise 3

Create a ```Calculator``` constructor for future objects. The constructor should not take any data. Every newly created object should have an empty array that will store the history of operations.

Next, add the following methods using prototype:
  1. ```add(num1, num2)``` - will add two variables and return the result. In the operation history, it will save a string: "added ```num1``` to ```num2``` got ```result```" (of course, with variable values inserted in the right places).
  2. ```multiply(num1, num2)``` - will multiply two variables and return the result. In the operation history, it will save a string: "multiplied ```num1``` with ```num2``` got ```result```" (with variable values inserted in the right places).  
  3. ```subtract(num1, num2)``` - will subtract two variables and return the result. In the operation history, it will save a string: "subtracted ```num1``` from ```num2``` got ```result```" (with variable values inserted in the right places).  
  4. ```divide(num1, num2)``` - will divide two variables and return the result. In the operation history, it will save a string: "divided ```num1``` by ```num2``` got ```result```" (with variable values inserted in the right places).  
  5. ```printOperations()``` - will write all operations saved in the history.
  6. ```clearoperations()``` - will delete the entire history of operations.

**Remember to use ```this```.**
