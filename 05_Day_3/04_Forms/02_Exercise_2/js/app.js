document.addEventListener("DOMContentLoaded", () => {
  const invoiceCheckbox = document.querySelector("#invoice");
  const invoiceData = document.querySelector("#invoiceData");

  function updateInvoiceVisibility() {
    // checked je true, pokud je políčko zaškrtnuté.
    // hidden funguje opačně: true znamená, že sekce bude skrytá.
    invoiceData.hidden = !invoiceCheckbox.checked;

  }

  // Nastavíme správnou viditelnost už při načtení stránky.
  updateInvoiceVisibility();

  // change reaguje na zaškrtnutí i zrušení zaškrtnutí, také klávesnicí.
  invoiceCheckbox.addEventListener("change", updateInvoiceVisibility);
});
