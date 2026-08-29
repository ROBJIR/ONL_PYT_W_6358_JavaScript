![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

Remember! In this exercise, the text in ```error-message``` and ```success-message``` must be exactly the same as in the instructions for this exercise.

There is a registration form on the page. Validate the form so that the success message appeared only if the following conditions are met:

1. Email contains a @ sign.
    - If the condition is not met, show the message **Email must contain the @ sign** in the ```error-message``` field,
2. Name is longer than 2 characters.
    - If the condition is not met, show the message **Your name is too short** in the ```error-message```field,
3. Surname is longer than 2 characters.
    - If the condition is not met, show the message **Your surname is too short** in the ```error-message``` field,
4. Password and repeated password are the same and neither of the fields is empty.
    - If the condition is not met, show the message **Passwords do not match or are empty** in the ```error-message``` field,
5. Checkbox must be checked.
    - If the condition is not met, show the message **You must accept the terms and conditions** in the ```error-message``` field.

If the form was successfully validated, show the message **The form was sent!** in the `#success-message` field.


## Exercise 2

There is an order form on the page with a section responsible for issuing an invoice in it.

Write JavaScript code that will make this section visible only if the "I want an invoice" checkbox is checked.

This should also work page launch: the section with the invoice data should be hidden!


## Exercise 3

The page contains a `select` and three images.
Each picture is assigned to one of the choices in the select. Write JavaScript code in a way that only the selected image was visible.

The image `Windows` should be displayed at the beginning. Then, after selecting another image and **confirming** the selection by `Confirm` button, change the displayed image.


## Exercise 4

On the page you will find a table with the results of local football championships. Below, there is a form that all referees fill in after a match.
Write JavaScript code in such a way that the following validation will take place after selecting appropriate teams:
1. The two teams must be different.
2. The number of goals should be non-negative.

If the form is validated correctly, appropriate information about the outcome of a match should appear as the next row in the table.


## Credit card validation - additional

In this exercise you will validate credit card numbers typed into the form on the page in real time (after each digit is typed).

The `#type` element contains three elements representing credit card companies. **Only** the icon of the card whose number is entered should be displayed, and it should be displayed as soon as the card type can be distinguished. After an appropriate number of numeric characters is typed, the correctness of the card number should be shown - by changing the icon color to green.

## Card recognition rules:
1. Visa numbers start with 4.
2. MasterCard numbers start with 5.
3. American Express numbers start with 3. The next digit must be either 4 or 7.

## Card validation rules:
1. Visa numbers are 13 up to 16 digits long.
2. MasterCard numbers are exactly 16 digits long.
3. American Express numbers are exactly 15 digits long.

Card validation rules were simplified for the purpose of this exercise (do not use them in your real projects).
If you want to know the real principles of credit card validation, you can read about it here:
[https://en.wikipedia.org/wiki/Bank_card_number](https://en.wikipedia.org/wiki/Bank_card_number), [https://en.wikipedia.org/wiki/Luhn_algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).
