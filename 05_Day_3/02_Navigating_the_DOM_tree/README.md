![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Find and save the following elements to variables:
1. Element with ```first``` **class** -> its first child -> its third child.
2. Element o  ```second``` **id** -> its parent -> its fourth child.
3. Element with a ```data-ex``` **attribute** set to ```third``` -> its grandfather -> its last child -> its first child -> its middle child (to get the middle element, divide the number of children by two and round it down).
4. **Div** with ```fourth``` **class** -> its parent -> its first child that is an ```article``` tag -> its second child that is a ```<p>``` tag.

All these elements have the ```data-answer``` attribute set to the exercise number for which they are the answer.


## Exercise 2 - done with the lecturer

There are several buttons in the file (they are styled links). When you click on any of them - the element that is immediately after it should disappear (if it was visible) or appear (if it was invisible).
The solution must meet the following criteria:
1. The same event must be set on all buttons.
2. The next element has to be searched depending on the position of ```this```.
3. The code must work correctly and not generate errors (remember to check if the next element is not ```null```).


## Exercise 3

There are several buttons in the file (they are styled links). After clicking on any of them its parent has to change the background color (to a random one).
The solution must meet the following criteria:
1. All buttons must have the same event.
2. The parent has to be searched depending on the position of ```this```.
3. The background color must be random.

Hint:
To get a random color, use the code below:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```


## Exercise 4

There are three lists in the file (each embedded in a ```div``` element). After hovering the mouse over a ```div``` element, the background colors of its list item elements should change in the following way:
1. The first item element in the list should be red.
2. The last item element in the list should be blue.
3. All other item elements should be green.

The solution must meet the following criteria:
1. The same event must be set for all divs.
2. List item elements have to be searched depending on ```this```.
