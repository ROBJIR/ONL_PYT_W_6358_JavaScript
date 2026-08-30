// timer -
// robert.jiranek@gmail.com
// 
// ver 1.1, 2026-08-30 
// 
// console.log("start timer11.js ... ");

const elementCfg = [
                        {
                            elementId: "currentTime",
                            interval:  93,
                            format:    "YYYY-MM_DD_HH24:MI:SS"
                        },
                        {
                            elementId: "currentTime2",
                            interval:  2000,
                            format:    "YYYY-MM_DD_HH24:MI:SS"
                        },                        
                        {
                            elementId: "currentDay",
                            interval:  (1000 * 60), //   01min
                            format:    "day"
                        },
                        {
                            elementId: "currentTimeZone",
                            interval:  (1000 * 60 * 60 * 24), //   01day
                            format:    "TimezoneString"
                        }                        
                    ];                   

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
            case "TimezoneOffset":             
                return this.get_atime().getTimezoneOffset();                  
            case "TimezoneString":             
                const hours = Math.floor(this.get_atime().getTimezoneOffset() / 60);
                const minutes = this.get_atime().getTimezoneOffset() % 60;
                return ("TZ:" + String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0"));      
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
    element_atime(elementId,format) {
        document.getElementById(elementId).textContent
                                = this.get_atime_string(format);
    }
    element_setinterval(elementId,interval,format) {
        /*
        console.log("element_setinterval - start");
        console.log(" 01 - elementID: " + elementId);
        console.log(" 02 - interval:  " + interval);
        console.log(" 03 - format:    " + format);
        console.log("element_setinterval - complette");*/

        setInterval(at.element_atime.bind(at,elementId,format), interval);
    } 
    element_find() {
        for (const conf of elementCfg) { 
            /*
            console.log("elementId: " + conf.elementId);
            console.log("element:   " + conf.interval);
            console.log("format:    " + conf.format);
            */
            const element = document.getElementById(conf.elementId);
            if (element === null) {
                console.log(`warning: [timer.element_find]: elementID = "${conf.elementId}" not found.`);
            } else {
                this.element_atime(conf.elementId,conf.format);
                this.element_setinterval(conf.elementId,conf.interval,conf.format);
            }
        }
    }         
} 

let  at = new timer;
at.element_find();

/*
at.log_atime(); 
//setInterval(at.element_atime.bind(at,"currentTime"), 77);
at.log_atime();
*/

// console.log("... timer11.js complette");