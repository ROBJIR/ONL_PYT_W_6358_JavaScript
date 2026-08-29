![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer



Create an abstract class `Vehicle`. Create three objects:

1. `boat`
2. `car`
3. `plane`

based on appropriate classes that inherit from `Vehicle`. In appropriate classes, add methods that will write in the console the information that distinguish each vehicle. Do it in such a way that the `boat` object cannot ride or fly, etc.


## Exercise 2



### Part 1

Create a class ```Duck```. This will be an abstract class from which other ducks will inherit. Within this class, create a constructor and methods:

* constructor - sets the type of duck to "ordinary duck", e.g. `this.type = "ordinary duck"`
* sound() - prints "Quack quack"
* swim() - prints "I'm swimming..."
* print() - prints "Looks like ordinary duck."
Use the `type` setting to print the duck type.

Create an object ```donaldDuck```. Call all the methods on it.


### Part 2

Based on the ```Duck``` class, create another class named ```WildDuck```. Overwrite the constructor, so that when calling the ```print()``` method, the duck type will change to "wild". Create an object ```daffyDuck```. Call all the methods on it.


### Part 3

Based on the ```Duck``` class, create another class named ```MallardDuck```. Overwrite the constructor, so that when calling the ```print()``` method, the duck type will change to "mallard". Create an object ```daisyDuck```. Call all the methods on it.


### Part 4

You created the ```Duck``` class. All ducks can inherit from it. Your task now is to add a ```fly()``` method to an appropriate class. The method should write "I'm flying..." in the console.


### Part 5

Based on the ```Duck``` class, create another class named ```RubberDuck```. Overwrite the constructor, so that when calling the ```print()``` method, the duck type changes to "rubber". Create an object ```howardTheDuck```. Call  all the methods on it. Do you see anything disturbing?

The rubber duck can fly!

Overwrite the ```fly()``` method, so that when it is called on a rubber duck, the text "Rubber ducks can't fly!" will appear in the console.


## Exercise 3



On the HTML page, there is a form that allows you to add different types of products to a list.

In the JS file you have a `Food` class prepared - as an abstract class. In the constructor, the class sets the product name (name), quantity of proteins (protein), quantity of carbohydrates (carbs) and quantity of fat (fat) in the product, in grams.


Write code that will cause the following actions will be performed after completing the form and clicking the "Add" button:
 * the new product will be added to the ```ul``` list with ```products``` id,
 * a new object will be created based on an appropriate class that inherits from `Food`. If the product contains more than 250 kcal, it will be created as a `FastFood` object. If less than 250 kcal, it will be created as a `FatFreeFood` class object.
 * add the created object to the ```foods``` array and display the array in the console.

You can calculate calories using the following formula:
```plain
1g protein is 4 kcal
1g fat is 9 kcal
1g carbohydrates is 4 kcal
```

Example:
After adding a hot_dog product and filling in its nutritional data in the form, an object will be created based on the class `FastFood` e.g. in the following way: ```new FastFood('Hot Dog', 10, 4.2, 26)```, which after calculation:
10 * 4 + 4.2 * 4 + 9 * 26 gives us 280.8 kcal.

Based on the form, create several objects as you see below:

```JavaScript
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
```
Write a method called print (in the appropriate class), which will print product information.
