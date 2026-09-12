console.log("start atime.js ... ");


function atime() {
      const adatetime = new Date();
      const milisecond100 = Math.floor(adatetime.getMilliseconds() / 100);
      const stradatetime = adatetime.toLocaleString("cs-CZ");

      document.getElementById("atime").textContent =
        stradatetime.toLocaleString("cs-CZ");

    console.log(stradatetime);
    }

setInterval(atime(), 80); 

/*
class timer {
    constructor() {
        this.atime = new Date();
    }
    set_atime() {
        this.atime = new Date();
        return this.atime;
    }    
    get_atime() {
        return this.set_atime();
    }      
    get_atime_string() {
        return this.get_atime().toLocaleString("cs-CZ");
    }
    log_atime() {
        console.log(this.get_atime_string());
    }
    element_atime() {
        document.getElementById("atime").textContent = this.get_atime_string();
    }
} 

let  at = new timer;
*/

/*
at.log_atime();

at.element_atime();

at.get_atime();

at.log_atime(); */

/* setInterval(at.element_atime(), 80); */


console.log("... atime.js complette");