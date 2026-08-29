![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Slider

Your task is to create a simple slider. The implementation is divided into steps. Remember to stick exactly to their content and perform them one by one.

### Step 1
Familiarize yourself with the HTML and CSS code added to the task. To make a slider, you usually use a properly styled list that contains images.
The list usually has the following dependencies:

1. it has no styles.
2. It has a width and height suitable for displaying one image.
3. all images have the same width and height.
4. all but one of the images are invisible.

Add the ```slider``` class in the appropriate place in the HTML code.

### Step 2
Prepare the **app.js** file for your work.
Then find the following elements and save them to variables:

1. The ``next`` button.
2. The ``prev`` button.
3. All elements of the list (save to an array).

Add a numeric variable, which will determine the index of the image that is currently visible (at the beginning it will be the first image - so the variable will point to the index **0**).

Write the variables in the console to make sure they contain the correct data.

### Step 3
After adding the ``slider`` class, all the images disappeared. Add the ``visible`` class to the zero element of your list. Use the appropriate variables:
* an array with the elements of the list,
* a variable that specifies the visible element. 
When you enter the page, the first image should be visible.

### Step 4
Add click events to the buttons. At first, they should only write on the console the information about being clicked.

### Step 5
Do the following in the event responsible for showing the next image:

1. take away the ``visible`` class from the currently visible image.
   Increase the variable holding the index of the picture that is currently visible by one.
   Add the ``visible`` class to the image that should be visible.
   Use the appropriate variables (that is, an array of list item elements, and a variable that specifies which element is visible).

### Step 6
Perform the same actions in the event for the button showing the previous as you did in step 5.

### Step 7
Check how your page works. Do you see any problems with the slider? Describe them.

### Step 8
In the previous point, you should have noticed that after repeatedly pressing the forward (or backward) button, images disappear from the page. This happens because the variable specifying the number of the visible picture takes an invalid value (less than zero or greater than the number of elements in your array).
How to fix this? In each event add an **if** that will check if the value is not out of range. If it is outside the range, the program should set the correct value:
* number is negative -> the last element,
* number is greater than or equal to number of elements -> **0**.


## Gallery

Write a simple gallery. When a thumbnail of a photo is clicked, it should show up in full screen mode.
This will happen by adding a new element when someone clicks on the thumbnail.
The exercise is divided into steps. Remember to stick exactly to the points and do them one at a time.

### Step 1
Familiarize yourself with the HTML and CSS code added to the task. To make a gallery, usually a properly styled list is used that contains images.
The list usually has the following dependencies:

1. it has no styles.
2. it has a width and height suitable for displaying one image.
3. All images have the same width and height.
4. all images are visible.

In your HTML code, add (manually) the ```gallery``` class in the appropriate place.

### Step 2
Prepare the **app.js** file for work.
Then find the following elements and save them to variables:
1. all elements of the list (save to an array).
2. **Tag** ```body``` (we will need it to add an element that will show in full screen).

List the variables in the console to make sure they contain valid data.

### Step 3
Add a click-response event to all the images. First, it can output "it works" on the console.

### Item 4
Modify the event so that it prints the URL of the clicked image in the console. Use ```this``` for this.

### Step 5
Note that at the top of the **app.js** file there is a commented out piece of HTML code. This is the template for the element that should be added to the page.
Review it, and then modify the event for images in such a way that such elements are created and add it to the ``body`` **tag**.
Remember to put the appropriate data under the URL of the image.

### Step 6
When you click on an image, you should see an enlarged image + button. You must now add an event that reacts to clicking on the button. It should cause the removal of the newly created element from the DOM tree.

### Step 7
Check how your page works. Do you see any problems? Describe them.


## Gallery with filter

Write a gallery in which you will hide images with appropriate tags.
When you enter a tag in the input and click the button, the pictures with this tag should disappear/appear.

The exercise is divided into steps. Remember to stick exactly to their instructions and do them one by one.

### Step 1
Familiarize yourself with the HTML and CSS code added to the task. To make a gallery, we usually use a div with an appropriate id.

### Step 2
Prepare the **app.js** file for work.
Then find the following elements and save them to variables:

1. All images belonging to the gallery (save them to an array).
2. the button responsible for making the images disappear.
3. The button responsible for making the images appear.
4. The input where we will enter the tags.

Print out the variables on the console to make sure they contain the correct data.

### Step 3
Add click events to the buttons. Verify that they work by displaying some text on the console.

### Step 4
Change the events so that they display the text entered in the input and then clear it.
Save this text to a variable.

### Step 5
Change the events so that they additionally display all tags for all images (you must use a loop and dataset).

### Step 6
Change events so that they only display tags which contain an input (use ``indexOf``).

### Step 7
Change events so that instead of displaying a tag for an image (only for those that have the appropriate tag), the image gets or loses (depending on the button) the ``invisible`` class.

### Step 8
Review how your page works. Do you see any problems? Describe them.


## Menu

Write a simple drop-down menu. They are usually created in a list (where submenus are placed in nested lists).
Our menu has two levels (you can make further levels similar to the first one).

The task is divided into steps. Remember to follow them carefully and do them one by one.

### Step 1
Familiarize yourself with the HTML and CSS code added to the exercise. The menu will display well when you add the appropriate **class** to the corresponding element.

### Step 2
Prepare the **app.js** file for work.

Then find the list elements and save them to variables. Do it for all the main list elements (the ones that are visible), without the nested list elements (the ones that are invisible). Remember to keep them in an array.
Print out the variables in the console to make sure they contain the correct data.

### Step 3
Add two events to each list element (held in a variable): ```mouseover``` and ```mouseout```. Output something in the console to verify that the events are linked properly.

### Step 4
Change the events so that they search the sublist of the element that was hovered over (i.e., the nested element **ul**).

### Step 5
Change events so that the message from step 3 is only displayed if the sublist exists (i.e. the returned item is not ```null```).

### Step 6
Change the ```mouseover``` event. It should not display information on the console, but make the sublist visible. If you don't know how to do this, check the CSS code to see how the list becomes invisible.

### Step 7
Change the ```mouseout``` event. It should not display information on the console, but make the sublist disappear again.

### Step 8
Check how your page works. Do you see any problems? Describe them.


## Tooltips

Write tooltips. These are little boxes that pop up when you hover over text with additional information. This is a simple version of what you will find here: https://jqueryui.com/tooltip/.

The text you want to display in the tooltip should be kept in a dataset.
The exercise is divided into steps. Remember to stick exactly to the content of the points and do them one by one.

### Step 1
Familiarize yourself with the HTML and CSS code added to the exercise.

### Step 2
Prepare the **app.js** file for work.
Then find elements with the **class** ```tooltip``` (remember there can be many) and write them to variables.
Output the variables on the console to make sure they contain valid data.

### Step 3
Add two events to each element with the **class** ```tooltip```: ```mouseover``` and ```mouseout```. Add to them the display of some kind of text in the console to check if everything works.

### Step 4
Modify events so that they display on the console the text of the tooltip that will be added.

### Step 5
Modify the ```mouseover``` event. It is supposed to add a new element to the element on which it is called. An example of the element you are to add can be found in the comment at the beginning of the **app.js** file.

### Step 6
Modify the ```mouseout``` event so that it removes the tooltip created in the previous step.

### Step 7
Check how your page works. Do you see any problems? Describe them.
