![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1

In ```app.js``` create a ```Tree``` function using a constructor. Give it one property: ```type``` that will store the type of the tree.

Now, based on the Tree constructor create 2-3 instances (objects) that will be different trees.

Add a ```bloom()``` method to the prototype of the constructor that will return the text: "I am blooming".


## Exercise 2

Create an appropriate function for each point and name it according to the instructions below.

 * **1. Getting information from the data attribute:**
    - find an element with the ```menu``` **id**,
    - create a ```getDataInfo(element)``` function and pass the element you found to this function as an argument,
    - create a new array within the function and fill it with values extracted from the data-info attribute of each **li** element. Note that **li** elements are the children of the element with ```menu``` id,
    - return the new array.

* **2. Searching for element by id:**
    - find an element with the ```main-container``` **id**.
    - create a ```getElementClass(element)``` function and pass the found element to the function as an argument,
    - return an array containing class names of this element.

* **3. Searching for element by class:**
    - find an element with the ```pink-color``` **class**,
    - create a ```getElementText(element)``` function and pass the found element to this function as an argument,
    - return the text contained in this element.

* **4. Searching for element by class:**
    - find elements with the ```images``` **class**,
    - create a ```getElementAlt(element)``` function and pass the found elements to the function as an argument,
    - create an array within the function and fill it with values extracted from the alt property of each image. Get these attributes from the elements passed as an argument.

* **5. Searching for element by class:**
    - find elements with the ```my-link``` **class**,
    - create a ```getElementHref(element)``` function and pass the found elements to the function as an argument,
    - create an array within the function and fill it with values extracted from the href property of each link. Get these attributes from the elements passed as an argument.
