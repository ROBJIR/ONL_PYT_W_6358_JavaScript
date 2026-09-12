document.addEventListener("DOMContentLoaded", () => {
  // children obsahuje pouze HTML elementy, nikoli textové uzly a mezery.
  // Indexy začínají nulou: třetí dítě má index 2, čtvrté index 3.

  // 1. .first -> první dítě -> třetí dítě
  const firstAnswer = document.querySelector(".first")
    .firstElementChild.children[2];

  // 2. #second -> rodič -> čtvrté dítě
  const secondAnswer = document.querySelector("#second")
    .parentElement.children[3];

  // 3. [data-ex="third"] -> prarodič -> poslední dítě -> první dítě
  const thirdContainer = document.querySelector('[data-ex="third"]')
    .parentElement.parentElement.lastElementChild.firstElementChild;
  // Prostřední dítě: pro 5 dětí je Math.floor(5 / 2) = 2.
  const middleIndex = Math.floor(thirdContainer.children.length / 2);
  const thirdAnswer = thirdContainer.children[middleIndex];

  // 4. div.fourth -> rodič -> první přímé dítě article -> druhé přímé dítě p
  const fourthParent = document.querySelector("div.fourth").parentElement;
  const firstArticle = Array.from(fourthParent.children)
    .find(element => element.tagName === "ARTICLE");
  const fourthAnswer = Array.from(firstArticle.children)
    .filter(element => element.tagName === "P")[1];

  // data-answer používáme jen pro kontrolu, nikoli pro nalezení prvků.
  const answers = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];
  answers.forEach((element, index) => {
    console.log(`Úloha ${index + 1}:`, element);
    console.assert(
      element.dataset.answer === String(index + 1),
      `Úloha ${index + 1}: vybraný prvek nemá očekávané data-answer.`
    );
  });
});
