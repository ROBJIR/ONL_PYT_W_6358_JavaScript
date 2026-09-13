/*
 * Šablona zvětšeného náhledu (krok 5):
 <div class="fullScreen">
   <img src="./images/1.jpeg">
   <button class="close">Close</button>
 </div>
 */

// KROK 1: V HTML má obal seznamu třídu gallery. Vzhled určuje CSS.

// KROK 2: Skript je v <head>, proto počkáme na vytvoření HTML prvků.
document.addEventListener("DOMContentLoaded", function () {
    console.log("start ... ");
    const menul1 = document.querySelectorAll("#level12");
    console.log("menu - level1:", menul1);
    /*    // querySelectorAll vrací NodeList. Array.from z něj vytvoří skutečné pole.
    const galleryItems = Array.from(document.querySelectorAll(".gallery li"));
    const body = document.querySelector("body");

    console.log("Položky galerie:", galleryItems);
    console.log("Body:", body);

    // KROK 3: Projdeme položky a každému obrázku přidáme reakci na kliknutí.
    galleryItems.forEach(function (item) {
        const image = item.querySelector("img");

        // Používáme běžnou function, aby this odkazovalo na obrázek,
        // na kterém je posluchač události. Šipková funkce vlastní this nemá.
        image.addEventListener("click", function () {
            // V kroku 3 lze samotnou reakci ověřit pomocí:
            // console.log("it works");

            // KROK 4: this.src obsahuje úplnou URL kliknutého obrázku.
            const imageUrl = this.src;
            console.log("URL kliknutého obrázku:", imageUrl);

            // KROK 5: Prvky nejprve vytvoříme v paměti a nastavíme jejich data.
            const fullScreen = document.createElement("div");
            fullScreen.classList.add("fullScreen");

            const fullImage = document.createElement("img");
            fullImage.src = imageUrl;
            fullImage.alt = this.alt;

            const closeButton = document.createElement("button");
            closeButton.classList.add("close");
            closeButton.type = "button";
            closeButton.textContent = "Close";

            // Sestavíme stejnou strukturu jako v šabloně nahoře.
            fullScreen.appendChild(fullImage);
            fullScreen.appendChild(closeButton);
            // Teprve přidáním do body se náhled objeví na stránce.
            body.appendChild(fullScreen);

            // KROK 6: Odstraníme celý obal včetně obrázku a tlačítka.
            // Funkce si pamatuje fullScreen z tohoto konkrétního kliknutí.
            closeButton.addEventListener("click", function () {
                fullScreen.remove();
            });
        });
    });
    */
});
