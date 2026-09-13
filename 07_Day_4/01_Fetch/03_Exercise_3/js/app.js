

fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`)
    .then(res => {return res.json()})
    .then(data => {
        console.log(data);
/*
        data.results.forEach(element => {
            const l = document.createElement("li");
            const a = document.createElement("a");
            a.href = element.url;
            a.innerText = element.name;
            // innerText =  element.name+" - "+element.name;
            section.appendChild(l);
            l.appendChild(a);
        });
        */
    })
    .catch(err => console.log("ERROR: " + err));