console.log("start ... ");


function atime() {
      const adatetime = new Date();
      const milisecond100 = Math.floor(adatetime.getMilliseconds() / 100);
      const stradatetime = adatetime.toLocaleString("cs-CZ");

      document.getElementById("atime").textContent =
        stradatetime.toLocaleString("cs-CZ");

    console.log(stradatetime);

    }

atime();

setInterval(atime, 730);

console.log("... complette");