![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Exercise 1 - done with the lecturer

You will now create an application to retrieve information about a book with a given isbn number.

In the index.html file you have prepared a form.

Link an event to it so that when you validate the form, it sends a request to the API for a book with a given isbn number.

Use `fetch()` for this and make the query to the open API address:
> `https://www.googleapis.com/books/v1/volumes?q=isbn:{ISBNnumber}`

where instead of the `ISBNnumber` retrieved from the form

you will get a JSON in the response, and from it an object where you are interested in an array under the key `items`, and in it the first element - an object with information about the book.

After retrieving this data, using JavaScript, create an `h2` element with the title (it is in this object under the key `volumeInfo.title` and insert it into the element with the class `.book-info`.


Test the form for example for isbn = 0747532699


## Exercise 2

The task is to load data from the address: `https://pokeapi.co/api/v2/pokemon` and displaying their names in subsequent li elements.

Useful information:
* use the appropriate HTTP method if needed,
* use appropriate methods to inform the user about the status of the request (methods ```then()```, ```catch()```),
* check in the console if the data being loaded is an array, a string, or JSON,
* if the data is loaded correctly, create **li** elements in a loop, into which you will insert pokemon name, and you will insert **li** into **ul** 

### For volunteers

API returns only a certain number of pokemons + links to the API to retrieve the previous / next set.
Add pagination and retrieval of the next sets of pokemons. 



## Exercise 3


At `https://fer-api.coderslab.pl/v1/holidays` a database of national holidays of different countries is kept.
To use it, a special `key`: `e92601251-c0a2-4s63-v73f-54041195480f` must be sent.
The API also requires a country code (`country`). We have three:

- Poland (`PL`)
- United Kingdom (`GB`)
- United States (`US`)

| Resource | Method | Data | Description |
| -------- | ------ | ---- | ----------- |
| `/holidays` | `GET` | `key`, `country` | Retrieving holidays in a given country |


Use ```fetch()``` to load all holiday dates (as li-elements) into the **ul** element.
To properly load data in the ```fetch()``` function, you have to construct the URL of our request in a proper way, e.g: `https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`.

Load each holiday name into a **li** as a **h3.holiday-name** element, and load its date into a **li** as a **div.holiday-date** element.

Hint:
* Load the data and see what it looks like in the console, it will allow you to determine what you need to use to get to the names and dates of the holidays. You can also use the Network tab here.


### Additional

Add to the page a form that contains a `select` element in which you can choose which country's holidays should appear. Selecting an `option` element should cause a query to be sent again and list items to be re-created.
The default selection is `US`.

---
The data comes from the website: [https://holidayapi.com](https://holidayapi.com).
