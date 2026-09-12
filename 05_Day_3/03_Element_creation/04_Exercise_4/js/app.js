document.addEventListener("DOMContentLoaded", () => {

  const checkItem = document.querySelector("#invoice");
  const checkItem = document.querySelector("#invoiceData");

  checkItem.style.display = "none";

  
  // submit funguje při kliknutí na tlačítko i při odeslání Enterem.
  form.addEventListener("submit", event => {
    // Zabráníme odeslání formuláře a obnovení stránky.
    event.preventDefault();

    // Aktuální hodnoty čteme až při odeslání, nikoli při načtení stránky.
    const values = [orderIdInput.value, itemInput.value, quantityInput.value];
    const row = document.createElement("tr");

    values.forEach(value => {
      const cell = document.createElement("td");
      // Uživatelský vstup vložíme jako text, nikoli jako HTML.
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Připojíme řádek na konec tbody; původní objednávky zůstanou zachované.
    ordersBody.appendChild(row);
  });
});
