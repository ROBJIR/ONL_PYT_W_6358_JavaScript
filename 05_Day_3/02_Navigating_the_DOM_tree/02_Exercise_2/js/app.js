document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("a.btn");

  // Stejná funkce obsluhuje kliknutí na všechna tlačítka.
  // Běžná funkce má this nastavené na odkaz, na kterém je posluchač.
  // Šipková funkce by zde vlastní this neměla.
  function toggleNextElement(event) {
    // Odkazy mají href="#"; zabráníme skoku na začátek stránky.
    event.preventDefault();

    // Hledáme následující sourozenecký element, nikoli textový uzel.
    const nextElement = this.nextElementSibling;

    // Za posledním prvkem nemusí nic být. V tom případě skončíme.
    if (nextElement === null) {
      return;
    }

    // Připravená CSS třída používá visibility: hidden (místo zůstává).
    nextElement.classList.toggle("hidden");
  }

  buttons.forEach(button => {
    button.addEventListener("click", toggleNextElement);
  });
});
