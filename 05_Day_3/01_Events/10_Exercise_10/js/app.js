const a = document.getElementById("a");
const b = document.getElementById("b");

// Here 'this' points to the document object (Because the context
// for calling the addEventListener function is the document)
console.log("obiekt document: ", this);

a.addEventListener("click", function (event) {
  // Here 'this' points to the DOM element with id a
  console.log("a: ", this);
});

b.addEventListener("click", function (event) {
  // Here 'this' points to the DOM element with id b
  console.log("b: ", this);


  function innerFuncOne() {
    // Here 'this' points to the Window element 
    // because the function was called without a context.
    console.log("innerFuncOne: ", this);
  }

  innerFuncOne();

});
