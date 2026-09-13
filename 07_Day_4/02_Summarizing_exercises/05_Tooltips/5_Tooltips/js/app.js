/*
 <span class="tooltipText">Tooltip text</span>
 */

 document.addEventListener("DOMContentLoaded", function () {

    const tooltips = document.querySelectorAll(".tooltip");

    tooltips.forEach( function (t) {
        const span = document.createElement("span");

        t.addEventListener("mouseover", e => {
            span.classList.add("tooltipText");
            span.innerText = t.dataset.text;
            t.appendChild(span);
        });

        t.addEventListener("mouseout", f => {
            span.remove();
        });
    });

 });