/*
 * Pozorování ke cvičení 2:
 * 1. Běžný externí skript v head se spustí dříve, než prohlížeč vytvoří
 *    prvky v body. querySelector proto vrátí null a menu.classList
 *    vyvolá TypeError. Původní kód na konci body funguje, protože prvky
 *    nad skriptem už existují.
 * 2. DOMContentLoaded se vyvolá po zpracování HTML. Uvnitř obsluhy
 *    už #menu i odstavec existují, takže skript funguje i v head.
 *    Také samotné querySelector musí být uvnitř této obsluhy.
 * 3. Po přesunutí skriptu před </body> zůstává výsledek stejný.
 *    Obsluha stále čeká na DOMContentLoaded, ačkoli hledané prvky
 *    už při registraci obsluhy existují. Na obrázky tato událost nečeká.
 *
 * app.js vkládáme jen jednou. Původní dvojí vložení způsobovalo také
 * SyntaxError při opakované deklaraci globálních const menu a paragraph.
 */
document.addEventListener("DOMContentLoaded", () => { 

  const menu = document.querySelector("#menu");
  const paragraph = document.querySelector("p");

  menu.classList.add("menu");
  paragraph.textContent = "And this is a paragraph in exercise 2";

}); 
