![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Create an object `car`, create appropriate properties and methods for it.

### Properties:
* `brand`,
* `color`,
* `numberOfKilometers` (initially **0**).

### Methods:
* `printCarinfo()` - the method should print out information about the car (color, make and number of kilometers driven).
* `drive(km)` - which adds the given value to the kilometers driven. Use the keyword ```this``` to refer to the object within the method.

```JavaScript
car.printCarinfo(); => "Black Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Black Mercedes, 20km"
```


## Exercise to do on your own

To the object `car` add an array with a list of inspection dates (they should be simple strings).

Also add the following methods:
 1. a method for adding an entry to this array,
 2. a method that returns all car inspections.

Use the keyword `this` to refer to the object within the method.


## Exercise 2

Analyze the code located in the file `js/app.js`.

There is an object ```calculator``` there which has one method `save(newA,newB)`. The task of this method is to save two numbers for this object in the fields `a` and `b`.

Add methods `sum` and `multiply` so that they return the sum and product of the two numbers set in the method `save`.


## Exercise 3

Create an object `stairs`.

It should have a `step` field with the initial value of 0.

Also add the following methods to the object:
* `up()` which increases the step by 1 (modify step field)
* `down()` which reduces the step by 1 (modify step field)
* `printStep()`, which shows which step we are on.

Call example:
```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep() // 2
```
