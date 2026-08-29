![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Run the page `index.html`. This page contains two elements with the classes ```parent``` and ```children```.
Create an event that will show the ```children``` element after hovering over the ```parent``` element. Note that display: none is set for the ```children``` element in CSS.
Create a second event that will hide the ```children``` element back after the mouse is moved away from the elements.
Remember not to hide all the elements at once.


## Exercise 2

Run the page prepared for this exercise. In the console, check it for errors. Then:
  1. Move the ```<script>``` tag to the ```<head>``` section. Check what has changed in the way the script works. Try to explain it.
  2. Create a ```DOMContentLoaded``` event for the ```document```  element and move the code to the inside of this event. Did it improve the situation?
  3. Move the ```<script>``` tag back to the end of the file - is there any difference?
  Write your observations in comments.


## Exercise 3

Run the page prepared for the exercise. There is a button on the page. Attach an event to it which will cause the console to display "Hooray! It works!" after clicking on the button.


## Exercise 4

Run the page prepared for the exercise. The page contains three buttons and one counter. Write one common event for all buttons, which will increase the value of the counter by one when you click on a button.


## Exercise 5

Run the page prepared for the exercise. The page contains three buttons and three counters (elements ```span``` with the ```counter``` class). Add an event to each button, which will cause a counter to increase its value by one after clicking on the button that is assigned to it.


## Exercise 6

Run the page prepared for the exercise. The page contains three ```div``` elements. Write **one** common event for all of them that will only change the background color in the clicked **div**. Use the keyword ```this```.

**Hint**:
Use the code below to get a random color:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```


## Exercise 7

Run the page prepared for the exercise. There is one **div** element on the page. Write an event for it, which will print out the position of the mouse cursor when it hovers over this element.
Search for both global (that is, the distance from the top left corner of the window) and local (that is, the distance from the top left corner of the element) cursor position.


## Exercise 8

Run the page prepared for the exercise. The page contains nested elements. Events are added to each one of them. Use ```stopPropagation``` and ```stopImmediatePropagation``` methods so that:

1. Events for element one and two were triggered, but not for element three.
2. All events for element four and the first event for element five were triggered.


## Exercise 9

Run the page prepared for the exercise.
There are two elements on the page that show the size of the window. Add an event to the ```window``` element, which will cause these elements to show correct values (`innerWidth`, `innerHeight`) even after the window has been scaled (`resize`).


## Exercise 10

Run the page prepared for the exercise. Read the code carefully and read the comments.
Concentrate on each line of code. Consider the following situation:
You need to use the element with id ```b``` inside the ```innerFuncOne``` function to change the element's color.
How will you do that? Put your answer in a comment.
