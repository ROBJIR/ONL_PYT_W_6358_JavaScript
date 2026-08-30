/* console.log("start timer10.js ... "); */

class timer {
    constructor() {
        this.stime = new Date(); /* start time */
    }
    set_atime() {
        this.atime = new Date();
        return this.atime;
    }    
    get_atime() {
        /* return this.set_atime(); */
        return new Date();
    }      
    get_atime_string(timeformat) {
        switch (timeformat) {
            case "toLocaleTimeString":
                return this.get_atime().toLocaleTimeString("cs-CZ");
            case "toLocaleDateString":
                return this.get_atime().toLocaleDateString("cs-CZ");          
            case "toISOString":
                return this.get_atime().toISOString();
            case "day":             
                return this.get_atime().toLocaleString("cs-CZ",{weekday: "long"});
            case "YYYY-MM_DD_HH24:MI:SS":
                const xad = value => String(value).padStart(2, "0");
                return (
                        this.get_atime().getFullYear() + "-" +
                    xad(this.get_atime().getMonth() + 1) + "-" +
                    xad(this.get_atime().getDate()) + " " +
                    xad(this.get_atime().getHours()) + ":" +
                    xad(this.get_atime().getMinutes()) + ":" +
                    xad(this.get_atime().getSeconds())
                );            
            default:
                return this.get_atime().toLocaleString("cs-CZ");
        }
    }
    log_atime() {
        console.log(this.get_atime_string("toISOString"));
    }
    element_atime(elementId) {
        const element = document.getElementById(elementId);
        if (element === null) {
            console.error(`ERROR: elementID  = "${elementId}" not found.`);
            return;
        }
        element.textContent
            = this.get_atime_string("day")+" "+this.get_atime_string("YYYY-MM_DD_HH24:MI:SS");
    }
} 

let  at = new timer;

/* at.log_atime(); */
setInterval(at.element_atime.bind(at,"currentTime"), 77);
/* at.log_atime(); */

/* console.log("... timer10.js complette"); */