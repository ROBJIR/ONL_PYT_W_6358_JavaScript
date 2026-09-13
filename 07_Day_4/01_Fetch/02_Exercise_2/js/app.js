const input = document.querySelector("input");
const button = document.querySelector("button")


fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then(res => {return res.json()})
    .then(data => {
        console.log(data.results);

        const section = document.querySelector(".list");

        data.results.forEach(element => {
            const l = document.createElement("li");
            const a = document.createElement("a");
            a.href = element.url;
            a.innerText = element.name;
            // innerText =  element.name+" - "+element.name;
            section.appendChild(l);
            l.appendChild(a);
        });
    })
    .catch(err => console.log("ERROR: " + err));


